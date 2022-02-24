import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <>
          <div className="footer-container">
            <div className='upper'> 
            <br />
            <p className='wear-txt'>Wear Mask and Stay Safe</p>
            <div className='two-links'>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<Link to='#' className='dummy tohome'>Home</Link> &emsp;
            <a href='https://www.google.com/' target='_blank' className='dummy'>Browse</a>
            </div>
            
         </div>
         <br />
         <div className='icons-container'>
         <p className="p2">Try to Reach me..</p>
        &emsp;&ensp;
         <a href='#'><i class="fa fa-instagram icon"></i></a>  &emsp;
         <a href='https://www.linkedin.com/in/santhasa-rooban-m-023453190/' target="_blank"><i class="fa fa-linkedin icon"></i></a> &emsp;
         <a href='https://github.com/santhasarooban' target="_blank"><i class="fa fa-github icon"></i></a>  <span>&copy;Google</span>
         <br />
        <br />
        </div> 
       
         </div>
        
        </>
    )
}

export default Footer
