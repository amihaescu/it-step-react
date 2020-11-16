import Comment from './functional'
import React from 'react'
import  { commentsDb } from '../db/comments-db';

export default class CommentList extends React.Component {
    static defaultProps = {
        title: "Comments"
    }
    constructor(props) {
        super(props);
        console.log(props.match.params.topic);
        this.state = {
            title: props.match.params.topic,
            comments: commentsDb[props.match.params.topic]
        }
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.title}</h1>
                {this.state.comments.map(comment => (
                    <Comment key={comment.id} {...comment}></Comment>
                ))}
            </div>
        )
    }
}

// CommentList.defaultProps={
//     title: "Comments"
// } ;