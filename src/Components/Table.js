import React from 'react'
class Table extends React.Component{

updateTable(){
let arr = []
for(let i = 0;i<this.props.height;i++){
    let row = []
    for(let y = 0;y<this.props.width;y++){
        row.push(<td className="Cell"style={{backgroundColor:'transparent'}}></td>)
    }
    arr.push(<tr>{row}</tr>)
    }
    return arr
}

async clearAll(){
    let arr = document.querySelectorAll(".Cell")
    for(let cell of arr)
    {
        cell.style.backgroundColor = "transparent"
    }
}

fillAll(){
    let arr = document.querySelectorAll(".Cell")
    for(let cell of arr)
    {
        cell.style.backgroundColor = this.props.color
    }
}
fillEmpty(){
    let arr = document.querySelectorAll(".Cell")
    for(let cell of arr)
    {
        if(cell.style.backgroundColor ==="transparent")cell.style.backgroundColor=this.props.color
    }
}

render(){return (<>
<div id="specialButtons">
    <button onClick={()=>this.clearAll()}>Clear All</button>
    <button onClick={()=>this.fillAll()}>Fill All</button>
    <button onClick={()=>this.fillEmpty()}>Fill Empty</button>
</div>
<div id="Table"
onMouseOver={(event)=>{if(event.target.className==="Cell"&&event.buttons===1)event.target.style.backgroundColor=this.props.color}}
onMouseDown={(event)=>{event.preventDefault();if(event.target.className==="Cell")event.target.style.backgroundColor=this.props.color}}
>
    {this.updateTable()}
</div></>)

}
}
export {Table}