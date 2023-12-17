import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getContacts, getFilter } from '../../redux/selector';
// import { deleteContactAction } from '../../redux/contacts/contactSlice';

export const ContactList = ({ contacts }) => {
  const filter = useSelector(getFilter);
  const contactsList = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contacts.id));

  let normalized = filter ? filter.toLowerCase() : '';
  const visibleContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalized)
  );

  // const deleteContact = contactId => {
  //   dispatch(deleteContactAction(contactId));
  // };

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:{contact.number}
          <button className="form__delete" type="text" onClick={handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};