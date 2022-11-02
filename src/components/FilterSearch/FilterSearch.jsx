import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';
import PropTypes from 'prop-types';
import { LabelFilter, FilterBox, InputFilter } from './FilterSearch.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const searchText = e.target.value;
    dispatch(filterContacts(searchText));
  };

  return (
    <FilterBox>
      <LabelFilter htmlFor="">Find contacts by name</LabelFilter>
      <InputFilter type="text" onChange={handleChange} />
    </FilterBox>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
