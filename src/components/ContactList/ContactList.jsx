import { List } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </List>
  );
};
