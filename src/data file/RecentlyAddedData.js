import { faFile, faBrain, faIndianRupeeSign, faClock, faRibbon } from '@fortawesome/free-solid-svg-icons'
export const data = [
    { 
        id: 1, 
        path:"artefacts",
        icon: faFile,
        title: "New artefacts",
        count: 82, 
    },
    {
        id: 2,
        path:"modules",
        icon: faFile,
        title: "New modules",
        count: 42,
    },
    {
        id: 3,
        path:"skills",
        icon: faBrain, 
        title: "New skills",
        count: 23,
    },
    {
        id: 4,
        path:"finances",
        icon: faIndianRupeeSign, 
        title: "My finances",
        count: 0,
    },
    {
        id: 5,
        path:"activities",
        icon: faClock, 
        title: "Your activities",
        count: 18,
    },
    {
        id: 6,
        path:"achievements",
        icon: faRibbon, 
        title: "My achievements",
        count: 15,
    }
];