import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Répertoire de sortie pour les fichiers de build
    assetsDir: 'assets', // Répertoire pour les fichiers d'assets comme CSS, JS, etc.
    // Autres configurations de build peuvent être ajoutées ici
  },
})
