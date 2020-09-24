module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/Components',
          '@screen': './src/Components/Screen',
          '@stack': './src/Components/StackScreen',
          '@data': './src/Data',
          '@util': './src/Util',
          '@client': './src/Api',
        },
      },
    ],
  ],
};
