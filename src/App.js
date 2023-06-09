
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-modern-drawer/dist/index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Pages from './pages';

function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}

export default App;
