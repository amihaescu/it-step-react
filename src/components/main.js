import React from 'react';
import FluxCounter from '../flux/flux-counter';
import Comment from './functional';

export default class Main extends React.Component {

    render(){
        return (
            <>
            <h1>Welcome to our mini FB built with React</h1>
            <FluxCounter></FluxCounter>
            </>
        )
    }
}