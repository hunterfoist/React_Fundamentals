const Contacts = (contacts) => {
    return(
    <>  
     <h3>Hello, {contacts.name}</h3>
     <p>Age: {contacts.age}</p>
     <p>School: {contacts.school}</p>
     <p>Graduation Year: {contacts.gradYear}</p>
     
    </>
    )
}

export default Contacts;