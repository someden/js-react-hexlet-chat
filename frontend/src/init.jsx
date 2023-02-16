import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// import getAuthHeader from './getAuthHeader';
import App from './components/App';
import resources from './locales/index';
import reducer from './slices/index';

// import chatApi from './services/chat';

const init = async () => {
  const i18n = i18next.createInstance();

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'ru',
    });

  // const authHeader = await getAuthHeader();

  const store = configureStore({
    reducer,

    // reducer: {
    //   [chatApi.reducerPath]: chatApi.reducer,
    // },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatApi.middleware),
  });

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        {/* <App authHeader={authHeader} /> */}
        <App />
      </I18nextProvider>
    </Provider>
  );
};

export default init;
