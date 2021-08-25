import React from 'react'
import './Header.css'
import { GoVerified } from "react-icons/go";



export default class Header extends React.Component{
    render(){
        return(
            <div className='header_container'>
                    <div className='profile_image'>
                        <div className='image_container'>
                        <img src={this.props.profileImage}/>

                        {console.log(this.props.profileImage)}                        
                        </div>
                    </div>
                    <div className='header_info'>
                        <div className='account'>
                            <div>
                                nasa
                            </div>
                            <div>
                                <GoVerified color='#338DFF' size='0.6em'/>
                            <div/>
                        </div>
                        <div>
                            <button className='follow_button'>
                                Follow
                            </button>
                        </div>
                        <div className='more'>
                            ...
                        </div>
                        </div>
                        <div className='counters'>
                            <div className='item'>
                                <div className='count'>
                                    {this.props.postCount}
                                </div>
                                <div>
                                    posts
                                </div>
                            </div>
                            <div className='item'>
                                <div className='count'>
                                    {this.props.followerCount}
                                </div>
                                <div>
                                    followers
                                </div>
                            </div>
                            <div className='item'>
                                <div className='count'>
                                    {this.props.followingCount}
                                </div>
                                <div>
                                    following
                                </div>
                            </div>
                        </div>
                        <div className='profile_description'>
                            <p>
                                {this.props.profileDescription}
                            </p>
                        </div>
                    </div>
                </div>
        )
    }
}