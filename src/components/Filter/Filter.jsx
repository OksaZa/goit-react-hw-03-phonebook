import { FilterContainer } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <FilterContainer>
      <label>
        Find contacts by name:
        <input
          name="filter"
          type="text"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </FilterContainer>
  );
};
