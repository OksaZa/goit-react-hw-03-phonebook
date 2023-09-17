import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const localContacs = JSON.parse(localStorage.getItem('contacts'));
    if (localContacs) {
      this.setState({ contacts: localContacs });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  onSubmitForm = data => {
    console.log(data);
    const isAlreadyExist = this.state.contacts.find(
      el => el.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    );
    if (isAlreadyExist) return alert('Already Exist');

    const newContacts = {
      ...data,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [newContacts, ...prev.contacts],
    }));
  };

  onChangeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteresContacs = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.getFilteresContacs();
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitForm} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
        <ContactList
          contacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
