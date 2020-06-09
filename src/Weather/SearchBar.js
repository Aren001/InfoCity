import React from "react";

const SearchBar = ({ onSubmit }) => {
  let city;

  return (
    <div>
      <form>
        <input
          className="searchbar transparent"
          id="search"
          type="text"
          placeholder="enter city, country"
          ref={input => (city = input)}
        />
        <input
          className="button transparent"
          id="button"
          type="submit"
          value="GO"
          onClick={e => {
            e.preventDefault();
            onSubmit(city.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;

