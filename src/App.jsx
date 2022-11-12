import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Header/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayOut from './Components/RootLayOut/RootLayOut';
import Portfolio from './Components/portfolio/Portfolio';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayOut />,
    children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <ErrorPage /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
