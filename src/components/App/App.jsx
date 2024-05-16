import { useState } from "react"
import { useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import initialContacts from "../../contacts.json";
import css from './App.module.css'




export default function App() {

  const [contacts, setContacts] = useState(
    () => {
      const storedContact = localStorage.getItem("storedContact");
      return storedContact !== null ? JSON.parse(storedContact) : initialContacts;
    }
  );

  useEffect(() => {
    localStorage.setItem("storedContact", JSON.stringify(contacts))
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
  )
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    });
  }
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }
  


  return (
  <div>
  <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      {visibleContacts.length > 0 ? <ContactList contacts={visibleContacts} onDelete={deleteContact} /> : <p>No contact in the phonebook</p>}
    </div>
  )

}