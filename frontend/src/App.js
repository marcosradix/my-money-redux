import React from 'react';
import './common/template/dependencies';
import './App.css';
import Header from './common/template/header';
import SideBar  from './common/template/sideBar';
import Footer  from './common/template/footer';
import Routers from './main/routers';

export default props =>(
  <div className="wrapper">
       <Header />
        <SideBar />
        <div className='content-wrapper' >
          <Routers />
        </div>
        <Footer />
      </div>
);

