import React, { Component } from 'react'
import ReactDom from 'react-dom'

class App extends Component{
  constructor(){
    super() 
    this.state = {
      value: '',
      toDos:[],
      counter:0
    }
  }

  update(value){
   console.log('you clicked the button', value) 
   this.state.toDos.push(<div >{value}</div>)
   this.forceUpdate()
   console.log(this.state.toDos)
  }

  recordChange(event){
    this.setState({value:event.target.value}) 
    console.log(this.state.value)
  }

  render(){
    let populateRows = this.state.toDos.map((todo)=>{
        return <ToDos key={this.state.counter++} data={todo}/>
      })
    return(
      <div>
      <input type='text' onChange={this.recordChange.bind(this)} value={this.state.value} />
      <button type='button' onClick={this.update.bind(this,this.state.value)}> Click here </button>
      <div>{populateRows}</div> 
      </div>
    )
  }
}

const ToDos = (props)=>{
return (
  <div >{props.data}</div>

)

}


ReactDom.render(<App />, document.getElementById('app'))
