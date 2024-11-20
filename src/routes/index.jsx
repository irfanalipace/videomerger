import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import About from '../pages/about/About';

const NotFound = lazy(() => import('../pages/NotFound'));

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
};

export default AppRouter;
