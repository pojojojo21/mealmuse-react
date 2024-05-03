import React from 'react';

function SearchInput({ value, onChange }) {
  return (
    <div>
      <input type="text"
        id="textInput"
        className="search-input"
        placeholder="Search..."
        value={value}
        onChange={onChange} />
    </div>
  );
}

export default SearchInput;
