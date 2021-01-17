import { SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiFigma, SiReactrouter } from "react-icons/si";

export const github = [
     {
        "id": 1,
        "name": "MyOnlineMeal",
        "img": require('./assets/project1.JPG'),
        "languages": [
            <SiHtml5/>, <SiCss3/>
        ],
        "code": "https://github.com/tusharkandpal/MyOnlineMeal/",
        "live": "https://tusharkandpal.github.io/MyOnlineMeal/",
        "details": ["This is a simple template.", "It has a sticky navbar.", "It runs smoothly across every platform (responsive).", "Hosted via Github pages."]
    },
    {   
        "id": 2,
        "name": "Expense Tracker",
        "img": require('./assets/project2.JPG'),
        "languages": [<SiHtml5/>, <SiCss3/>, <SiBootstrap/>, <SiJavascript/>],
        "code": "https://github.com/tusharkandpal/Expense-Tracker",
        "live": "https://tusharkandpal.github.io/Expense-Tracker/",
        "details": ["Tracks record of the daily expenses.", "Updates total in header with each entry added or removed.", "Bootstrap handles the responsiveness.", "Hosted via Github pages."]
    },
    {   
        "id": 3,
        "name": "Twider",
        "img": require('./assets/project3.JPG'),
        "languages": [<SiHtml5/>, <SiCss3/>, <SiFigma/>],
        "code": "https://github.com/tusharkandpal/Twider",
        "live": "https://tusharkandpal.github.io/Twider/",
        "details": ["Homepage template contribution for an open source project.", "Used figma for some design cases.", "It is responsive as well.", "Hosted via Github pages."]
    },
    {   
        "id": 4,
        "name": "Devs-WellSource",
        "img": require('./assets/project4.JPG'),
        "languages": [<SiHtml5/>, <SiCss3/>, <SiJavascript/>, <SiBootstrap/>],
        "code": "https://github.com/tusharkandpal/Devs-WellSource",
        "live": "https://tusharkandpal.github.io/Devs-WellSource/",
        "details": ["This is full fledged Bootstrap based design.", "Created keeping in mind the resources needed by a beginner.", "Consist of various resources section based on categories.", "Includes a library section as well.", "Hosted via Github pages."]
    },
    {   
        "id": 5,
        "name": "Todo App",
        "img": require('./assets/project5.JPG'),
        "languages": [<SiHtml5/>, <SiCss3/>, <SiJavascript/>, <SiReact/>],
        "code": "https://github.com/tusharkandpal/Todo-react-app",
        "live": "https://todo-app-by-tushar.netlify.app/",
        "details": ["It maintains the daily tasks list.", "Learnt & implemented the local & session Storages.", "User can filter the todos based on completed, uncompleted and all.", "Hosted via Netlify."]
    },
    {   
        "id": 6,
        "name": "Movie Library",
        "img": require('./assets/project6.JPG'),
        "languages": [<SiHtml5/>, <SiCss3/>, <SiJavascript/>, <SiReact/>],
        "code": "https://github.com/tusharkandpal/Movie-library-react",
        "live": "https://movie-library-react.netlify.app/",
        "details": ["The movie app fetches the data from TMDb API.", "Securing API key using .env file (although not 100% secure).", "Toggling between dark and light theme.", "Displays loader while loading and error image in case of any exception.", "Hosted via Netlify."]
    },
    {   
        "id": 7,
        "name": "Portfolio",
        "img": require('./assets/project7.JPG'),
        "languages": [<SiHtml5/>, <SiCss3/>, <SiJavascript/>, <SiReact/>, <SiReactrouter/>, <SiFigma/>],
        "code": "https://github.com/tusharkandpal/My-Portfolio",
        "live": "https://tusharkandpal.netlify.app/",
        "details": ["The project section is displayed using a JSON file.", "The blog section fetches the content from dev.to API.", "React-router used for dynamic routing.", "Other libraries used are 'react-icons' & 'react-router-scroll-top'.", "Hosted via Netlify."]
    }
]
