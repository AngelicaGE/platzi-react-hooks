import React from "react";
import '../styles/Search.css'
import { InputGroup, FormControl } from "react-bootstrap";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="Search">
      <InputGroup >
        <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
        <FormControl
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          ref={searchInput}
        value={search}
        onChange={handleSearch}
        />
      </InputGroup>
    </div>
  );
};

export default Search;
