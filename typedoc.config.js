/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ["src/*"],
  outputFileStrategy: "Modules",
  plugin: ["typedoc-plugin-markdown"],
  entryPointStrategy: "Expand",
  mergeReadme: true,
  readme: "./readme.initial.md",
}
