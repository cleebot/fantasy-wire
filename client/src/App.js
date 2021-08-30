import './App.css';
import Layout from './components/Layout/Layout';
import { Switch, Route, useHistory } from 'react-router-dom';
import SignIn from './screens/SignIn/SignIn';
import Register from './screens/Register/Register';
import { useState } from 'react';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();
  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  return (
    <div className="App">
  <Layout>
    <Switch>
        <Route path='/signin'><SignIn /></Route>
        <Route path='/signup'><Register /></Route>
        <Route path='/'></Route>
    </Switch>
  </Layout>
    </div>
  );
}

export default App;
