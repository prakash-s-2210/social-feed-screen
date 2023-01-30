import { faFileLines, faFilePen, faUserPlus, faUserMinus, faUsers, faLock, faBell, faPalette} from '@fortawesome/free-solid-svg-icons'
export const profileDetails = [ 
    { 
        id: 1, 
        path: "buzz-home",
        icon: faFileLines,
        title: "Buzz home",
        count: "" 
    },
    {
        id: 2,
        path:"my-buzz-posts",
        icon: faFileLines,
        title: "My buzz posts",
        count: 8
    },
    {
        id: 3,
        path: "draft-posts",
        icon: faFilePen, 
        title: "Draft posts",
        count: 2
    },
    {
        id: 4,
        path: "followers",
        icon: faUserPlus, 
        title: "My followers",
        count: 33
    },
    {
        id: 5,
        path: "following",
        icon: faUserMinus, 
        title: "I am following",
        count: 33
    },
    {
        id: 6,
        path:"my-teams",
        icon: faUsers, 
        title: "My teams", 
        count: 12
    },
    {
        id: 7,
        path:"my-reportees",
        icon: faUsers, 
        title: "My reportees",
        count: 12
    },
    {
        id: 8,
        path:"privacy",
        icon: faLock,
        title:"Privacy",
        count:""
    },
    {
        id: 9,
        path:"notifications",
        icon: faBell,
        title:"Notifications",
        count:30
    },
    {
        id: 10,
        path:"theme",
        icon: faPalette,
        title:"Theme",
        count:30
    }
];

