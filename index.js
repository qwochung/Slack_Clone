import ReactDOM from 'react-dom'
import React from  'react'
import  {Header} from  './src/header.js';
import { SideBar } from './src/sidebar.js';
import { Content } from './src/user-content.js';
import './assets/css/style.css'

function Index() {
    return (
        <div id='main'>
            <Header id ='header '></Header>
            <div id='body'>
                <SideBar class ='sidebar'></SideBar>
                
                <Content class = 'content'></Content>  

            </div>
           
        </div>
    )
}


ReactDOM.render(<Index />, document.getElementById('root'))   