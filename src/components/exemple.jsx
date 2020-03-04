
import React from 'react'
class Exemple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    fonction1(x){
        console.log("koko   "+x);
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.fonction1('fff')}>test</button>
            </div>
         );
    }
}
 
export default Exemple;