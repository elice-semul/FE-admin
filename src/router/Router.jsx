import { Route, Routes } from 'react-router-dom';

import App from '@/App';
import { HomePage, Login } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;
