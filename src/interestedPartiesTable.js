import React from 'react';
import MUIDataTable from 'mui-datatables';

const tblIP = require('./interestedParties.json');

const columns = [
  {
    name: 'Name',
    field: 'Name'
  },
  {
    name: 'Company',
    field: 'Company'
  },
  {
    name: 'Contact Type',
    field: 'Contact Type'
  }
];

const options = {
  filterType: 'multiselect',
  responsive: 'scroll',
  selectableRows: 'false',
  size: 'small'
};

const IPTable = props => {
  return (
    <MUIDataTable
      title={'Lewisburg Auction - Interested Parties'}
      data={tblIP}
      columns={columns}
      options={options}
    />
  );
};

export default IPTable;
