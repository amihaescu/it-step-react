export default function Comments(props) {
    let {user, date, text, likes} = props;
    return (
        <div className="card m-2">
            <div>{user}</div>
            <div>{date}</div>
            <div>{text}</div>
            <div>Likes: {likes}</div>
        </div>
    )
}

Comments.defaultProps = {
    likes: 0
}