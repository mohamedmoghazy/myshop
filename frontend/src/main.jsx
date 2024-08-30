import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import HomeDisplay from './displays/HomeDisplay.jsx';
import ProductDisplay from './displays/ProductDisplay.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import CartDisplay from './displays/CartDisplay.jsx';
import SigninDisplay from './displays/SigninDisplay.jsx';
import SignUpDisplay from './displays/SignUpDisplay.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeDisplay />} />
      <Route path="/product/:id" element={<ProductDisplay />} />
      <Route path="/cart" element={<CartDisplay />} />
      <Route path="/signin" element={<SigninDisplay />} />
      <Route path="/signup" element={<SignUpDisplay />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
