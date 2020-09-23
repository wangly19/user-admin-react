interface IRequireModule {
  [key: string]: string;
}

interface APIModuleFunction {
  [key: string]: () => Promise<any>;
}

const apiModules: __WebpackModuleApi.RequireContext = require.context(
  './',
  false,
  /.api/,
);

Object.keys(apiModules).forEach((moduleName: string): void => {
  const module: IRequireModule = apiModules(moduleName).default;
  // 转化Module 为 APIFunctionModule
});
