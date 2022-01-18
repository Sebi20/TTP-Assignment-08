import '../App.css';
import React from 'react'
import {Menu} from './Menu'
//import {useState} from 'react'
import {Table} from './Table'
class App extends React.Component{

constructor(props){
  super(props)
  this.state = {color:"#ffffff",height:1,width:1}
  this.setColor = this.setColor.bind(this)
  this.setHeight = this.setHeight.bind(this)
  this.setWidth = this.setWidth.bind(this)
}

setWidth(num){
  this.setState({width:num})
}
setHeight(num){
  this.setState({height:num})
}
setColor(str){
  this.setState({color:str})
}
//const [color,setColor] = useState("#ffffff")
//const [width,setWidth] = useState(1)
//const [height,setHeight] = useState(1)

render(){return(<>
  <Menu color={this.state.color} setColor={this.setColor} width={this.state.width} setWidth={this.setWidth} height={this.state.height} setHeight={this.setHeight}/>
  <br></br>
  <br></br>
  <br></br>
  <Table color={this.state.color} width={this.state.width} setWidth={this.setWidth} height={this.state.height} setHeight={this.setHeight}/>
  </>
)
}

}

export default App;
