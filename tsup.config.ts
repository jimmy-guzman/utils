import { defineConfig } from 'tsup'

export default defineConfig(({ watch = false }) => {
  return {
    splitting: true,
    entry: ['src/index.ts'],
    clean: true,
    dts: !watch,
    format: watch ? 'esm' : ['esm', 'cjs'],
    minify: !watch,
    silent: false,
    sourcemap: Boolean(watch),
    target: 'node14',
  }
})
