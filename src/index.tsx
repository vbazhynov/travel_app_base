import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
