import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/termin/',
  plugins: [react()],
  loaders: [
    {
      json: /\.json$/,
      loader: 'json-loader',
    },
  ],
})
