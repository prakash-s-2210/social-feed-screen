import {React, useState, useEffect} from "react";
import Attachments from "./Attachments";
import "../css files/PostTemplate.scss"
import "../css files/Post.scss"
import{userInfo} from "../data file/Data"
import TextareaAutosize from 'react-textarea-autosize';
import { v4  } from "uuid"
import moment from "moment";
import profileImage from "../images/profileImage.jpg"
function PostCard(props) {
    const [postData, setPostData] = useState();
    const [attachFile,setAttachFile] = useState([]);
    const [file, setFile] = useState(null);
    const[fileType, setFileType] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [audioAttachment, setAudioAttachment] = useState(null);
    const triggerFunction=(tempPost)=>{
        props.handleCallback(tempPost)
        setAttachFile([]);
        setImgSrc(null);
        setAudioAttachment(null);
    }
    const handleSubmit=(e)=> {
        e.preventDefault(); 
    }    
    const postUploading =()=> {
        let tempPost = {
            id: v4() ,
            image: userInfo.photo,
            name:  userInfo.name,
            role: "ASE - Mobile",
            time: moment().format(),
            option: userInfo.option,
            attachments:{
                textBox: postData,
                fileType: fileType,
                files: file,
                fileName: fileName,
                attachment: attachFile, 
                webImageAttach: imgSrc,
                audioAttach: audioAttachment
            },
            
        }
        console.log(tempPost.attachments.files)
        triggerFunction(tempPost)
        setPostData("")
    } 
    return(
        <>
            <div className = "textAreaContainer">
                <div className= "image">
                    <img src= {profileImage} alt="profileImage.jpg" className = "profileImage" />
                </div>
                <form className = "textAreaMainContainer" onSubmit = {handleSubmit}>
                    <TextareaAutosize required maxRows={4} type="text" value = {postData} className = "textArea" placeholder = {"Share something here"} onChange = {(e) => setPostData(e.target.value)} />
                </form>
                <button className="postButton" onClick={postUploading}>Post</button>                 
            </div>
            <Attachments setAttachFile={setAttachFile} attachFile={attachFile} setImgSrc={setImgSrc}  imgSrc={imgSrc} setAudioAttachment={setAudioAttachment} 
            audioAttachment={audioAttachment} setFileType={setFileType} fileType={fileType} setFileName={setFileName} setFile={setFile} file={file}/>
        </>    
    );
}
export default PostCard;