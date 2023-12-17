import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selector';
import { addContactAction } from '../../redux/contacts/contactSlice';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  const addContact = ({ name, number }) => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = [
      ...contacts,
      {
        id: nanoid(),
        name,
        number,
      },
    ];
    dispatch(addContactAction(newContact));
  };

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className={css.form__input}
        type="text"
        name="name"
        value={name}
        required
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onInputChange}
      />

      <label htmlFor="number">Number</label>
      <input
        className={css.form__input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
        value={number}
        onChange={onInputChange}
      />

      <button className={css.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
