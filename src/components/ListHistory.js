import React from 'react';
import History from './History'

const ListHistory = ({ history }) => {
    return ( 
        <div>
             {history.reverse().map((tweet, key)=> (
               <History
                    key={key}
                    tweet={tweet}
               />
            ))}
           
        </div>
     );
}
 
export default ListHistory;