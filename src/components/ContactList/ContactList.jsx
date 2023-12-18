import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getContacts } from '../../redux/selector';
import css from './ContactList.module.css';
import { visibleContacts } from '../../redux/selector';

export const ContactList = () => {
  // const filter = useSelector(getFilter);
  const contactsList = useSelector(getContacts);
  console.log(contactsList);
  const dispatch = useDispatch();
  const handleDelete = contactId => dispatch(deleteContact(contactId));

  // let normalized = filter ? filter.toLowerCase() : '';
  // const visibleContacts = contactsList.filter(
  //   contact =>
  //     contact.name &&
  //     typeof contact.name === 'string' &&
  //     contact.name.toLowerCase().includes(normalized)
  // );

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
