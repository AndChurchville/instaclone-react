import React from 'react';
import styled from 'styled-components';
import {MainContainer} from './Container';
import {Post} from './Post/index';

export default function Home() {
    return (
    <MainContainer>
        {/* <div className='card'>
            <div className='user-avatar'>
                 <h1>UserAvi</h1> 
                 <h2>UserName</h2>
                 <h2>UserLocation</h2>
            </div>
            <div className='post-img'>
                <PostImage />
            </div>
            <div className='post desc'>
                <h3>Post description</h3>
            </div>
        </div> */}
        <Post nickname="Drea" avatar='https://res.cloudinary.com/drea/image/upload/v1575988486/Portfolio%20images/compy_kbywpb.jpg' image='https://res.cloudinary.com/drea/image/upload/v1576175027/Portfolio%20images/pokemon_hrm0cw.jpg' caption='Corsola Corsola!'/>
    </MainContainer>
            
        
    )
}

const PostImage = styled.div`
background-image: url('https://res.cloudinary.com/drea/image/upload/v1575394993/bus-unsplash_aprgo9.jpg');
background-size: cover;
width: 500px;
height: 500px;
border: solid 1px black;
`;