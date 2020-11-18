import React from "react";
import LikeButton from './like-button/likeButton';
import PropTypes from 'prop-types';

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


Comment.propTypes = {
    user: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
}