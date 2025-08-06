
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
    'index.csr.html': {size: 871, hash: '9770ed6d55cfd8f94784e08dbfb8164c27f986a474171d92f45a6de353786f62', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: 'b45330c0520b4f7c3f8d10933a468f285d0646158d4ed5819d85357fd9a964d5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3782, hash: 'e4572beb3c7307c4c62204c15eea12c5cb410d050e0c1da303e8b388bda8bf00', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NT7XA6KR.css': {size: 253, hash: 'f/vkHxiydNw', text: () => import('./assets-chunks/styles-NT7XA6KR_css.mjs').then(m => m.default)}
  },
};
