import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// Plugin to copy Prompt folders to dist
const copyPromptFolders = () => {
  return {
    name: 'copy-prompt-folders',
    closeBundle() {
      const folders = ['prompt1', 'prompt2', 'prompt3', 'prompt4'];
      folders.forEach(folder => {
        const src = resolve(__dirname, folder);
        const dest = resolve(__dirname, 'dist', folder);
        if (fs.existsSync(src)) {
          fs.cpSync(src, dest, { recursive: true });
        }
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyPromptFolders()],
})
