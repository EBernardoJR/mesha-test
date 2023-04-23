import Routes from './routes';
import { UserProvider} from './services/context/userContext';

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
