import React from 'react';

function StatusBar() {

  return (
    <div className="statusBar">
      <span style={{}}>
        Hello, <span className="userText">Joanna</span>!
      </span>
      <span style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
        <img src="Images/Fork.png" alt="" width="30" />
        <span className="userPoints size">125</span>
      </span>
    </div >
  );
}

export default StatusBar;
