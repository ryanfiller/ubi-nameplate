import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import styled, { keyframes } from 'styled-components'
import { colors, transition } from '../config/config'
export default class Glitch extends Component {

    state = {
        text: ''
    }
  
    componentDidMount() {
        this.setState({
            text: ReactDOM.findDOMNode(this).children[0].innerHTML
        })
    }

    render() {

        return (
            <StyledGlitch text={this.state.text}>
                {this.props.children}
                {console.log(this.state.text)}
            </StyledGlitch>
        );
    }
}


const animation = function() {

    var array = []
    
    for (var i = 0; i <= 20; i++) { 

        var random1 = Math.floor(Math.random() * 100) + 1
        var random2 = Math.floor(Math.random() * 100) + 1

        array.push(`
            ${i * 5}% {
                clip: rect(${random1}px,9999px,${random2}px,0);
            }
        `)
    }

    return array.join("");
};


const StyledGlitch = styled.div`
    position: relative;

    @keyframes noise1 {
        ${animation()}
    }

    @keyframes noise2 {
        ${animation()}
    }

    & > * {
        position: relative;
        z-index: 1;

        &:before, &:after {
            content: '${props => props.text}';
            pointer-events: none;
            position: absolute;
            top: 0;
            overflow: hidden;
            clip: rect(0,900px,0,0);
        }

        &:before {
                left: -1px;
                animation: noise1 ${transition} infinite linear alternate-reverse;
                width: 100%;
                z-index: 3;
            }
        
        &:after {
            left: 1px;
            animation: noise2 ${transition} infinite linear alternate-reverse;
            width: 100%;
            z-index: 2;
        }
    }

    * {
        color: ${colors.white};
        background: ${colors.black};
        text-shadow: 
        0px .125em .25em rgba(0, 255, 0, .15),
        0px .25em .25em rgba(225, 0, 0, .125),

        0px -.125em .25em rgba(255, 0, 0, .15),
        0px -.25em .25em rgba(0, 255, 0, .125),

        .125em 0px .25em rgba(255, 255, 0, .15),
        .25em 0px .25em rgba(0, 255, 255, .125),

        -.125em 0px .25em rgba(0, 255, 255, .15),
        -.25em 0px .25em rgba(255, 255, 0, .125),

        0px 0px .125em rgba(0, 0, 0, .15);
    }

`