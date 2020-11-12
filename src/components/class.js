import Comment from './functional'
import React from 'react'

export default class CommentList extends React.Component {
    static defaultProps = {
        title: "Comments"
    }
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            title: props.title,
            comments: [
                {
                    id: 1,
                    user: 'Jane',
                    text: 'This page is awesome',
                    date: new Date(2020, 9, 4, 14, 20).toISOString()
                },
                {
                    id: 2,
                    user: 'James',
                    text: 'I think it could be better',
                    date: new Date(2020, 9, 4, 14, 20).toISOString()
                },
                {
                    id: 3,
                    user: 'Allan',
                    text: 'It\'s ok the way it is',
                    date: new Date(2020, 9, 4, 14, 20).toISOString()
                }, 
                {
                    id: 4,
                    user: 'Maria',
                    text: 'I don\'t know....',
                    date: new Date(2020, 9, 4, 14, 20).toISOString()
                }
            ]
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