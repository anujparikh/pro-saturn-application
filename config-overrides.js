const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const aliyunTheme = require('@ant-design/aliyun-theme');
const overrideAntTheme = require('./ant-theme-override');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      ...aliyunTheme.default,
      ...overrideAntTheme,
    },
  }),
);
