import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/style-content.css'


export function Content() {
    return (
        <>
            <div class="main-content">
                <div class="content-header">

                    <div class="view-header">

                        <div class="user display-horizontally">

                            <div class="img-user"></div>
                            <p>John</p>
                            <i class=" fa-solid fa-angle-down"></i>

                        </div>



                        <div class="action display-horizontally">
                            <i class="icon-view-header fa-regular fa-square-plus"></i>
                            <p>Canvas</p>
                        </div>



                    </div>

                    <div class="bookmark display-horizontally">
                        <i class="fa-solid fa-plus"></i>
                        <p>Add a bookmark</p>
                    </div>

                </div>




                <div class="content-center">
                    <div class="panel-button display-horizontally">


                        <button class="btn-edit">
                            <p>Edit Profile</p>
                        </button>



                        <button class="btn-upload">
                            <p>Upload Profile Photo</p>
                        </button>
                    </div>



                    <div class="panel-text">
                        <p><b>This is your space.</b> Draft messages, list your to-dos, or keep links and files handy. You can also talk to yourself here, but please bear in mind you’ll have to supply both sides of the conversation.</p>
                    </div>



                    <div class="panel-user display-horizontally">
                        <div class="img-user"></div>

                        <button class="btn-user">
                            <p>John (you)</p>
                        </button>


                    </div>




                </div>






                <div class="content-bottom centered">
                    <div class="panel-input">

                        <div class="format-bar ">
                            <ul>
                                <li>
                                    <button>
                                        <i class=" icon-panel-input fa-solid fa-bold"></i>
                                    </button>
                                </li>


                                <li>
                                    <button>
                                        <i class="icon-panel-input fa-solid fa-italic"></i>
                                    </button>
                                </li>

                                <li>
                                    <button>
                                        <i class="icon-panel-input fa-solid fa-strikethrough"></i>
                                    </button>
                                </li>

                                <span class="rectangel"></span>



                                <li>
                                    <button>
                                        <i class="icon-panel-input fa-solid fa-link"></i>
                                    </button>

                                </li>



                                <li>
                                    <button>
                                        <i class="icon-panel-input fa-solid fa-list-ol"></i>
                                    </button>
                                </li>

                                <li>

                                    <button>
                                        <i class="icon-panel-input fa-solid fa-list"></i>
                                    </button>
                                </li>

                                <span class="rectangel"></span>

                                <li>
                                    <button>
                                        <i class="icon-panel-input fa-solid fa-align-left"></i>
                                    </button>
                                </li>

                                <span class="rectangel"></span>

                                <li>
                                    <button>
                                        <i class="icon-panel-input fa-solid fa-code"></i>
                                    </button>
                                </li>

                                <li>

                                    <button>
                                        <i class="icon-panel-input fa-solid fa-file-code"></i>
                                    </button>
                                </li>

                            </ul>












                        </div>




                        <div class="input-text ">
                            <p>Messages</p>

                        </div>




                        <div class="options-bar">
                            <ul>

                            </ul>

                            <i class="icon-options fa-solid fa-plus"></i>
                            <i class="icon-options fa-solid fa-font"></i>
                            <i class="icon-options fa-regular fa-face-smile"></i>
                            <i class="icon-options fa-solid fa-hashtag"></i>

                            <span class="rectangel"></span>
                            <i class="icon-options fa-solid fa-video"></i>
                            <i class="icon-options fa-solid fa-microphone"></i>

                            <span class="rectangel"></span>
                            <i class="icon-options fa-regular fa-note-sticky"></i>

                        </div>




                    </div>


                </div>


            </div>
        </>

    )
}