import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProjectCardPage from './pages/ProjectCardPage';
import HomePage from './pages/HomePage';
import Settings from './pages/Settings';
import Sidenav from './Sidenav';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { useEffect, useState } from 'react';
import Api from './api/Api';


function App() {

  const [routeData, setRouteData] = useState([]);
  const loadData = async () => {

    var response = await Api.post('emission/list', {}).then(r => r.data).catch(console.error)
    if (response && response.success) {
      setRouteData(response.data)
    }
    else (
      setRouteData([])
    )

  }
  useEffect(() => { loadData() }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route element={<><Sidenav /> </>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<ProjectCardPage />} />
            <Route path="/settings" element={<Settings />} />

            {routeData.map(item => {
              return <>
                <Route path={item.Path} element={<Settings />} />
              </>
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
