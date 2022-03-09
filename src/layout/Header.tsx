import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import SearchBar from "../partials/SearchBar"

const Header = ({ updateSearchTerm }:any) => {

    const handleSearchTermChange = (searchTerm: any) => {
        updateSearchTerm(searchTerm);
    }

    return (
        <Navbar>
            <NavbarBrand>Beer Api</NavbarBrand>
            <SearchBar searchTermChanged={handleSearchTermChange} />
        </Navbar>
    );
}

export default Header;