import { Navigate, Route,Routes} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './Pages/LoginPage';
import {AuthContext} from './Context/AuthContext'
import { useContext } from 'react';



function App() {
  const { admin } = useContext(AuthContext)
  const PrivateRouter = ({children})=>{
    if (admin) {
      return <Navigate to='/home'/>;
    }
    return children;
  }


  const PublicRouter =({children})=>{
    if (!admin) {
      return<Navigate to='/'/>;
    }
    return children;
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <PrivateRouter>
        <LoginPage/>
        </PrivateRouter>
        }/>
        <Route path='/home/*' element={
        <PublicRouter>
        <Dashboard/>
        </PublicRouter>}/>
      </Routes >
    </div>
  );
}

export default App;
