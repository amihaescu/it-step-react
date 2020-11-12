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
                    user: 'Jane',
                    text: 'This page is awesome',
                    date: new Date(2020, 9, 4, 14, 20).toISOString()
                },
                {
                    user: 'James',
                    text: 'I think it could be better',
                    date: new Date(2020, 9, 4, 14, 20).toISOString()
                },
                {
                    user: 'Allan',
                    text: 'It\'s ok the way it is',
                    date: new Date(2020, 9, 4, 14, 20).toISOString()
                }, 
                {
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
                <Comment {...this.state.comments[0]}></Comment>
                <Comment user={this.state.comments[1].user} date={this.state.comments[1].date} text={this.state.comments[1].text}></Comment>
                <Comment {...this.state.comments[2]}></Comment>
                <Comment {...this.state.comments[3]}></Comment>
            </div>
        )
    }
}

// CommentList.defaultProps={
//     title: "Comments"
// } ;