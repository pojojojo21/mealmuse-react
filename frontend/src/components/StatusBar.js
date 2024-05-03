import React, { useState, useEffect } from 'react';

function StatusBar() {

  const [points, setPoints] = useState(0);
  const [name, setName] = useState('Joanna');

  useEffect(() => {
    const interval = setInterval(() => {
      // Retrieve the points from localStorage
      const userString = localStorage.getItem('user');
      const user = JSON.parse(userString);
      const newPoints = user ? user.points : 0;
      const newName = user ? user.userName : 'Joanna';
      setPoints(newPoints);
      setName(newName);
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="statusBar">
      <span style={{}}>
        Hello, <span className="userText">{name}</span>!
      </span>
      <span style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
        <img src="Images/Fork.png" alt="" width="30" />
        <span className="userPoints size">{points}</span>
      </span>
    </div >
  );
}

export default StatusBar;
