import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';

import { store } from './Redux/store.js'
import { Provider } from 'react-redux'

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import CollectionPage from './pages/CollectionPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/collection",
    element: <CollectionPage/>
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />,
    </StrictMode>
    <ToastContainer/>
  </Provider>,
);

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <StrictMode>
//       <App />
//     </StrictMode>
//   </Provider>,
// )
