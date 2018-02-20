module.exports = {
  excludes: [
    'src/test/**',
    '.storybook/**',
    'build/**',
    'coverage/**',
    'public/**'
  ],
  environments: ['browser', 'node', 'jest'],
  aliases: {
    styled: 'node_modules/styled-components',
    v4: 'node_modules/uuid',
    jwt: 'node_modules/jsonwebtoken'
  },
  declarationKeyword: 'import'
}
