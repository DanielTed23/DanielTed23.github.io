
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 871, hash: '2a6d8c0beaaec8c71b31c2b73b29735b76b46e6e190b36d89594df67dfcc8b94', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: '577b9d1d477bc01760f2f6035f8021f6b3a6cd2508bec6c41310dd88799bde0d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2140, hash: '04611af6d8cf9010caf29a1566606842a53a09388fb505241cadf11420fc2ca9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NT7XA6KR.css': {size: 253, hash: 'f/vkHxiydNw', text: () => import('./assets-chunks/styles-NT7XA6KR_css.mjs').then(m => m.default)}
  },
};
