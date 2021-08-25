import React from 'react'
import './NavBar.css'
import { CgHome } from 'react-icons/cg'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import {AiOutlineCompass} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {FaSearch} from 'react-icons/fa'


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
export default class NavBar extends React.Component{
    
    render(){
        return(
            <div className='nav_bar_container'>
                <div className='nav_empty_left'></div>
                <div className='nav_body'>
                    <div className='Instagram_logo'>
                        {capitalizeFirstLetter(this.props.data)}
                    </div>
                    <div>
                        <input type="search" placeholder='search'></input>
                    </div>
                    <div className='icons'>
                        <div><CgHome size='1.7em'/></div>
                        <div><IoPaperPlaneOutline size='1.7em'/></div>
                        <div><AiOutlineCompass size='1.7em'/></div>
                        <div><AiOutlineHeart size='1.7em'/></div>
                        <div><CgProfile size='1.7em'/></div>
                    </div>
                </div>
                <div className='nav_empty_right'></div>
            </div>
        )
    }
}