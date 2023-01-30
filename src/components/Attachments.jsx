import { React, useState, useRef, useCallback, useEffect} from "react";
import Webcam from "react-webcam";
import { ReactMediaRecorder } from "react-media-recorder";
import "../css files/Post.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVideo, faCamera, faMicrophone, faFaceSmile} from "@fortawesome/free-solid-svg-icons";
function Attachments(props) {
  const [isDisplayAttachment, setIsDisplayAttachment] = useState(false);
  // const [fileType, setFileType] = useState(null)
  const [isWebcamDisplay, setIsWebcamDisplay] = useState(false);
  const webcamRef = useRef(null);
  const [isAudioRecorderDisplay, setIsAudioRecorderDisplay] = useState(false);
  // files attach function
  const displayAttachment = () => {
    setIsDisplayAttachment(!isDisplayAttachment);
    setIsWebcamDisplay(false);
    setIsAudioRecorderDisplay(false);
  };
  const addDocument = () => {
    getBase64(props.file).then((base64) => {
      props.setAttachFile([base64, ...props.attachFile]);
      props.setFile("");
    });
  };
  useEffect(()=>{
  },[props.file])
  function getBase64(temp) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(temp);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  
  
  const fileAttachmentCancelAction = () => {
    displayAttachment();
  };
 
  // webcamAttachment function
  const webcamAttachment = () => {
    setIsWebcamDisplay(!isWebcamDisplay);
    setIsDisplayAttachment(false);
    setIsAudioRecorderDisplay(false)
  };
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    props.setImgSrc(imageSrc);
    setIsWebcamDisplay(false)
  }, [webcamRef]);
  // audio recorder attachment function
  const audioRecorder = () => {
    setIsAudioRecorderDisplay(!isAudioRecorderDisplay);
    setIsWebcamDisplay(false);
    setIsDisplayAttachment(false)
  };
  const audioRecorderCloseButton=()=>{
    setIsAudioRecorderDisplay(false)
  }

  return (
    <>
      {isDisplayAttachment ? (
        <div className="uploadContainer">
          <input type="file" id="upload" multiple onChange={(e)=>{
            props.setFileType(e.target.files[0].type)
            props.setFile(e.target.files[0])
            props.setFileName(e.target.files[0].name)
            }} />
          <div className="button">
            <button className="primaryButton" onClick={()=>{
              addDocument()
            }} >Add</button>
            <button className="secondaryButton" onClick={fileAttachmentCancelAction}>Close</button>
          </div>
        </div>) : ("")}
      {isWebcamDisplay ? (
        <div className="webcamContainer">
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <button onClick={capture} className="webcamCaptureButton">Capture photo <FontAwesomeIcon icon={faFaceSmile} /></button>
        </div>
      ) : (
        ""
      )}
      {isAudioRecorderDisplay ? (
        <ReactMediaRecorder
          onStop={(blobUrl, blob) => {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
              props.setAudioAttachment(reader.result);
            };
          }}
          audio
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div audioRecorderWrapper>
              <p className="audioStatus">{status}</p>
              <audio src={mediaBlobUrl} controls className="audioControls" />
              <div className="audioRecordingButton">
                <button onClick={startRecording} className="audioStartButton">Start Recording</button>
                <button onClick={stopRecording} className="audioStopButton">Stop Recording</button>
                <button onClick={audioRecorderCloseButton} className="audio-close-button">Done</button>
              </div>
              
            </div>
          )}
        />
      ) : (
        ""
      )}
      <div className="attachmentContainer" >
        
        <div className="attachmentSubContainer" onClick={displayAttachment} >
          <div className="attachmentDisplay">
            <FontAwesomeIcon icon={faVideo} className="icon" />
            <p html className="content">Any attachment</p>
          </div>
          
          
        </div>
        <div className="attachmentSubContainer" onClick={webcamAttachment}>
          <div className="attachmentDisplay">
            <FontAwesomeIcon icon={faCamera} className="icon" />
            <p className="content">Capture it</p>
          </div>
        </div>
        <div className="attachmentSubContainer" onClick={audioRecorder}>
          {/* <p></p> */}
          <div className="attachmentDisplay">
            <FontAwesomeIcon icon={faMicrophone} className="icon" />
            <p className="content">Say it</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Attachments;
