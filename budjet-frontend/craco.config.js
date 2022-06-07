const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "primary-color": "#ff7a4a",
              "link-color": "#0DD078",
              "success-color": "#0DD078",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
