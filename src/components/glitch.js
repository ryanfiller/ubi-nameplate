import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components'
import { colors, transition } from '../config/config'


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

    *:nth-child(1) {
        pointer-events: none;
        position: absolute;
        left: -1px;
        top: 0;
        overflow:hidden;
        clip: rect(0,900px,0,0);
        animation: noise1 ${transition} infinite linear alternate-reverse;
        width: 100%;
        z-index: 3;
    }

    *:nth-child(2) {
        pointer-events: none;
        content: attr(data-text);
        position: absolute;
        left: 1px;
        top: 0;
        overflow: hidden;
        clip: rect(0,900px,0,0);
        animation: noise2 ${transition} infinite linear alternate-reverse;
        width: 100%;
        z-index: 2;
    }

    *:nth-child(3) {
        position: relative;
        z-index: 1;
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

export default class Glitch extends Component {
  render() {

    return (
      <StyledGlitch>
          {this.props.children}
          {this.props.children}
          {this.props.children}
      </StyledGlitch>
    );
  }
}


// @mixin glitch($color:$color-black, $background:$color-white) {

//     @keyframes noise-anim {
        // $steps: 20;
        // @for $i from 0 through $steps{
        //     #{percentage($i*(1/$steps))}{
        //       clip: rect(random(100)+px,9999px,random(100)+px,0);
        //     }
        // }
//     }

//     @keyframes noise-anim-2 {
//         $steps: 20;
//         @for $i from 0 through $steps{
//             #{percentage($i*(1/$steps))}{
//               clip: rect(random(100)+px,9999px,random(100)+px,0);
//             }
//         }
//     }

//     color: $color;
//     position: relative;

// }