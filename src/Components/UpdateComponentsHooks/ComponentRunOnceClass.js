import React, { Component } from 'react'

 class ComponentRunOnceClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    logMousePosition = e =>{
        this.setState({x:e.clientX,y:e.clientY})
    }
    componentDidMount(){
        window.addEventListener("mousemove",this.logMousePosition)
    }
  render() {
    return (
      <div>
        <label>X- {this.state.x} <br/>
            Y- {this.state.y}
        </label>

      </div>
    )
  }
}

export default ComponentRunOnceClass