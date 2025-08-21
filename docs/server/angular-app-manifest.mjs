
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/om"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1760, hash: 'b1ba6480a46248c55afc43f3b56fb3188d2d6cc2a79144584d5d51c08a9876b8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: 'bf8579c37f036c4f40e8d9ae5f69afa9fa78bebac6af1fb1514e25639777333d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'om/index.html': {size: 2030, hash: '7674e47d6705b53815d0f089bcb0b709b052bec0599bec661e2d9316224f38d7', text: () => import('./assets-chunks/om_index_html.mjs').then(m => m.default)},
    'index.html': {size: 16650, hash: 'b61fc54ba29bb3c3f4a44b3ffacad937d5543cf9776ffb84996aa7d8414bbfa4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZAU6VCXE.css': {size: 16234, hash: 'l/CC8pz47lA', text: () => import('./assets-chunks/styles-ZAU6VCXE_css.mjs').then(m => m.default)}
  },
};
