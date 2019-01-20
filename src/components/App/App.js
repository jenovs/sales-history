import React, { Component } from 'react';

import Button from '../Button';
import Filters from '../Filters';
import Loading from '../Loading';
import Transaction from '../Transaction';

import { Day, Title, TitleText, Transactions, Wrapper } from './styled';

import {
  calcTotalSales,
  createFilterObj,
  expandFilterConfig,
  groupByDate,
} from '../../utils';
import { axiosFetch, filterConfig } from '../../config';

class App extends Component {
  state = {
    data: [],
    ...expandFilterConfig(filterConfig),
    limit: 20,
    loading: -1,
  };

  componentDidMount() {
    this.fetchData();
  }

  updateFilter = key => {
    this.setState(
      ({ filters, loading }) => ({
        filters: { ...filters, [key]: !filters[key] },
        limit: 20,
        loading: loading + 1,
      }),
      this.fetchData
    );
  };

  fetchData = () => {
    const { filters, limit } = this.state;
    const filter = createFilterObj(filters, filterConfig);

    axiosFetch
      .post('/', { filter, limit })
      .then(res => {
        this.setState(({ loading }) => ({
          ...res.data,
          loading: loading <= 0 ? 0 : loading - 1,
        }));
      })
      .catch(e => {
        this.setState({ loading: 0 });
        console.log(e);
      });
  };

  fetchMore = () => {
    this.setState(
      ({ limit, loading }) => ({
        limit: limit + 20,
        loading: loading + 1,
      }),
      this.fetchData
    );
  };

  render() {
    const { data, filters, loading, total } = this.state;
    const groupedData = groupByDate(data);
    const dateKeys = Object.keys(groupedData);

    const initLoad = loading === -1;

    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Sales History</h1>
        <Wrapper loading={loading}>
          <Filters
            filterConfig={filterConfig}
            filterState={filters}
            loading={loading > 0}
            updateFilter={this.updateFilter}
          />
          {/* eslint-disable-next-line no-nested-ternary */}
          {initLoad ? (
            <Transactions style={{ fontSize: '5rem', opacity: 0.5 }}>
              <Loading />
            </Transactions>
          ) : !data.length ? (
            <Transactions style={{ fontSize: '1.5rem' }}>
              No data match your filter.
            </Transactions>
          ) : (
            <Transactions>
              {dateKeys.map(date => (
                <Day key={date}>
                  <Title>
                    <TitleText>
                      {date
                        .split('/')
                        .reverse()
                        .join('/')}
                    </TitleText>
                    <TitleText>
                      {calcTotalSales(groupedData[date])}&nbsp;€
                    </TitleText>
                  </Title>
                  {groupedData[date].map(d => (
                    <Transaction
                      key={d.id}
                      amount={d.amount}
                      paidBy={d.paidBy}
                      status={d.status}
                      timestamp={d.timestamp}
                    />
                  ))}
                </Day>
              ))}
              {total > data.length && (
                <Button onClick={this.fetchMore} width="150">
                  {loading ? 'Loading...' : 'Load More'}
                </Button>
              )}
            </Transactions>
          )}
        </Wrapper>
      </>
    );
  }
}

export default App;
