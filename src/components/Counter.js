import React from 'react';

const style = {
    width:'300px',
    margin:'0 auto',
    padding:'15px',
    textAlign:'center',
    border:'1px solid black'
}

export default class Counter extends React.Component{
    state = {
        count:0,
        arr:[],
        obj:{
            title:'object'
        }
    };

    inc(){
        // let newState = this.state;
        // newState.count++;
        // this.setState(newState);
        let newState = {...this.state};
        newState.count++;
        this.setState(newState);
    }

    dec(){
        this.setState({...this.state,count:this.state.count - 1})
    }

    render(){
        return (
        <div style={style}>
            <h2>{this.props.title}</h2>
            <h3>Count: {this.state.count}</h3>
            <button onClick={this.dec.bind(this)}>-</button>
            <button onClick={this.inc.bind(this)}>+</button>
        </div>
        );
    }
}