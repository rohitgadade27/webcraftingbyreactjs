import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function run() {
  const clientDir = toAbsolute('dist/client')
  const serverDir = toAbsolute('dist/server')
  const finalDir = toAbsolute('dist')
  
  const templatePath = path.join(clientDir, 'index.html')
  if (!fs.existsSync(templatePath)) {
    console.error('Error: index.html template not found at', templatePath)
    process.exit(1)
  }
  
  const template = fs.readFileSync(templatePath, 'utf-8')
  
  const serverEntryPath = path.join(serverDir, 'entry-server.js')
  if (!fs.existsSync(serverEntryPath)) {
    console.error('Error: server entry not found at', serverEntryPath)
    process.exit(1)
  }
  
  // Import the render function from the compiled server entry
  const { render } = await import(fileURLToPath(new URL('./dist/server/entry-server.js', import.meta.url)))
  
  const routesToPrerender = [
    { path: '/', file: 'index.html' },
    { path: '/social-media', file: 'social-media/index.html' }
  ]
  
  for (const { path: routePath, file } of routesToPrerender) {
    const { html } = render(routePath)
    
    // Extract title, meta, link, and ld+json script tags from the rendered HTML
    let titleTag = ''
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/)
    if (titleMatch) {
      titleTag = titleMatch[0]
    }
    
    const metaTags = []
    const metaRegex = /<meta[^>]*\/?>/g
    let match
    while ((match = metaRegex.exec(html)) !== null) {
      metaTags.push(match[0])
    }
    
    const linkTags = []
    const linkRegex = /<link[^>]*\/?>/g
    while ((match = linkRegex.exec(html)) !== null) {
      // Keep only specific link tags (avoid stylesheet link preloads unless they are custom)
      // Usually, any link tag in the body iscanonical or custom metadata preloads we rendered
      linkTags.push(match[0])
    }
    
    const jsonLdTags = []
    const scriptRegex = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
    while ((match = scriptRegex.exec(html)) !== null) {
      jsonLdTags.push(match[0])
    }
    
    // Clean up the body HTML by removing the metadata tags we are hoisting
    let cleanHtml = html
      .replace(/<title[^>]*>[\s\S]*?<\/title>/g, '')
      .replace(/<meta[^>]*\/?>/g, '')
      .replace(/<link[^>]*\/?>/g, '')
      .replace(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, '')
      
    // Construct the meta tags block to inject in the head
    const headTags = [
      titleTag,
      ...metaTags,
      ...linkTags,
      ...jsonLdTags
    ].join('\n')
    
    // Inject the cleaned body HTML into the container
    let htmlContent = template.replace('<div id="root"></div>', `<div id="root">${cleanHtml}</div>`)
    
    // Inject the head tags into the head (just before </head>, and replacing the template's default title)
    htmlContent = htmlContent.replace(/<title[^>]*>[\s\S]*?<\/title>/, '')
    htmlContent = htmlContent.replace('</head>', `${headTags}\n</head>`)
    
    const filePath = path.join(clientDir, file)
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    fs.writeFileSync(filePath, htmlContent, 'utf-8')
    console.log(`[SSG] Pre-rendered: ${routePath} -> dist/client/${file}`)
  }
  
  // Copy everything from dist/client up to dist
  console.log('[SSG] Copying pre-rendered client assets to dist...')
  const files = fs.readdirSync(clientDir)
  for (const file of files) {
    const srcPath = path.join(clientDir, file)
    const destPath = path.join(finalDir, file)
    fs.cpSync(srcPath, destPath, { recursive: true })
  }
  
  // Clean up client and server folders inside dist
  console.log('[SSG] Cleaning up temporary directories...')
  fs.rmSync(clientDir, { recursive: true, force: true })
  fs.rmSync(serverDir, { recursive: true, force: true })
  
  console.log('[SSG] Static Site Generation completed successfully!')
}

run().catch(err => {
  console.error('[SSG] Error during prerendering:', err)
  process.exit(1)
})
