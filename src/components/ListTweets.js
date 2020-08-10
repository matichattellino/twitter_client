import React from 'react';
import Tweet from './tweet';

const ListTweets = ({tweets}) => {
    return ( 
        <div>
            {tweets.map(tweet => (
               <Tweet
                    tweet={tweet}
               />
            ))}
        </div>
     );
}
 
export default ListTweets;