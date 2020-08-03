import React, { Component } from 'react'

 class S extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              value: null
         }
     }
     changeV(){
         this.setState({
             value:'X'
         })
     }
    render() {
        return (
            <div>
                <button onClick={()=> this.changeV()}>{this.state.value}</button>

            </div>
        )
    }
}

export default S
