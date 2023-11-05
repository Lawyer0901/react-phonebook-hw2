import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleAddContactClick = e => {
    e.preventDefault();
    // console.log(this.state);
    // const obj = {
    //   name: this.state.name,
    //   number: this.state.number,
    // };
    this.props.handleAddContact(this.state);
    this.setState({ name: '', number: '' });

    // return obj;
  };
  render() {
    return (
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
    );
  }
}

export default ContactForm;
