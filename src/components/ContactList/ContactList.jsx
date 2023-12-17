import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getContacts, getFilter } from '../../redux/selector';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contactsList = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleDelete = contactId => dispatch(deleteContact(contactId));

  let normalized = filter ? filter.toLowerCase() : '';
  const visibleContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalized)
  );

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:{contact.number}
          <button
            className="form__delete"
            type="text"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
