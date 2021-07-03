import React, {useEffect} from 'react';
import Navigation from './src/Navigation/index';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
const store = configureStore();

export default () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
// TODO

// use styledComponents
