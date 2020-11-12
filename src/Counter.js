import React from "react";

class Counter extends React.Component { 
    constructor(props){ 
        super(props);
        this.state = {
            currentValue: props.startValue
        };
    }

    render() {
        const handlerClick = () => {
            this.setState({
                currentValue: this.state.currentValue + this.props.incValue
            });
        }
        return <button onClick={handlerClick}>
            {this.state.currentValue}
        </button>
    }
}

export default class CounterWrapper extends React.Component {
    render() {
        return (
            <>
                <Counter startValue={0} incValue={3}/>
            </>
        )
    }
}