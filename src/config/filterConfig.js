import { enums } from '../utils';

const filterGroupLabels = {
  PAYMENT_TYPE: 'Payment type',
  STATUS: 'Status',
};

const filterGroupNames = {
  PAYMENT_TYPE: 'paidBy',
  STATUS: 'status',
};

export default [
  {
    name: enums.type.CARD,
    label: 'Card',
    filterGroupLabel: filterGroupLabels.PAYMENT_TYPE,
    filterGroupName: filterGroupNames.PAYMENT_TYPE,
  },
  {
    name: enums.type.CASH,
    label: 'Cash',
    filterGroupLabel: filterGroupLabels.PAYMENT_TYPE,
    filterGroupName: filterGroupNames.PAYMENT_TYPE,
  },
  {
    name: enums.status.S,
    label: 'Successful',
    filterGroupLabel: filterGroupLabels.STATUS,
    filterGroupName: filterGroupNames.STATUS,
  },
  {
    name: enums.status.F,
    label: 'Failed',
    filterGroupLabel: filterGroupLabels.STATUS,
    filterGroupName: filterGroupNames.STATUS,
  },
  {
    name: enums.status.R,
    label: 'Refunded',
    filterGroupLabel: filterGroupLabels.STATUS,
    filterGroupName: filterGroupNames.STATUS,
  },
];
