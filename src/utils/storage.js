import store from 'store';

if (!store.enabled) {
  console.warn('Local storage is not supported by your browser. This may be due to a privacy mode.');
}

export default store;