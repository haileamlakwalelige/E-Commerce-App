import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Navbar from './Navbar';
// import Footer from './Footer';

export default function App() {

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
      {/* <Footer /> */}
    </div>
  )
}
