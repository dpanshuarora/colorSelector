import React, { Component } from 'react'
import './ColorSelector.css'

export class ColorSelector extends Component {
    constructor(props) {
        super(props);
        this.createTextbox = this.createButton.bind(this)
    }
    render() {
      return (<div>
      <div> <input type = 'text' id = 'name' /> </div>
      <div>
      { this.createButton('red') }
      { this.createButton('green') }
      { this.createButton('blue') }
      { this.createButton('black') }
      </div>
      <label id = "name-label"> </label>
      <div>
      <input type = "radio" name = "contact" defaultChecked= {<div> Email: <input type = "text" />
      Phone Number: <input type = "text" /> </div>} onClick={ this.changeToDigital }/> Digital
      <input type = "radio" name = "contact" onClick={ this.changeToPhysical }/> Physical
      </div>
      <div id = "contact-details"></div>

      <div id = "digital">
      Email: <input type = "text" />
      Phone Number: <input type = "text" />
      </div>

      <div id = "physical" className = "physical-hidden">
      Address Line 1: <input type = "text" />
      Address Line 2: <input type = "text" />
      </div>

      </div>
    )
    }

    createButton(color) {
      return <button id = { color } className = {color} onClick = { function printName() {
        const name = document.getElementById('name').value;
        const label = document.getElementById('name-label');
        label.innerHTML = name;
        label.className = color;
      }} > </button>
    }

    changeToDigital() {
      console.log("dscsds")
      const physical = document.getElementById('physical');
      const digital = document.getElementById('digital');
      physical.className = "physical-hidden";
      digital.className = "digital-display";
    }

    changeToPhysical() {
      const physical = document.getElementById('physical');
      const digital = document.getElementById('digital');
      physical.className = "physical-display";
      digital.className = "digital-hidden";
    }
  }
