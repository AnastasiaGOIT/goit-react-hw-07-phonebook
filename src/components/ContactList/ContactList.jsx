import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selector';
import { deleteContactAction } from '../../redux/contacts/contactSlice';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const { contacts } = useSelector(getContacts);

  let normalized = filter ? filter.toLowerCase() : '';
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalized)
  );
  const dispatch = useDispatch();
  const deleteContact = contactId => {
    dispatch(deleteContactAction(contactId));
  };

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:{contact.number}
          <button
            className="form__delete"
            type="text"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
