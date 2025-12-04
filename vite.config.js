import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// Plugin to copy prompt site folders to dist during build
const copyPromptFolders = () => {
  return {
    name: 'copy-prompt-folders',
    closeBundle() {
      const folders = [
        { src: 'prompt3/dist', dest: 'prompt3' },
        { src: 'final-website/dist', dest: 'final-website' },
        { src: 'prompt1', dest: 'prompt1' },
        { src: 'prompt2', dest: 'prompt2' }
      ];
      
      folders.forEach(({ src, dest }) => {
        const srcPath = resolve(__dirname, src);
        const destPath = resolve(__dirname, 'dist', dest);
        if (fs.existsSync(srcPath)) {
          fs.cpSync(srcPath, destPath, { recursive: true });
        }
      });
    }
  }
}

// Plugin to serve prompt folders during dev
const servePromptFolders = () => {
  return {
    name: 'serve-prompt-folders',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        
        // Serve prompt3 from its dist folder
        if (url.startsWith('/prompt3/')) {
          const filePath = url.replace('/prompt3/', '');
          const fullPath = resolve(__dirname, 'prompt3/dist', filePath || 'index.html');
          
          if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath);
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
            res.end(content);
            return;
          }
        }
        
        // Serve final-website from its dist folder
        if (url.startsWith('/final-website/')) {
          const filePath = url.replace('/final-website/', '');
          const fullPath = resolve(__dirname, 'final-website/dist', filePath || 'index.html');
          
          if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath);
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
            res.end(content);
            return;
          }
        }
        
        // Serve prompt1 and prompt2 from source folders
        if (url.startsWith('/prompt1/') || url.startsWith('/prompt2/')) {
          const folder = url.startsWith('/prompt1/') ? 'prompt1' : 'prompt2';
          const filePath = url.replace(`/${folder}/`, '');
          const fullPath = resolve(__dirname, folder, filePath || 'index.html');
          
          if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath);
            const ext = fullPath.split('.').pop();
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
              'webp': 'image/webp'
            };
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
  plugins: [react(), servePromptFolders(), copyPromptFolders()],
})
