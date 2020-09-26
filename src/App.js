import React, { useState, useEffect } from 'react';
import Pages from './pages';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-179064706-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/spockqin')
      .then(result => result.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;
