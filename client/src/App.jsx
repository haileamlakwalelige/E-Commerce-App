import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import ErrorPage from './ErrorPage';


export default function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <ErrorPage /> },
    { path: '/product/:slug', element: <Product />, errorElement: <ErrorPage /> },
  ]);
  return (
    <RouterProvider router={router} />
  );
}
