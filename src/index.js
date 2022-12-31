import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  store from   './store';
import reportWebVitals from './reportWebVitals';
import Cart from './component/cart';

// ReactDOM.createRoot(
//   <Provider store={store}>
//     <App/>
//     <Cart/>
//   </Provider>, 
//   document.getElementById('root'),
// );

// const root = createRoot(
// <Provider store={store}>
//   <App/>
//   <Cart/>
// </Provider>);

// root.render(document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root"))
.render(
<Provider store={store}>
  <App/>
  <Cart/>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
