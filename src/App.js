import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'routes/home/Home';
import Navigation from 'routes/navigation/Navigation';
import Authentication from 'routes/authentication/Authentication';
import Shop from 'routes/shop/Shop';

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path='/auth' element={<Authentication />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Fragment>
  );
};

export default App;
