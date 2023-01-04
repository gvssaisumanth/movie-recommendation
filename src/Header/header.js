import React from 'react';
import './header.css'
import {MenuData} from './MenuData'

class Header extends React.Component{
    
    state={clicked:"false" }

    //handleHamburgerClick=this.handleHamburgerClick.bind(this)

    handleHamburgerClick = ()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className='NavbarItems'>
                <h1 style={{color:'white'}}>LOGO</h1>
                <div className='menu-icons' onClick={this.handleHamburgerClick}><i className={this.state.clicked? "fas fa-times":"fas fa-bars"}></i></div>
                <ul className= {this.state.clicked? "nav-menu active":"nav-menu"}>
                    {MenuData.map((menu,idx)=>{
                        return(
                            <li key={idx}>
                                <a href={menu.url} className={menu.className}>
                                    <i className={menu.icon}></i>{menu.title}
                                </a>
                            </li>

                        )
                    })}
                </ul>
            </nav>
            )
    }
}
export default Header