import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selector';
import { onInputChangeAction } from '../../redux/filter/filterSlice';
import css from './filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    dispatch(onInputChangeAction(target.value));
  };

  return (
    <div className={css.container}>
      <label>Find contacts by name</label>
      <input
        className={css.form__input}
        type="text"
        name="filter"
        value={filter}
        onChange={onInputChange}
      ></input>
    </div>
  );
};
