import React    from 'react';
import logo from '../img/avatar.png';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user:{
            "nom":'hhhh',
            "img":logo,
            "prenom":"alpha",
            "adresse":"rue 123 bv abcd",
            "admin":true
          } };
          this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
       this.setState({
           user:{
            ...this.state.user, 
            [name]: value
           }
          });
         console.log(this.state.user)
         // this.setState({value: event.target.value});

       /*  this.setState(prevState => ({
            user: {                   // object that we want to update
                ...prevState.user,    // keep all other key-value pairs
                nom: value       // update the value of specific key
            }
        }))*/
    }
    submithandler=(event)=>{
        alert(this.state.user.nom)
    }
    render() { 
        return ( 
            <div className="row container">
                <div className="col-md-4"> </div>
                <div className="col-md-4"> 
            <form onSubmit={this.submithandler}>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" value={this.state.user.nom } name="nom"
                        onChange={this.handleInputChange} id="inputEmail4" placeholder="Email"></input>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password"></input>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" value={this.state.user.adresse} name="adresse"
                        onChange={this.handleInputChange} id="inputAddress" placeholder="1234 Main St"></input>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity"></input>
                </div>
                <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control" value={this.state.user.prenom} name="prenom"
                        onChange={this.handleInputChange}>
                    <option value="ma" >Choose...</option>
                    <option value="fr">...</option>
                </select>
                </div>
                <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip"></input>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" value={this.state.user.admin } name="admin"
                        onChange={this.handleInputChange}></input>
                <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        </div>
        </div>
        );
    }
}
 
export default UserForm;