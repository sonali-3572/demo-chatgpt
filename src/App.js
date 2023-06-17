import React from 'react'
// import Article from './components/article/Article';
// import Brand from './components/brand/Brand';
// import Cta from './components/cta/Cta';
// import Navbar from './components/navbar/Navbar';
// import Feature from './components/feature/Feature';
//  //instead of above code we can only use below 1 line code
import {Brand ,Cta,Navbar} from './components';

import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from './containers';

import './App.css';

const App = () => {
  return (
    <>
      <div className="App">
        <div className="gradient_bg ">
          <Navbar />
          <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
    </>
  )
}

export default App
