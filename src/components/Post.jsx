import {React, useState, useEffect} from "react";
import "../css files/PostTemplate.scss"
import "../css files/Post.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFilePdf, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import moment from "moment/moment";



function PostItem(props){
    const [deletePost, setDeletePost] = useState(false);
    
    function deleteFeedPost(index) {
            if(window.confirm("you want to delete the post?")){
               const newData = props.postsData;
                let filteredPostsData = newData.filter((postData) => postData.id!==index)
               props.setPostsData([...filteredPostsData])
            }
            else{}
            }
            
    return(
      <div>
        {props.postsData.map((element, index)=>{
            
            return(
                
        <div className = "postFeed" >
             <div className = "postFeedCard">
                 <div className = "profileInformation">
                     <img src= {element.image} alt="profile.jpg" className = "profileImage" />
                     <div className = "details">
                         <div className = "name">{element.name}</div>
                         <div className = "role">{element.role}</div>
                         <div className = "time">{moment(element.time).fromNow()}</div>
                     </div>
                 </div>
                 <div className="deletePost">
                     <div  onClick={()=>deleteFeedPost(element.id)}><FontAwesomeIcon icon={faTrash} className = "optionIcon" /></div>
                 </div>
             </div>
             <div className = "containerMessage">{element.information}</div>
                 {(element.attachments.textBox) &&
                    <p>{element.attachments.textBox}</p>
                 }
                 {
                     (element.attachments.fileType==="image/jpeg") && element.attachments.attachment.map((file,index)=>{
                        console.log(element.attachments.attachment)
                        return(
                    <img src={file} className="file-attachment-image" alt="attachmentFileImage" />
                        )})
                        }
                 {(element.attachments.fileType==="application/pdf") &&
                       <a className="pdf" href={element.attachments.attachment}download><FontAwesomeIcon icon={faFilePdf} className = "pdf-icon" /><p className="pdf-file-name">{element.attachments.fileName}</p></a>
                 }
                 {(element.attachments.fileType==="video/mp4") &&
                    <video  controls autoPlay><source src={element.attachments.attachment} type="video/mp4" /></video>
                 }
                 {(element.attachments.webImageAttach) &&
                    <img src={element.attachments.webImageAttach} alt="webcamImage" className="attachment-webcam-image" />
                }
                 {(element.attachments.audioAttach) &&
                    <audio src={element.attachments.audioAttach} controls autoPlay className="audio"></audio>
                }  
        </div>
            )
        })}
      </div>
    )
}
export default PostItem;






















