import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistic from './components/Statistic/Statistic';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/home',
          element: <Home/>
        },
        {
          path: '/topics',
          element: <Topics/>
        },
        {
          path: '/statistic',
          element: <Statistic/>
        },
        {
          path: '/blog',
          element: <Blog/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
