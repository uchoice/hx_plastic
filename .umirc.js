
// ref: https://umijs.org/config/
export default {
  exportStatic: {},
  treeShaking: true,
  outputPath: './dist/hx-plastic',
  publicPath: '', //http://yntt.oss-cn-hangzhou.aliyuncs.com/static/backend/1.0.0/
  disableCSSModules: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: '桦萱医疗美容',
      dll: false,
    }],
  ],
  routes: [
    {
      path: '/',
      component: '../layouts',
      routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: './home' },
        { path: '/cases', component: './cases' },
        {
          path: '/star-project',
          component: './star-project',
        },
        { path: '/join-us', component: './join-us' },
        { path: '/star-doctors', component: './star-doctors' },
        { path: '/contact-us', component: './contact-us' },
        { path: '/hx-team', component: './hx-team' },
        { path: '/tech-training', component: './tech-training' },
        { path: '/project-info', component: './project-info' },
      ]
    },
  ],
}
