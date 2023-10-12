/* eslint-env node */
/* eslint @typescript-eslint/no-var-requires: "off" */

const getWebpackConfig = require("@skzm/web-common/script/webpack.config");

const dirname = __dirname;
const config = getWebpackConfig({
  dirname,
  umdOptions: {
    packageList: [
      "react",
      "react-dom",
      "nprogress",
      "@remix-run/router",
      "react-router",
      "react-router-dom",
      "dayjs",
      "antd",
      "@ant-design/icons",
      "antd-mobile",
      "cos-js-sdk-v5",
    ],
    dirname,
  },
});

module.exports = config;
