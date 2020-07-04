import React from 'react';

class Button extends React.Component {

    componentDidMount() {
        console.log("componentDidMount");
    }


    render() {
        return (
            <button>{this.props.label}</button>
        )
    }

};


export default Button;