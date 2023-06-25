import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';
import { selectFilter } from 'redux/contacts/selectors';

import { TextField } from '@mui/material';

export const ContactsFilter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <TextField
      type="text"
      value={filterValue}
      onChange={changeFilter}
      label="Find contacts by name"
      size="small"
    />
  );
};
