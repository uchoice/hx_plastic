
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  disableCSSModules: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: '桦萱医疗美容',
      dll: false,

      routes: [
        {
          path: '/',
          component: '../layouts',
          routes: [
            { path: '/home', component: '/home' },
          ]
        },
      ],
    }],
  ],
}
