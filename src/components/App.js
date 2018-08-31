import React, { Component } from 'react';

import styled, { injectGlobal } from 'styled-components'
import { colors } from '../config/config'
import Info from './info';
import Person from './person'

require("typeface-raleway")
require("typeface-dosis")

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-size: 12px;
  }
`

const StyledApp = styled.main`
  // display size is 800px x 480px
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: ${colors.black};
  background: blue;
`

export default class App extends Component {

  componentDidMount() {
    // five minutes refresh timer
    setInterval(function() {
        caches.delete(caches).then(function(boolean) {
          window.location.reload(true)
        });
      }, 5 * 60 * 1000);
  }

  render() {
    return (
      <StyledApp>

        <Info />
        {/* <Person /> */}

      </StyledApp>
    );
  }
}
