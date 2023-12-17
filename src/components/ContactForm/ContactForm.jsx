import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onInputChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'phone') {
      setPhone(target.value);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact({ name, phone }));
    form.reset();
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

      <label htmlFor="phone">Number</label>
      <input
        className={css.form__input}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
        value={phone}
        onChange={onInputChange}
      />

      <button className={css.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
