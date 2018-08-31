import React, { Component } from 'react';

import styled from 'styled-components';
import { colors, fonts } from '../config/config'

const StyledInfo = styled.article`
  color: ${colors.white};
  font-size: 5rem;
`

const StyledName = styled.header`
  font-family: ${fonts.primary};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: .125em;
  // @include glitch($white, $black);
  // @include abberation;
`

const StyledTitle = styled.p`
  margin: 0;
  font-family: ${fonts.secondary};
  text-transform: uppercase;
  font-size: .5em;
  // @include glitch($white, $black);
  // @include abberation;
`

const StyledStatus = styled.p`
  display: none;
`

export default class Info extends Component {
  render() {
    return (
        <StyledInfo>
            <StyledName data-text="Ryan Filler">Ryan Filler</StyledName>
            <StyledTitle data-text="Front-End Developer">Front-End Developer</StyledTitle>
            <StyledStatus />
        </StyledInfo>
    );
  }
}