import devboard from 'devboard';
import React from 'react';
import Select, { Creatable } from './index.js';

const devcard = devboard.ns('typeahead');

devcard(
  'Single Select with no selected value',
  <div style={{ width: '200px' }}>
    <Select
      value={null}
      options={[
        { value: 1, label: 'One' },
        { value: 2, label: 'Two' },
        { value: 3, label: 'Three' },
        { value: 4, label: 'Four' }
      ]}
    />
  </div>
);

devcard(
  'Single Select with a selected value',
  <div style={{ width: '200px' }}>
    <Select
      value={1}
      options={[
        { value: 1, label: 'One' },
        { value: 2, label: 'Two' },
        { value: 3, label: 'Three' },
        { value: 4, label: 'Four' }
      ]}
    />
  </div>
);

devcard(
  'Single Select with creatableentries',
  <div style={{ width: '200px' }}>
    <Creatable
      value={null}
      options={[
        { value: 1, label: 'One' },
        { value: 2, label: 'Two' },
        { value: 3, label: 'Three' },
        { value: 4, label: 'Four' }
      ]}
    />
  </div>
);

devcard(
  'Multi Select with no selected value',
  <div style={{ width: '200px' }}>
    <Select
      value={[]}
      multi={true}
      options={[
        { value: 1, label: 'One' },
        { value: 2, label: 'Two' },
        { value: 3, label: 'Three' },
        { value: 4, label: 'Four' }
      ]}
    />
  </div>
);

devcard(
  'Multi Select with selected values',
  <div style={{ width: '200px' }}>
    <Select
      value={[1,2]}
      multi={true}
      options={[
        { value: 1, label: 'One' },
        { value: 2, label: 'Two' },
        { value: 3, label: 'Three' },
        { value: 4, label: 'Four' }
      ]}
    />
  </div>
);

devcard(
  'Multi Select with creatablevalues',
  <div style={{ width: '200px' }}>
    <Creatable
      value={[1,2]}
      multi={true}
      options={[
        { value: 1, label: 'One' },
        { value: 2, label: 'Two' },
        { value: 3, label: 'Three' },
        { value: 4, label: 'Four' }
      ]}
    />
  </div>
);
