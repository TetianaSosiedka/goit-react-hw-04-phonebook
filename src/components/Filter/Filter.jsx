import PropTypes from 'prop-types';

import { Input } from './Filter.styled';

const Filter = ({ onChangeFilter, value }) => {
  return (
    <Input
      onChange={onChangeFilter}
      type="text"
      name="filter"
      value={value}
      placeholder="Filter"
    ></Input>
  );
};
Filter.prototype = {
  onChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Filter;
