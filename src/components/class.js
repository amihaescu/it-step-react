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
            title: props.title,
            comments: commentsDb[props.match.params.topic]
        }
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.title}</h1>
                {/* <Comment {...this.state.comments[0]}></Comment>
                <Comment user={this.state.comments[1].user} date={this.state.comments[1].date} text={this.state.comments[1].text}></Comment>
                <Comment {...this.state.comments[2]}></Comment>
                <Comment {...this.state.comments[3]}></Comment> */}
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