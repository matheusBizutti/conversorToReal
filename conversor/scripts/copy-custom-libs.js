const existingConfig = require('../node_modules/@ionic/app-scripts/config/copy.config');

module.exports = Object.assign(existingConfig, {
  copyThfAssets: {
    src: ['{{ROOT}}/node_modules/@totvs/mobile-theme/**/*'],
    dest: '{{WWW}}/assets'
  }
});
