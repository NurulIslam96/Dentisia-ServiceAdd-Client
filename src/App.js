import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
