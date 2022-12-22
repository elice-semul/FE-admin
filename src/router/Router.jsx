import { Route, Routes } from 'react-router-dom';

import App from '@/App';
import { Home, Login } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;
