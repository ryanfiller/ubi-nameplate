import React, { Component } from 'react';

class Person extends Component {
  render() {
    return (
        <div class="person">
            <div class="person__torso">
                <img id="torsoImage" src="../assets/img/clear.png" />
            </div>
        </div>
    );
  }
}

export default Person;