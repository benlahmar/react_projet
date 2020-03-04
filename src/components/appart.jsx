import React from 'react'
import logo from '../logo.svg';
class Appart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    start=(ev)=>{
     //   let  obj=target;
      ev.dataTransfer.setData("aa",ev.target.id);
     }

   
    render() { 
        return ( 
            <div className={this.props.cs} id={"appart"+this.props.apt.id} onDragStart={this.start} draggable>
                <h4>{this.props.apt.id}</h4>
                <p>
                 <span>Adresse:</span>   {this.props.apt.adresse}
                </p>
                <p>
        <span>Surface: {this.props.apt.surface}</span>  
                </p>
                <p>
                <span>Nb Pieces: {this.props.apt.nbpiece}</span>
                </p>
                <button onClick={this.props.xx} >test</button>
            </div>
         );
    }
}
 

export default Appart;