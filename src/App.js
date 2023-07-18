import React, { useState } from 'react';
import List from './components/List';
import './styles.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <List
        items={[
          {
            id: '1', // Using strings as IDs for Unsplash API
            description: 'Description for Image 1',
          },
          {
            id: '2',
            description: 'Description for Image 2',
          },
          // Add more items as needed
        ]}
      />
      <button className="toggle-button" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="created-by">Created by Maharshi</div>
    </div>
  );
};

export default App;
