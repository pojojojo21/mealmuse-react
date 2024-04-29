import React from 'react';

function StatusBar() {

  return (
    <div className="statusBar">
      <span>
        Hello, <span className="userText">User</span>!
      </span>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span className="userPoints">120</span>
        <img src="Images/coin.png" alt="" width="50" height="40" />
      </span>
    </div>
  );
}

export default StatusBar;
