import profileImage from "../images/profileImage.jpg"
import elonMusk from "../images/elonMusk.jpg"
import dhoni from "../images/dhoni.jpg"
import tony from "../images/tony.jpg"
import moment from "moment"
export const userInfo = {
    
    name: 'Prakash',
    photo: profileImage,
    role: "Marketing Expert",
}
export const content = [
    {
        id: 1,
        image: elonMusk,
        name: "Elon Musk",
        role: "CEO of SpaceX",
        time: moment().format(),
        information: "I’m buying Manchester United ur welcome",
        attachments: {textBox: "",
        fileType:"",
        fileName:"",
        attachment: "", 
        webImageAttach: "",
        audioAttach: ""}
    },
    {
        id: 2,
        image: dhoni,
        name: "Mahendra Singh Dhoni",
        role: "Indian cricketer",
        time: moment().format(),
        information: "Thanks a lot for ur love and support throughout. from 1929hrs consider me as retired.",
        attachments:{
            textBox: "",
            fileType:"",
            fileName:"",
            attachment: "", 
            webImageAttach: "",
            audioAttach: ""}
    },
    {
        id: 3,
        image: tony,
        name: "Tony Stark",
        role: "CEO of Stark Industries",
        time: moment().format(),
        information: "You can take away my house, all my tricks and toys. One thing you can’t take away … I am Ironman",
        attachments:{
            textBox: "",
            fileType:"", 
            fileName:"",
            attachment: "", 
            webImageAttach: "",
            audioAttach: ""}
    }
]