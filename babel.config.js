module.exports = function (api) {
  api.cache(true);

  //const presets = [ ... ];
  const plugins = ["@babel/plugin-transform-react-jsx","react-css-modules"]

  return {
    //presets,
    plugins
  };
}