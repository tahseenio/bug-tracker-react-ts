import React, { useState } from 'react';
import { CreateTemplate } from './components/CreateTemplate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { UserContext } from './contexts/UserContext';
import { BugTracker } from './components/BugTracker';
import { DetailProps } from './contexts/UserContext';

function App() {
  const [infoAlert, setInfoAlert] = useState<boolean>(false);
  const [details, setDetails] = useState<{} | DetailProps>({});

  return (
    <UserContext.Provider
      value={{ infoAlert, setInfoAlert, details, setDetails }}
    >
      <div className='App'>
        <Router>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/create'} element={<CreateTemplate />} />
            <Route path={'/menu'} element={<BugTracker />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
