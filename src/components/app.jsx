import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Layout from './Page/Layout';

export default function app() {
  return (<Router> 
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        
      </Route>
    </Routes>
  </Router>);
}
