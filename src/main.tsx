import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n.ts'; // Import your i18n configuration

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
       <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
