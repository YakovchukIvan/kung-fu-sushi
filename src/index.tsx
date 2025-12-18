import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'macro-css';

import './index.scss';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Router>
    <App />
  </Router>,
);
