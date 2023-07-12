import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './assets/styles/global.scss';
import Tasks from './pages/Tasks/Tasks';
import { PUBLIC_PAGES } from './constants/pages';
import { PageKey } from './types/pages';
import Login from './pages/Login/Login';
import Registration from './components/Registration/Registration';
import { PublicPage } from './components/PublicPage';

function App() {
  return (
    <Routes>
      {PUBLIC_PAGES.map(({ key, route }) => {
        const Page = pagesMap[key];

        return (
          <Route
            key={key}
            path={route}
            element={
              <PublicPage>
                <Page />
              </PublicPage>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;

const pagesMap: { [key in PageKey]: React.FC } = {
  login: Login,
  registration: Registration,
  tasks: Tasks,
};
