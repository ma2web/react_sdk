import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import News from './pages/news/News';
import SingleNews from './pages/news/SingleNews';
import { ThemeProvider } from 'react-jss';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="news/:postId" element={<SingleNews />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
