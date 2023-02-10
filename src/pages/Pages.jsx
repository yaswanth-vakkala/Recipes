import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import { Route, Routes, useLocation } from 'react-router-dom';
import Results from './Results';
import Detail from './Detail';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:query" element={<Results />} />
        <Route path="/recipe/:name" element={<Detail />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
