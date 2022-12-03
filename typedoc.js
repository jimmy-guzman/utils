/**
 * @type {import('typedoc').TypeDocOptions}
 */
module.exports = {
  entryPoints: ['./src/index.ts'],
  out: 'docs',
  includeVersion: true,
  categorizeByGroup: true,
  navigationLinks: {
    GitHub: 'https://github.com/jimmy-guzman/utils',
  },
}
