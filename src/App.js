import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

  const { theme } = useContext(ThemeContext);

  console.log("%cAHAD ABBASI - PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/aliahad002", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <HelmetProvider>
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </HelmetProvider>
      <BackToTop />
    </div>
  );
}

export default App;
