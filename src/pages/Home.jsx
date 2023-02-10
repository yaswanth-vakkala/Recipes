import React from 'react';
import Trending from '../components/Trending';
import Veg from '../components/Veg';
import { motion } from 'framer-motion';
import Vegan from '../components/Vegan';
import Paleo from '../components/Paleo';

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Trending />
      <Vegan />
      <Paleo />
      <Veg />
    </motion.div>
  );
};

export default Home;
