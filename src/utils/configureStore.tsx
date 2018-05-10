import { compose, createStore } from 'redux';
import { rootReducer } from '../reducers';

declare global {
  interface Window {
    devToolsExtension: any;
  }
}

let devToolsExtension = (f: any) => f;

if (window.devToolsExtension) {
  devToolsExtension = window.devToolsExtension();
}

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(devToolsExtension),
  );
  return store;
};

export { configureStore };
