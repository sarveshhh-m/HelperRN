module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/components': './src/components',
          '~/constants': './src/constants',
          '~/hooks': './src/hooks',
          '~/navigators': './src/navigators',
          '~/screens': './src/screens',
          '~/styles': './src/styles',
          '~/utils': './src/utilities',
        },
      },
    ],
  ],
};
