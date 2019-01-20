import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { Group, H2, Overlay, Wrapper } from './styled';
import Loading from '../Loading';

const propTypes = {
  filterConfig: PropTypes.array.isRequired,
  filterState: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  updateFilter: PropTypes.func.isRequired,
};

const defaultProps = {
  loading: false,
};

// eslint-disable-next-line
const Filters = ({ filterConfig, filterState, updateFilter, loading }) => {
  const filterGroups = [...new Set(filterConfig.map(f => f.filterGroupLabel))];

  return (
    <Wrapper>
      {loading && (
        <Overlay>
          <Loading />
        </Overlay>
      )}
      {filterGroups.map(group => (
        <Group key={group}>
          <H2>{group}</H2>
          {filterConfig.reduce((acc, g) => {
            if (g.filterGroupLabel === group) {
              acc.push(
                <Button
                  key={g.name}
                  onClick={() => updateFilter(g.name)}
                  inactive={!filterState[g.name]}
                >
                  {g.label}
                </Button>
              );
            }
            return acc;
          }, [])}
        </Group>
      ))}
    </Wrapper>
  );
};

Filters.propTypes = propTypes;
Filters.defaultProps = defaultProps;

export default Filters;
