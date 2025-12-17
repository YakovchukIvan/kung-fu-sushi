import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'macro-css';

import App from './App';
import store from './redux/store';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
