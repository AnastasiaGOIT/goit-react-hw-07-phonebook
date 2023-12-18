import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getContacts, selectVisibleContacts } from '../../redux/selector';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contactsList = useSelector(getContacts);
  console.log(contactsList);
  const dispatch = useDispatch();
  const handleDelete = contactId => dispatch(deleteContact(contactId));

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            className={css.form__delete}
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
