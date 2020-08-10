import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = ({ history }) => {
    return ( 
        <div class="navbar navbar-inverse navbar-fixed-top navbar-dark bg-primary">
<div class="container">
    <Link to="/">
    <a href="#" class="navbar-brand">SearchTweet</a>
    </Link>
    <Link to="/history" params={history}>
        <button type="button" class="btn btn-secondary">History</button>
    </Link>
  </div>
</div>  
    );
}
 
export default Navbar;