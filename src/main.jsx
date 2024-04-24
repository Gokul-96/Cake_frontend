import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './Dashboard/HomeScreen';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(  document.getElementById('root')
);

  
  
  root.render(
  <Provider store={store}>
     <Navbar/>
    <HomeScreen />
   
  </Provider>
  );
