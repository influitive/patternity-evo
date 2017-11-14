import './style.css';
const context = require.context('../src/', true, /card\.js$/);
context.keys().forEach(function(moduleName) {
  context(moduleName);
});

module.hot.accept();
