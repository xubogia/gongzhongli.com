const px2remOptions = {
  rootValue: {px:16},
  unitPrecision: 5,
  mediaQuery: false,
  minPixelValue: 0
}
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-plugin-px2rem':px2remOptions,
  },
};
