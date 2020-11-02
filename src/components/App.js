import React, {Component, useState} from "react";
import '../styles/App.css';
import { Clock } from "./Clock";

class App extends Component {
    constructor(props){
        super(props);
        this.state={clock:<Clock/>}
    }
    componentDidMount(){
       this.inteval=setInterval(()=>{
        this.setState({clock:<Clock/>})
       },1000)
    }
    componentWillUnmount(){
        clearInterval(this.inteval);
    }
    render() {

        return(
            <div className="Clock">
               <h3 id="time">{this.state.clock}</h3>
            </div>
        )
    }
}


export default App;
