import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './Home';
import Product from './Product';
// import ErrorPage from './ErrorPage';
import Navbar from './Navbar';

export default function App() {
  // const router = createBrowserRouter([
  //   { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  //   { path: '/product/:slug', element: <Product />, errorElement: <ErrorPage /> },
  // ]);
  // return (
  //   <RouterProvider router={router} />
  // );
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />}  >
        <Route path='/' element={<Home />}  />
        <Route path='/product/:slug' element={<Product />}  />
      </Route>
    )
  );

  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
