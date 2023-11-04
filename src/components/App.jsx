import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange(e) {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    // this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <h1>PHONEBOOK</h1>

        <form>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Number
            <input
              type="tel"
              value={this.state.number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="button">Add Contact</button>
        </form>

        <h2>CONTACTS</h2>
        <form>
          <label>
            Finde contact by name
            <input name={this.state.filter} type="text" />
          </label>
        </form>
        <ul>
          {this.state.contacts.map(contact => {
            return (
              <li key={contact.id}>
                <span>{contact.name}</span> <span>{contact.number}</span>
                <button>Delete</button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
