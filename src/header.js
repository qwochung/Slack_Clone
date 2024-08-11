import ReactDOM from 'react-dom'
import React from  'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import  '../assets/css/style-header.css'





// Tạo component App
export function Header() {
    return (
        <>
         <div id="header">
          
		
        <div class="nav-header">
            <button class="btn-nav centered">
                 <i class=" icon-header fa-solid fa-arrow-left"></i>
            </button>

            
            <button class=" btn-nav centered">
                 <i class="icon-header fa-solid fa-arrow-right"></i>
            </button>
            
            <button class="btn-nav centered ">
                <i class="icon-header fa-regular fa-clock"></i>
            </button>

            

        </div>

        <div class="search-header">
            <p class="text-search">
                Search Amazed
            </p>

            <button class=" btn-nav centered">
               
                <i class="icon-search icon-header fa-solid fa-magnifying-glass"></i>
            </button>
                
            

        </div>

        <div class="question-header ">
            <button class="question-icon btn-nav centered">
                <i class="icon-header fa-solid fa-question"></i>
            </button>
                
            
        </div>


        </div>
        </>
    )
}


// Render component App vào #root element
// ReactDOM.render(<Header />, document.getElementById('root'))   
