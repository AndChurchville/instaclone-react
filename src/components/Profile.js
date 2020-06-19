import React from 'react';
import {MainContainer} from './Container';
import styled from 'styled-components';



export default function Profile() {
    return (
        <ProfileContainer>
            <ProfileDetails>
                <ProfileDetailsLeft>
                    <ProfileImage src='https://res.cloudinary.com/drea/image/upload/v1575988486/Portfolio%20images/compy_kbywpb.jpg' />
                </ProfileDetailsLeft>
                <ProfileDetailsRight>
                    <Username>
                        <h2>Ahndreyaa</h2>
                        <ProfileEdit><h4>Edit Profile</h4></ProfileEdit>
                    </Username>
                    <UserStats>
                        <l1><strong>78</strong> posts</l1>
                        <l1 className='num-stat'><strong>84</strong> followers</l1>
                        <l1 className='num-stat'><strong>237</strong> following</l1>
                    </UserStats>
                    <UserInfo>
                        <strong>Drea</strong>
                        <p>Code/Design/Art</p>
                    </UserInfo>

                </ProfileDetailsRight>

            </ProfileDetails>
        </ProfileContainer>
    )
}

const ProfileContainer = styled.div`
max-width: 1010px;
width: 100%;
margin: 100px auto;
`;

const ProfileDetails = styled.div`
display:flex;
`;

const ProfileDetailsLeft = styled.div`
margin-right: 40px;
width: 300px;
display:flex;
align-items: center;
justify-content: center;
`;

const ProfileImage = styled.img`
border-radius: 50%;
width: 150px;
height: 150px;
border: 1px solid #ccc;

`;

const ProfileDetailsRight = styled.div`
display:flex;
justify-content: center;
align-items: end;
flex-direction: column;
`;

const Username = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
`;

const ProfileEdit = styled.button`
width: 100px;
height: 30px;
text-align: center;
border: 1px solid gray;
border-radius: 4px;
cursor: pointer;
background: transparent;
padding: 5px 9px;
margin-left: 20px;
`;

const UserStats = styled.ul`
display: flex;
justify-content: center;
text-transform: capitalize;
    .num-stat {
        margin-left: 15px;
    }


`;
const UserInfo = styled.div`
text-align: left;
padding-top: 10px;`;