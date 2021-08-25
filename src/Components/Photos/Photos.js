import React from 'react'
import './Photos.css'
import { BsGrid3X3 } from "react-icons/bs";
import { RiRadio2Line } from "react-icons/ri";
import { BsPersonBoundingBox } from "react-icons/bs";

export default class Photos extends React.Component{
    render(){
        const photos = this.props.data
        return(
            <div className='photos'>
                <div className='photo_bar'>
                    <div className='item'>
                        <BsGrid3X3/>
                        POSTS
                    </div>
                    <div className='item'>
                        <RiRadio2Line/>
                       IGTV
                    </div>
                    <div className='item'>
                        <BsPersonBoundingBox/>
                        TAGGED
                    </div>
                </div>
            <div className='photos_container'>
                {photos.map(element => {
                    return <div className='photo_item'><img src={element.imgUrl}/></div>
                })}
            </div>
            </div>
        )
    }
}