import React    from 'react'
import './avatar.css'
import logo from '../logo.svg'
import img1 from '../img/avatar.png'

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user:{"nom":"beta","img":img1} }
    }
    abc=()=>{
        this.setState({user:{"nom":"beta","img":logo}})
    }
    render() { 
        return ( 
            <div className="Avatar">
                <img src={this.state.user.img} alt={this.state.user.nom} onClick={this.abc} ></img>
            </div>
         );
    }
}
 
export default Avatar;