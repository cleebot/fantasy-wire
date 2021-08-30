import './App.css';
import Layout from './components/Layout/Layout';
import { Switch, Route, useHistory } from 'react-router-dom';
import SignIn from './screens/SignIn/SignIn';
import Register from './screens/Register/Register';
import { useState, useEffect } from 'react';
import MainContainer from './containers/MainContainer';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>>
    <Switch>
        <Route path='/signin'><SignIn handleLogin={handleLogin} /></Route>
        <Route path='/signup'><Register /></Route>
        <Route path='/'></Route>
        <Route path='/'>
            <MainContainer currentUser={currentUser} />
          </Route>
    </Switch>
  </Layout>
    </div>
  );
}

export default App;
