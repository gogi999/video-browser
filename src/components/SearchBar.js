import React, { useState } from 'react';

const SearchBar = ({ searchTerm }) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        searchTerm(term);
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <input
                        type="text"
                        value={term}
                        onChange={onInputChange}
                        placeholder="Search..."
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar
