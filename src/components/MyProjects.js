import React from 'react';
import MyProject from './MyProject'
import * as Icon from 'react-bootstrap-icons';
import Login1 from './EduCloud/Login1.png'
import Login2 from './EduCloud/Login2.png'
import Cal from './EduCloud/calendar1.png'
import Cal2 from './EduCloud/calendar2.png'
import chat from './EduCloud/chat.png'
import chatbot from './EduCloud/chatbot.png'
import Login from './Movie4Share/Login.png'
import Home from './Movie4Share/Home.png'
import CreateMovie from './Movie4Share/CreateMovie.png'
import Home2 from './Movie4Share/Home2.png'
import Download from './Movie4Share/Download.png'
import Download2 from './Movie4Share/Download2.png'
import Rating from './Movie4Share/Rating.png'
import ULogin from './eBookNerd/Login.PNG'
import AdminLogin from './eBookNerd/Login2.PNG'
import Admin from './eBookNerd/Admin.PNG'
import CreateUser from './eBookNerd/CreateUser.PNG'
import UBookShelf from './eBookNerd/UBookshelf.PNG'
import BookStore from './eBookNerd/BookStore.PNG'
import BookStore2 from './eBookNerd/AddBookShelf.PNG'
import UBookShelf2 from './eBookNerd/UBookshelf2.PNG'
import BookReader from './eBookNerd/PDFReader.PNG'
import UBookShelf3 from './eBookNerd/UBookshelf3.PNG'


function MyProjects() {

    const pimgs = [
        {url: Login1},
        {url: Login2},
        {url: Cal},
        {url: Cal2},
        {url : chat},
        {url: chatbot}
    ]
    const pimgs2 = [
        {url: Login},
        {url: Home},
        {url: CreateMovie},
        {url: Home2},
        {url: Download},
        {url: Download2},
        {url: Rating}
    ]
    const pimgs3 = [
        {url: ULogin},
        {url: AdminLogin},
        {url : Admin},
        {url : CreateUser},
        {url: UBookShelf},
        {url : BookStore},
        {url : BookStore2},
        {url : UBookShelf2},
        {url : BookReader},
        {url : UBookShelf3}
    ]
    

    return (
       
        <div className="subdiv subdiv-add">
           
            <h6><Icon.CodeSlash color="gray" size={20} /> PROJECTS</h6>
        <hr/>
            <MyProject images = {pimgs} name = 'EduCloud' gitlink = 'https://github.com/MinJiKim123/mk-mern-project' />
            <br style={{clear: 'both'}}></br>
            <MyProject images = {pimgs2} name = 'Movie4Share' gitlink='https://github.com/MinJiKim123/mk-aspnet-aws-uploadvideo' />
            <br style={{clear: 'both'}}></br>
            <MyProject images = {pimgs3} name = 'eBookNerd' gitlink='https://github.com/MinJiKim123/mk-wpf-pdf-reader' />
            
        </div>
       
    )

}
export default MyProjects;