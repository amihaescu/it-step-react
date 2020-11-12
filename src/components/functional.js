import React from "react";
import LikeButton from './like-button/likeButton';

export default function Comment(props) {
    let { user, date, text, likes } = props
    
    return (
        <div className="card m-2">
            <div style={{ fontWeight: "bold"}}>{user}</div>
            <span style={{ color: "gray"}}>{date}</span>
            <div>{text}</div>
            <LikeButton likes={likes}></LikeButton>
        </div>
    )
}

Comment.defaultProps = {
    likes: 0
};