import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './assets/styles/global.scss';
import Tasks from './pages/Tasks/Tasks';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          element={<Tasks />}
        />
        <Route path='*' />
      </Route>
    </Routes>
  );
}

export default App;
