import {React, useState, useRef} from "react";
import Webcam from "react-webcam";
import "../css files/Post.scss"
import "../css files/PostTemplate.scss"
function webcamAttachment() {
    const WebcamCapture = () => {
        
        const webcamRef = useRef(null);
        const [imgSrc, setImgSrc] = useState(null);
      
        const capture = React.useCallback(() => {
          const imageSrc = webcamRef.current.getScreenshot();
          setImgSrc(imageSrc);
        }, [webcamRef, setImgSrc]);
      
        return (
        <div>
            {/* <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            />
            <button onClick={capture} className= "webcamCaptureButton" >Capture photo <FontAwesomeIcon icon={faFaceSmile} /></button> */}
        
          
          {/* <button onClick={capture}>Capture photo</button>
          {imgSrc && (
            <img style={{width:"100px"}}
              src={imgSrc}
            />)} */}
        </div>
        );
      }
    }
export default Webcam;