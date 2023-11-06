import { List, Items, Button } from './ContactList.styled';

const ContactList = ({ visibleContacst, handleDelete }) => {
  return (
    <List>
      {visibleContacst.map(contact => {
        return (
          <Items key={contact.id}>
            <span>{contact.name}</span> <span>{contact.number}</span>
            <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
          </Items>
        );
      })}
    </List>
  );
};

export default ContactList;
