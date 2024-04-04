// App.js
'use client'
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import Stopwatch from './Stopwatch/page';

const Page = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Stopwatch />
      </div>
    </Provider>
  );
};

export default Page;
