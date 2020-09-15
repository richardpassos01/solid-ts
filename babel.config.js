module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@application': './src/application',
        '@business': './src/business',
        '@infrastructure': './src/infrastructure',
      },
    }],
  ],
  ignore: [
    '**/*.test.js',
    'node_modules',
    '.editorconfig',
  ],
};
