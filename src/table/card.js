import devboard from 'devboard';
import React from 'react';
import Table, { Column, Cell } from './index.js';

const devcard = devboard.ns('table');

let data = [
  {
    id: 4,
    name: 'List Item #4'
  },
  {
    id: 99,
    name: 'List Item #99'
  }
];

devcard(
  'Basic Table',
  'Table doesn\'t specify any styles, it just build tables.',
  <Table
    rowCount={data.length}
    rowStyle={{}}
    headerStyle={{}}>
    <Column
      header={<Cell>id</Cell>}
      cell={rowIndex =>
        <Cell>
          {data[rowIndex].id}
        </Cell>
      }/>
    <Column
      header={<Cell>name</Cell>}
      cell={rowIndex =>
        <Cell>
          {data[rowIndex].name}
        </Cell>
      }/>
  </Table>
);
