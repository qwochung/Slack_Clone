import ReactDOM from 'react-dom'
import React from  'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import  '../assets/css/style-sidebar.css'





// Tạo component App
export function SideBar() {
    return (
        <>
        <div class="sidebar">
        <div class="nav-bar">
    
            <div class="top-nav">

                
                <button class="button-A nav-bar-comp centered">
                    <i class="fa-solid fa-a"></i>
                </button>
                
    
                <button class="button-home button-nav nav-bar-comp ">

                    <div class="icon-nav centered">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    
    
                    <div class="text-nav centered">
                        <p>Home</p>
    
                    </div>
                </button>
    
    
                <button class="button-more button-nav nav-bar-comp ">
                    
                    <div  class="icon-nav centered">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>

                    
    
                    <div class="text-nav centered">
                        <p>More</p>
    
                    </div>
                </button>
    
    
            </div>
    
    
            <div class="bottom-nav">
                <button class="button-create icon-nav nav-bar-comp centered">
                    <i class="fa-solid fa-plus"></i>
                </button>
                
    
                <button class="button-user icon-nav nav-bar-comp centered">
                    <i class="fa-solid fa-user"></i>
                </button>
                
    
    
            </div>
    
    
    
        </div>

        
        <div class="chanel-bar">
            <div class="chanel-header">
    
                <button class="btn-amazed">
                    <p>Amazed</p>
                    <i class="fa-solid fa-angle-down"></i>
                </button>
    



                <div class="panel-button  ">
                    <button class="btn-filter ">
                        <i class="icon-panel-button  fa-solid fa-filter"></i>
                    </button>
    
    
                    <button class="btn-edit ">
                        <i class=" icon-panel-button fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
    
            </div>
    
            <div class="chanel-content">
                <ul>
                    <li>
                        <button>
                            <i class="resize fa-regular fa-comments"></i>
                            <p>Threads</p>
                        </button>
                    </li>

                    <li>
                       <button>
                            <i class="resize fa-regular fa-paper-plane"></i>
                            <p>Drafts and Sent</p>
                       </button>
                    </li>

                    
                    
                    

                    
                </ul>

                <div class="spacings"></div>
               
               
                <ul>
                    <li>
                       <button>
                        <i class="resize fa-solid fa-caret-down"></i>
                        <p>Channel</p>
                       </button>
                    </li>

                    <li>
                        <button>
                            <i class="resize fa-solid fa-hashtag"></i>
                            <p>Accsessed</p>
                        </button>
                    </li>
                    
                    <li>
                       <button>
                            <i class="resize fa-solid fa-magnifying-glass"></i>
                            <p>Browes all channel </p>
                       </button>
                    </li>
                    
                     <li>
                       <button>
                            <i class="resize fa-solid fa-caret-down"></i>
                            <p>Direct messages</p>
                       </button>
                    </li>
                    




                    <li class="item-user">
                       <button class="component centered">
                            <div class="resize avt-img  anh-pham" >       </div>
                            <p>Anh.pham</p>

                       </button>
                        <i class="icon-close fa-solid fa-x"></i>
                    </li>
                    




                    <li class="item-user">

                        <button class="component centered">
                            <div class="resize avt-img dung-nguyen"></div>
                            <p>Dung Nguyen</p>
                        </button>

                        <i class="icon-close fa-solid fa-x"></i>
                    </li>
                    
                    <li class="item-user">
                        <button  class="component centered">
                            <div class="resize avt-img peony"></div>
                            <p>Peony</p>
                        </button>

                        <i class="icon-close fa-solid fa-x"></i>
                    </li>
                 

                    <li class="item-user">

                        <button class="component centered">
                            <div class="resize avt-img yoda"></div>
                            <p>Yoda</p>
                        </button>
                        <i class="icon-close fa-solid fa-x"></i>
                    </li>
                    
                    <li class="item-user">
                        <button class="component centered">
                             <div class="resize avt-img john"></div>
                             <p>John</p>
                        </button>
                       
                        <i class="icon-close fa-solid fa-x"></i>

                    </li>
                </ul>
                
            </div>
    
    
    
    
        </div>
        </div>

        </>
    )
}

// Render component App vào #root element
ReactDOM.render(<SideBar />, document.getElementById('root'))   
