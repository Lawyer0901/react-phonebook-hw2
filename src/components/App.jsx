import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContactClick = obj => {
    const newObj = {
      id: nanoid(),
      ...obj,
    };
    console.log(obj);
    console.log(newObj);

    const existContact = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(newObj.name.toLowerCase())
    );

    this.setState(prevState => {
      if (existContact) {
        return alert(`Contact ${newObj.name} already exist`);
      }
      return { contacts: [...prevState.contacts, newObj] };
    });
  };
  handleFilterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  handleDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contatc => contatc.id !== id),
    });
  };

  render() {
    const filterNormalize = this.state.filter.toLowerCase();
    const visibleContacst = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
    return (
      <>
        <h1>PHONEBOOK</h1>
        <ContactForm handleAddContact={this.handleAddContactClick} />

        <h2>CONTACTS</h2>
        <Filter
          handleFilterContact={this.handleFilterContact}
          name="filter"
          value={this.state.filter}
        />
        {/* <form>
          <label>
            Finde contact by name
            <input
              onChange={this.handleFilterContact}
              name="filter"
              type="text"
              value={this.state.filter}
            />
          </label>
        </form> */}
        <ContactList
          handleDelete={this.handleDelete}
          visibleContacst={visibleContacst}
        />
      </>
    );
  }
}

export default App;
