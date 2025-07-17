// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import Post from './components/Post.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Post />
//   </StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './components/Post';
import FormAttributes from './components/FormAttributes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Post />} />
      <Route path="/form/:subcategory" element={<FormAttributes />} />
    </Routes>
  </BrowserRouter>
);
