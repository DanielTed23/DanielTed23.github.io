
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/DanielTed23.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/DanielTed23.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 892, hash: '07ebec0e886528f39431de0f901877b48c91b7353e2211ffd5eb59038714d481', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '51ef672147adf7df4329c9c1068703070950c45db8ecb92e8655c86975690f2a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3780, hash: '88f013368a60fb182db0f3f896412634c57c9fad5e294b6bbcaec0e0c0173151', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NT7XA6KR.css': {size: 253, hash: 'f/vkHxiydNw', text: () => import('./assets-chunks/styles-NT7XA6KR_css.mjs').then(m => m.default)}
  },
};
