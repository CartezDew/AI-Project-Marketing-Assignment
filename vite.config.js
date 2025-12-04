import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// Plugin to serve built prompt folders during dev
const serveBuiltFolders = () => {
  return {
    name: 'serve-built-folders',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        
        // Serve prompt3 from its dist folder
        if (url.startsWith('/prompt3/')) {
          const filePath = url.replace('/prompt3/', '') || 'index.html';
          const fullPath = resolve(__dirname, 'prompt3/dist', filePath);
          
          if (fs.existsSync(fullPath)) {
            const ext = fullPath.split('.').pop();
            const mimeTypes = {
              'html': 'text/html',
              'js': 'application/javascript',
              'css': 'text/css',
              'svg': 'image/svg+xml',
              'png': 'image/png',
              'jpg': 'image/jpeg',
              'webp': 'image/webp'
            };
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            res.end(fs.readFileSync(fullPath));
            return;
          }
        }
        
        // Serve final-website from its dist folder  
        if (url.startsWith('/final-website/')) {
          const filePath = url.replace('/final-website/', '') || 'index.html';
          const fullPath = resolve(__dirname, 'final-website/dist', filePath);
          
          if (fs.existsSync(fullPath)) {
            const ext = fullPath.split('.').pop();
            const mimeTypes = {
              'html': 'text/html',
              'js': 'application/javascript',
              'css': 'text/css',
              'svg': 'image/svg+xml',
              'png': 'image/png',
              'jpg': 'image/jpeg',
              'webp': 'image/webp'
            };
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            res.end(fs.readFileSync(fullPath));
            return;
          }
        }
        
        next();
      });
    }
  }
}

// Plugin to copy built prompt folders to dist
const copyPromptFolders = () => {
  return {
    name: 'copy-prompt-folders',
    closeBundle() {
      // Copy built folders
      const builtFolders = [
        { src: 'prompt3/dist', dest: 'prompt3' },
        { src: 'final-website/dist', dest: 'final-website' }
      ];
      
      builtFolders.forEach(({ src, dest }) => {
        const srcPath = resolve(__dirname, src);
        const destPath = resolve(__dirname, 'dist', dest);
        if (fs.existsSync(srcPath)) {
          fs.cpSync(srcPath, destPath, { recursive: true });
        }
      });
      
      // Copy source folders (prompt1, prompt2 - legacy)
      const sourceFolders = ['prompt1', 'prompt2'];
      sourceFolders.forEach(folder => {
        const srcPath = resolve(__dirname, folder);
        const destPath = resolve(__dirname, 'dist', folder);
        if (fs.existsSync(srcPath)) {
          fs.cpSync(srcPath, destPath, { recursive: true });
        }
      });
    }
  }
}

export default defineConfig({
  plugins: [react(), serveBuiltFolders(), copyPromptFolders()],
})
