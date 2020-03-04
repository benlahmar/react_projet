import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test';
import User from './components/user';
import Avatar from './components/avatar';
import img1 from './img/avatar.png'
import Appart from './components/appart';
import Form1 from './components/form1';
import UserForm from './components/userform';
import Basic from './components/basic';
import Exemple from './components/exemple';


function App() {
  
  let u={
    "nom":'hhhh',
    "img":logo,
    "prenom":"alpha"
  };

  let u2={
    "nom":'alpha',
    "img":img1,
    "prenom":"beta"
  };

  let us=[{
    "id":1,
    "nom":'alpha',
    "img":img1,
    "prenom":"beta"
  },{
    "id":2,
    "nom":'xxx',
    "img":logo,
    "prenom":"beta"
  },{
    "id":3,
    "nom":'bb',
    "img":logo,
    "prenom":"beta"
  }];

  let apparts=[{"id":1,"adresse":"rue 22 bv abc casa ","surface":100,"nbpiece":4},
  {"id":2,"adresse":"rue 22 bv abc rabat ","surface":100,"nbpiece":4},
  {"id":3,"adresse":"rue 22 bv abc casa ","surface":100,"nbpiece":4}]
  sessionStorage.setItem("data",us.toString());
  /*
  let db=openDatabase("mabase","desc","1",1024);
 
  db.transaction(function(tx){
    tx.executeSql('create table location (iduser number,idappart number)');
  });

  

  db.transaction(function(tx){
    tx.executeSql('select * from user',[],function(tx,data){
      console.log(data.rows);
    });
  });

  db.transaction(function(tx){
    tx.executeSql('insert into location values(3,5)');
  });
  */
  let ff=(ev)=>{ev.preventDefault()}

  let drop=(ev)=>{
    let vv=ev.dataTransfer.getData("aa");
  let x=document.getElementById(vv);
  let x1=x.cloneNode(true);
  let dd=document.createElement("button")
  let txt=document.createTextNode(vv);
  dd.appendChild(txt);
  dd.setAttribute("class","btn btn-success drp");
  document.getElementById("zone").appendChild(dd);
  
  
  
   }
let s=5;
   let myfnc=()=>{
     console.log(s);
     s=s+4;
   }

   let myfnc2=()=>{
    console.log(s)
  }


  return (
    <div className="App">
      <header className="App-header">        
      <Test name="moi" nb='5' />
      <Exemple />
      </header>
       <ul>
         {us.map(e=>(
           <li key={e.id}>
             <User uu={e}  yy={myfnc2}  cs="abc"/>
           </li>
         )
         )}
         
       </ul>
      
       <div id="zone" onDrop={drop}  onDragOver={ff} >
 
       </div>
       <button className="btn btn-success">Valider</button>
       <ul>
         
           {apparts.map(a=>{
             return(
               <li key={a.id}>
               <Appart  xx={myfnc} apt={a} cs="abc"/>
               </li>
             )
           })}
         
       </ul>
      
     <UserForm />
     <Basic />
    </div>
  );
}

export default App;
