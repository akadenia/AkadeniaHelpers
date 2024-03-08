To be able to publish this package, you need to create a personal github auth token and add the following to `.npmrc` (Replace <NPM_AUTH_TOKEN> with your token or set it up in your global env variables)

//npm.pkg.github.com/:_authToken=${NPM_AUTH_TOKEN}
@akadenia:registry=https://npm.pkg.github.com

## Getting Started

< How to setup this package with code samples >

## Contributing to this package

This package follows the commitlint and conventional commits standards. As such the commit messages should follow the following format:

```text
<type>(optional scope): <description> eg: feat: add new feature OR fix(map-loading): fix rendering on ipad devices
```

Common types according to [commitlint-config-conventional (based on the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) can be:

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test
- BREAKING CHANGE

## License

MIT
