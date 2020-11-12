import React from 'react';

export default class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes
        }
    }

    
    render() {
        const like = () => {
            this.setState({
                likes: this.state.likes + 1
            });
            console.log('liked...')
        }
        return (
            <div>
                {this.state.likes}
                <button className="btn btn-secondary m-2" onClick={like}>+</button>
            </div>
        )
    }
}