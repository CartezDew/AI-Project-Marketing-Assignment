import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// Plugin to copy static prompt folders (prompt1, prompt2) to dist during build
const copyStaticPrompts = () => {
  return {
    name: 'copy-static-prompts',
    closeBundle() {
      const folders = ['prompt1', 'prompt2'];
      
      folders.forEach((folder) => {
        const srcPath = resolve(__dirname, folder);
        const destPath = resolve(__dirname, 'dist', folder);
        if (fs.existsSync(srcPath)) {
          fs.cpSync(srcPath, destPath, { recursive: true });
        }
      });
    }
  }
}

// Plugin to serve static prompt folders (prompt1, prompt2) during dev
// Only serves files with extensions (assets), not the base URLs
const serveStaticPrompts = () => {
  return {
    name: 'serve-static-prompts',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        
        const mimeTypes = {
          'html': 'text/html',
          'js': 'application/javascript',
          'jsx': 'application/javascript',
          'ts': 'application/javascript',
          'tsx': 'application/javascript',
          'css': 'text/css',
          'svg': 'image/svg+xml',
          'png': 'image/png',
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'webp': 'image/webp',
          'woff': 'font/woff',
          'woff2': 'font/woff2',
          'ttf': 'font/ttf',
          'ico': 'image/x-icon',
          'json': 'application/json'
        };
        
        // Only serve prompt1 assets (files with extensions), not the base URL
        if (url.startsWith('/prompt1/') && url.includes('.')) {
          const filePath = url.replace('/prompt1/', '');
          const fullPath = resolve(__dirname, 'prompt1', filePath);
          
          if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
            const content = fs.readFileSync(fullPath);
            const ext = fullPath.split('.').pop();
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            res.end(content);
            return;
          }
        }
        
        // Only serve prompt2 assets (files with extensions), not the base URL
        if (url.startsWith('/prompt2/') && url.includes('.')) {
          const filePath = url.replace('/prompt2/', '');
          const fullPath = resolve(__dirname, 'prompt2', filePath);
          
          if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
            const content = fs.readFileSync(fullPath);
            const ext = fullPath.split('.').pop();
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            res.end(content);
            return;
          }
        }
        
        next();
      });
    }
  }
}

export default defineConfig({
  plugins: [react(), serveStaticPrompts(), copyStaticPrompts()],
})
