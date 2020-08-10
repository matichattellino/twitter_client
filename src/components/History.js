import React from 'react';

const History = ({ tweet }) => { 
    const { busqueda } = tweet;
    return ( 
        <div className="container">
            <ul class="list-group">
                <li class="list-group-item">{busqueda}</li>
            </ul>
        </div>
     );
}
 
export default History;