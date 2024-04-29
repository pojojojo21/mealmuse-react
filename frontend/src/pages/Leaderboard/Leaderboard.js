import React, { useState } from 'react';
import "./Leaderboard.css"

function Leaderboard() {
  // State variable to track whether to display weekly or all-time leaderboard
  const [isWeekly, setIsWeekly] = useState(true);
  // State variable to track whether dropdown content is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Static data for the leaderboard
  const weeklyLeaders = [
    { name: 'Alice', points: 100 },
    { name: 'Bob', points: 90 },
    { name: 'Charlie', points: 80 },
    { name: 'David', points: 70 },
    { name: 'Emma', points: 60 }
  ];

  const allTimeLeaders = [
    { name: 'Alice', points: 500 },
    { name: 'Bob', points: 490 },
    { name: 'Charlie', points: 480 },
    { name: 'David', points: 470 },
    { name: 'Emma', points: 460 },
    { name: 'Frank', points: 450 },
    { name: 'Grace', points: 440 },
    { name: 'Henry', points: 430 },
    { name: 'Ivy', points: 420 },
    { name: 'Jack', points: 410 }
  ];

  // Function to toggle dropdown content
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle click on weekly or all-time option
  const handleOptionClick = (value) => {
    setIsWeekly(value === 'Weekly');
    setIsDropdownOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      {/* Dropdown button to switch between weekly and all-time leaderboard */}
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          {isWeekly ? 'Weekly' : 'All-Time'}
          {/* Display caret icon based on dropdown open state */}
          <span className={`caret ${isDropdownOpen ? 'caret-up' : ''}`}>&#9662;</span>
        </button>
        {/* Dropdown content */}
        {isDropdownOpen && (
          <div className="dropdown-content">
            {/* Render the opposite option */}
            <button onClick={() => handleOptionClick(isWeekly ? 'All-Time' : 'Weekly')}>
              {isWeekly ? 'All-Time' : 'Weekly'}
            </button>
          </div>
        )}
      </div>
      {/* Display the leaderboard based on the selected option */}
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the appropriate array of leaders based on isWeekly state */}
          {(isWeekly ? weeklyLeaders : allTimeLeaders).map((leader, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{leader.name}</td>
              <td>{leader.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
