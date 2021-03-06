import './css/App.css';
import Navbar from './components/navigation';
import ReactNotification from 'react-notifications-component'
import { store } from './store';
import { Provider } from 'react-redux';
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <Provider store={store}>
      <ReactNotification />
      <div className="App">
        <Navbar />
      </div>
    </Provider>
  );
}

export default App;
