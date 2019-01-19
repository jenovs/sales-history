import React from 'react';
// import PropTypes from 'prop-types';

import Button from '../Button';
import { Group, H2, Overlay, Wrapper } from './styled';
import Loading from '../Loading';

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

export default Filters;
