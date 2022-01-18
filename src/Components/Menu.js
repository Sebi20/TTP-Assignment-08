import React from "react";

class Menu extends React.Component{


render(){return(<div id="menu">
        <h1>Group 12's Grid Paint Tool</h1>
        <div id="buttonField">
        <button onClick={()=>this.props.setHeight(this.props.height + 1)}>Add Row</button>
        <button onClick={()=>this.props.setWidth(this.props.width + 1)}>Add Column</button>
        <button onClick={()=>{this.props.setWidth(this.props.width + 16);this.props.setHeight(this.props.height + 16)}}>Add 16x16</button>
        <button onClick={()=>{if(this.props.height>1)this.props.setHeight(this.props.height - 1)}}>Remove Row</button>
        <button onClick={()=>{if(this.props.width>1)this.props.setWidth(this.props.width - 1)}}>Remove Column</button>
        <button onClick={async ()=>{await this.props.setWidth(0);await this.props.setHeight(0);this.props.setWidth(1);this.props.setHeight(1)}}>Remove All</button>
        </div>
        <br></br>
        <br></br>
        <label>Choose a color: </label>
        <input type="color" id="colorselect" value={this.props.color==="transparent"?"#aaffe3":this.props.color}onChange={(event)=>
            {event.preventDefault()
                this.props.setColor(event.target.value)}}>
        </input>
        <br></br>
        <button id="eraser"onClick={(event)=>this.props.setColor("transparent")}>ERASER</button>
    </div>)
}
}
export {Menu}






