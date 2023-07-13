import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/styles/global.scss';
import Tasks from './pages/Tasks/Tasks';
import { COMMON_PAGES, PUBLIC_PAGES } from './constants/pages';
import { PageKey } from './types/pages';
import Login from './pages/Login/Login';
import { PublicPage } from './components/PublicPage/PublicPage';
import Registration from './pages/Registration/Registration';
import { CommonPage } from './components/CommonPage/CommonPage';

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
      {COMMON_PAGES.map(({ key, route }) => {
        const Page = pagesMap[key];

        return (
          <Route
            key={key}
            path={route}
            element={
              <CommonPage>
                <Page />
              </CommonPage>
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
