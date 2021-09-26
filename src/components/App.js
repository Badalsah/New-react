import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import Card from "./Card";
import Contacts from "./Contact";


function createCard(contact) {
    return (
    <Card 
    key = {Contacts.id}
    name={Contacts.name}
    img = {Contacts.imgURL}
    phone = {Contacts.phone}
    email = {Contacts.email} 

    />
    );
}


function App(props){
    return<div>
        <Header />
        <Note />
        <Footer />
        {Contacts.map(createCard)}
        {/* <h2>{props.head}</h2>
        <p>{props.leg}</p> */}

      {/* <Card
        name={Contacts[0].name}
        // img={Contact[0].imgURL}
        phone={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        // img={Contacts[1].imgURL}
        phone={Contacts[1].phone}
        email={Contacts[1].email}
      />

        <Card
        name={Contacts[2].name}
        // img={Contacts[2].imgURL}
        phone={Contacts[2].phone}
        email={Contacts[2].email}
      /> */}
      
    </div>

}
export default App;