const ContactList = ({ visibleContacst, handleDelete }) => {
  return (
    <ul>
      {visibleContacst.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}</span> <span>{contact.number}</span>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
