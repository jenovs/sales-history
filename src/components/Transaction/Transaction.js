import React from 'react';
import PropTypes from 'prop-types';

import { Money, Payment, Status, Time, Wrapper } from './styled';

import { ReactComponent as Card } from './credit-card.svg';
import { ReactComponent as Cash } from './money.svg';

const propTypes = {
  amount: PropTypes.number.isRequired,
  paidBy: PropTypes.oneOf(['card', 'cash']).isRequired,
  status: PropTypes.oneOf(['successful', 'failed', 'refunded']).isRequired,
  timestamp: PropTypes.number.isRequired,
};

const parseTime = ts => {
  const date = new Date(ts);
  return [date.getUTCHours(), String(date.getMinutes()).padStart(2, '0')].join(
    ':'
  );
};

const toCurrency = num => (num / 100).toFixed(2);

const Transaction = ({ amount, paidBy, status, timestamp }) => {
  return (
    <Wrapper>
      <Time>{parseTime(timestamp)}</Time>
      <Status status={status}>{status}</Status>
      <Money status={status}>
        {status === 'refunded' && '-'}
        {toCurrency(amount)}
        <span>&nbsp;€</span>
      </Money>
      <Payment>
        {paidBy === 'card' ? (
          <Card width="24" height="24" fill="gray" role="img" />
        ) : (
          <Cash width="24" height="24" fill="#444" role="img" />
        )}
      </Payment>
    </Wrapper>
  );
};

Transaction.propTypes = propTypes;

export default Transaction;
