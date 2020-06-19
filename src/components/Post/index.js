import React, {Component} from 'react';
import styled from 'styled-components';



export class Post extends Component {
        constructor(props){
            super(props);
        }
    render() {
        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;




        return <PostContainer ref='Post'>
            <header>
                <PostUser>
                    <UserAvi>
                        <img src={avatar} alt={nickname}/>
                    </UserAvi>
                    <UserNickname>
                        <span>{nickname}</span>
                    </UserNickname>
                </PostUser>
            </header>
            <PostImage>
                <div className='Post-img-bg'>
                    <img className='img-content' alt={nickname} src={image} />
                </div>
            </PostImage>
            <PostCaption>
    <strong>{nickname}</strong> {caption}
            </PostCaption>
        </PostContainer>
    }

}

const PostContainer = styled.article`
    border-radius: 3px;
    bordder: 1px solid #e6e6e6;
    background-color:#fff;
    margin-bottom: 60px; 
    margin-left: 20%;
    margin-right: 20%;
    `;

const PostUser = styled.div`
    display:flex;
    padding: 16px;
    align-items: center;
`;

const UserAvi = styled.div`
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    `;
const UserNickname = styled.div`
    margin-left: 12px;
    font-family: 'PT Sans', sans-serif;
    font-weight: Bold;
    `;

const PostImage = styled.div`
        .Post-img-bg{
            background-color: #efefef;
            border-bottom: 5px solid rgba(0, 0, 0, 0.0975);
        }
        .img-content{
            display: block;
            width: 100%;
        }
    `;
const PostCaption = styled.div`
padding: 16px 16px;`;