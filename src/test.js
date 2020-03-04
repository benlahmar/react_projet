import React from 'react';

function Test(props) {
   let aa=props.name;
    return(
        <form >
        <h1> Bonjour !!!!!! {aa}</h1>
    <p>hi {props.nb}</p>
        <input type='email' placeholder='entrer votre email' required></input>
        <button type='submit'>valider</button>
        </form>
        );
}

export default Test;