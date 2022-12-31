import React from 'react';
import {Grid} from 'semantic-ui-react'
import './header.css'

class Header extends React.Component{
    
    render(){
        return(
            <div className="header grid">
                <div className='textalign'>Movie Recommendation</div>
                <div className='flex'>
                    <div>About</div>
                    <div>Bug Report</div>
                    <div>Contact</div>
                    <div>
                        <div>
                            <input className='searchbox' type="text" placeholder='Search' />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            )
    }
}
export default Header