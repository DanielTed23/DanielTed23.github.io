
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
    'index.csr.html': {size: 1760, hash: 'e2e72251b20eb60983a59ce4e89908a032157a05bde56d8bf80b0f38e54f2d61', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: '123f8d16428bbb801026f3c99aa0e7aeeaa90f46497461fcecabeddc38f2a9be', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'om/index.html': {size: 2030, hash: '0624b699724c1bf53cff785b24ac766130ca9646e48d9b6be4ed76e43033f0a7', text: () => import('./assets-chunks/om_index_html.mjs').then(m => m.default)},
    'index.html': {size: 17008, hash: 'b678d03901a55b65b8534b9c3042e200f4c123d0c4c39ff3bac6bf2ca6760586', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZAU6VCXE.css': {size: 16234, hash: 'l/CC8pz47lA', text: () => import('./assets-chunks/styles-ZAU6VCXE_css.mjs').then(m => m.default)}
  },
};
