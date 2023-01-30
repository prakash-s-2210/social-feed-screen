import React, {useState, useEffect,useCallback, useRef} from "react";
import {content, userInfo} from "../data file/Data"
import PostItem from "./Post";
import "../css files/PostTemplate.scss"
import "../css files/Post.scss"
import "../css files/Content.scss"

function PostFeed(props) {
    const [postsData, setPostsData] = useState (JSON.parse(localStorage.getItem('postsData')) || content);
    useEffect(() => {
        localStorage.setItem("postsData",JSON.stringify(postsData));
        if(postsData.length === 0){
            localStorage.clear();
        }
    },[postsData]) 
    const handleCallback = (tempPost)=> {
          setPostsData([tempPost, ...postsData])
          tempPost="";
          
        }  
    return (
        <div className = "postFeedContainer">
            <PostItem postsData={postsData} setPostsData={setPostsData} />
        </div> 
    );
}

export default PostFeed;