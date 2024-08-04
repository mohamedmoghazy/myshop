import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App()
{
  return (
    <>
      <Header></Header>
      <div>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
