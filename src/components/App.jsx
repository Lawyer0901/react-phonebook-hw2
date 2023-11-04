import { Component } from 'react';
import { nanoid } from 'nanoid';

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

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleAddContactClick = e => {
    e.preventDefault();
    console.log(this.state);
    const obj = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    console.log(obj);
    this.setState(prevState => {
      console.log(prevState.name);
      // if (prevState.name === obj.name) {
      //   return alert('Already exist contact');
      // } else
      return { contacts: [...prevState.contacts, obj] };
    });
    this.setState({ name: '', number: '' });
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

        <form onSubmit={this.handleAddContactClick}>
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
          <button type="sunmit">Add Contact</button>
        </form>

        <h2>CONTACTS</h2>
        <form>
          <label>
            Finde contact by name
            <input
              onChange={this.handleFilterContact}
              name="filter"
              type="text"
              value={this.state.filter}
            />
          </label>
        </form>
        <ul>
          {visibleContacst.map(contact => {
            return (
              <li key={contact.id}>
                <span>{contact.name}</span> <span>{contact.number}</span>
                <button onClick={() => this.handleDelete(contact.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
