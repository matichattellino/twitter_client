import React from 'react';
import ProfileImage from '../assets/userimage.svg'

const Tweet = ({ tweet }) => {
    const { text, datetime} = tweet;    
    
    return (  
        <div className="container">
            <div className="bs-example">
                    <div className="media">
                         <img src={ProfileImage}  className="mr-3 rounded" alt="Sample"></img>
                        <div className="media-body">
                            <h5 className="mt-0">Jhon Carter <small><i></i></small></h5>
                            <p>{text}</p>
                            <div>
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                                <span>&nbsp;&nbsp;</span>
                                <i className="fa fa-retweet"></i>
                                <span>&nbsp;&nbsp;</span>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <hr>
                    </hr>
            </div>
        </div>
    );
}
 
export default Tweet;