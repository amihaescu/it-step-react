import React from "react";
export default function Comment(props) {
    let { user, date, text, likes } = props
    return (
        <React.Fragment>
            <div>{user}</div>
            <span>{date}</span>
            <div>{text}</div>
            <div>Likes: {likes}</div>
            <hr />
        </React.Fragment>
    )
}

Comment.defaultProps = {
    likes: 0
};