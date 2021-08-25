import React from 'react'
import './Home.css'
import NavBar from './NavBar/NavBar.js'
import Header from './Header/Header.js'
import Photos from './Photos/Photos.js'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    }
    componentDidMount(){
        fetch('https://ushop-gcp.uc.r.appspot.com/api/search/instagram')
            .then(result => result.json())
                .then(result => {
                    this.setState({
                        isLoaded:true,
                        data: result
                    })
                },
                (error) =>{
                    this.setState({
                        isLoaded: true,
                        error : error
                    })
                })
    }

    render(){
        const {error,isLoaded,data} = this.state;
        if(error){
            return <div>Error: {error.message}</div>
        }
        else if(!isLoaded){
            return <div>Loading...</div>
        }
        else{
            return <div className='main_container'>
                    <div className='nav_bar'>
                            <NavBar data = {data.id}/>
                    </div>
                    <div className='body_container'>
                        <div className='empty_left'></div>
                        <div className='body'>
                            <div className='header'>
                                <Header profileImage={data.profileImgUrl} postCount={data.postCount} followerCount={data.followerCount} followingCount={data.followingCount} profileDescription={data.profileDescription}/>
                            </div>
                            <div className='photos'>
                                <Photos data={data.posts}/>
                            </div>
                        </div>
                        <div className = 'empty_right'></div>
                    </div>

                </div>
        }
    }
}
