import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import PhotosPage from './pages/PhotosPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const showPage = (pageName) => {
    setCurrentPage(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navigation onNavigate={showPage} activePage={currentPage} />
      
      <main>
        {currentPage === 'home' && <HomePage onNavigate={showPage} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'members' && <MembersPage />}
        {currentPage === 'photos' && <PhotosPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      
      <Footer onNavigate={showPage} />
    </div>
  );
}

export default App;
