import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListHistory from './ListHistory'
import NavBar from './NavBar'; 

function HistoryList() {

    const [ history, setHistory ] = useState([]);

    useEffect(() => {
        const API = async () => {
            const historyTweets = await axios.get('http://localhost:5000/history');
            setHistory(historyTweets.data);
        }
        API();
    },[])
  
    return ( 
            <>
            <NavBar />
            <div>
                <ListHistory history={history} />
            </div>
            </>
            
     );
}
 
export default HistoryList;