import React, { Component } from 'react'
import OffCanvas from 'react-aria-offcanvas'
 
const Navigation = () => (
  <nav id="menu">
    <ul>
      <li>
        <a href="#m-i-1">Menu Item 1</a>
      </li>
      <li>
        <a href="#m-i-2">Menu Item 2</a>
      </li>
      <li>
        <a href="#m-i-3">Menu Item 3</a>
      </li>
      <li>
        <a href="#m-i-4">Menu Item 4</a>
      </li>
      <li>
        <a href="#m-i-5">Menu Item 5</a>
      </li>
    </ul>
  </nav>
)
 
export default class Ri extends Component {
  constructor(props){
    super()
   this.state = {
      isOpen:props.open,
    }
  }
componentWillReceiveProps(props){
  if(props.open)
 this.setState({isOpen:true});
 else
 this.setState({isOpen:false});

}
 
  open = () => {
    
    this.setState({ isOpen: true })
  }
 
  close = (props) => {
    this.setState({ isOpen: false })
    this.props.setOpen()
  }
 
  render() {
    return (
      <div>
        
        <OffCanvas
          isOpen={this.state.isOpen}
          onClose={this.close}
          labelledby="menu-button"
          position="right"
         
        >
          <button  style={{"marginTop": "63px",
   "marginRight": "-89px"}} onClick={this.close}>Close</button>
          <Navigation/>
        </OffCanvas>
      </div>
    )
  }
}