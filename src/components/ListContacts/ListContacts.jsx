import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ItemContacts } from 'components/ItemContacts/ItemContacts';

export const ListContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // console.log(contacts);
  // console.log(filter.filterValue);

  const visibleContacts = () => {
    const constNormalizedFilter = filter.filterValue.toLowerCase();

    const filterContacts = contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(constNormalizedFilter)
    );

    return filterContacts;
  };

  const getVisibleContacts = visibleContacts();

  return (
    <ul>
      {getVisibleContacts.map(({ id, name, number }) => (
        <ItemContacts key={nanoid()} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
