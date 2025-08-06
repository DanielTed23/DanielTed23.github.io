
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
    'index.csr.html': {size: 871, hash: '89558431d9809454941ccd70d624f5180e9cc9c3e0bf9b677e832c77fc4ea4ab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: 'acbcbd9d8b124764d57c554610398feb78a76c3f13e355eb78c494f6e5a85de3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3759, hash: '0e16a240f98fa760b4a797721518af314b8e3c46771c9638fd9dccd3ccdbbf0d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NT7XA6KR.css': {size: 253, hash: 'f/vkHxiydNw', text: () => import('./assets-chunks/styles-NT7XA6KR_css.mjs').then(m => m.default)}
  },
};
