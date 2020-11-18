import Comment from './functional'
import React from 'react'
import  { commentsDb } from '../db/comments-db';
import { PropTypes } from 'prop-types';
import { getCommentsByCategory } from '../services/http-service';

export default class CommentList extends React.Component {
    static defaultProps = {
        title: "Comments"
    }
    constructor(props) {
        super(props);
        this.state = {
            title: props.match.params.topic,
            comments: []
        }
        
    }

    componentDidMount() {
        console.log('mounted component')
        getCommentsByCategory(this.state.title).then(results =>{
            this.setState({...this.state, comments: results.data })
        })
    }

    componentWillUnmount() {
        console.log('component unmounted')
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
CommentList.propType = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            topic: PropTypes.string.isRequired
        })
    })
}