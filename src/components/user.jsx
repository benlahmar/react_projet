import React from 'react';
import Avatar from './avatar';
import logo from '../logo.svg';
class User extends React.Component {
   
    start=(ev)=>{
      
      ev.dataTransfer.setData("aa",ev.target.id);
       console.log(ev.target.id);
      
       
    }
    render() { 
        return ( 
            <div className={this.props.cs} id={"user"+this.props.uu.id} onDragStart={this.start} draggable="true">
            <Avatar />
            <span>{this.props.uu.nom}</span>
            <p>{this.props.uu.prenom}</p>
            <button className="btn  btn-info" onClick={this.props.yy}>details</button>
            </div>
         );
    }
}

/*

function User(props) {
    
    return(
        <div>
        <img src={props.img}></img>
        <p>{props.name}</p>
    </div>
    );
}
*/
export default User;