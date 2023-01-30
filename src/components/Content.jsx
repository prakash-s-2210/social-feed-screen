import React from "react";
import SideNavigationBar from './SideNavigationBar'
import PostFeed from './PostFeed'
import SavedPosts from './SavedPosts'
import Posts from "./Posts"
import {Routes, Route} from 'react-router-dom'
function Content(props) {
//     [
//     {path: "buzz-home",
// element: PostFeed}
//     ]
    return(
    <div className = "mainContainer">
        <SideNavigationBar isToggle={props.isToggle}/>
        <Routes>
            <Route path="/" element={<SavedPosts />}></Route>
            <Route path="buzz-home" element={<PostFeed />}></Route>
            <Route path="my-buzz-posts" element={<Posts />}></Route>
            <Route path="draft-posts" element={<SavedPosts />}></Route>
            <Route path="followers" element={<SavedPosts />}></Route>
            <Route path="following" element={<SavedPosts />}></Route>
            <Route path="my-teams" element={<SavedPosts />}></Route>
            <Route path="my-reportees" element={<SavedPosts />}></Route>
            <Route path="privacy" element={<SavedPosts />}></Route>
            <Route path="notifications" element={<SavedPosts />}></Route>
            <Route path="theme" element={<SavedPosts />}></Route>
            <Route path="artefacts" element={<SavedPosts />}></Route>
            <Route path="modules" element={<SavedPosts />}></Route>
            <Route path="skills" element={<SavedPosts />}></Route>
            <Route path="finances" element={<SavedPosts />}></Route>
            <Route path="activities" element={<SavedPosts />}></Route>
            <Route path="achievements" element={<SavedPosts />}></Route>           
        </Routes>
    </div>   
    );
}  
export default Content;