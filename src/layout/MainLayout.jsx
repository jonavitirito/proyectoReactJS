import React from 'react';
import MainRouter from '../routes/MainRouter';
import Footer from '../components/FooterComponent';
import "../App.scss";





const MainLayout = ({children}) => {
  return (
    <div>
      <main>
        {children}
      <MainRouter>

      </MainRouter>
      <Footer>

      </Footer>
      
      </main>
   </div>
  )
}

export default MainLayout