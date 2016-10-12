/*eslint max-len: 0*/
import devboard from 'devboard';
import React from 'react';
import Tag from './index.js';

const devcard = devboard.ns('tag');

let count = 4;

devcard(
  'Closeable Tag',
  'Example of Cloesable Tag Component',
  ({ state }) =>
    <div>
      {state.deref().tags.map(obj =>
        <Tag key={obj.id} {...obj} onRemove={tag => state.swap(set('tags', filterBy(tag)))}/>
      )}
      <button onClick={() => state.swap(set('tags', obj => obj.concat({ id: count++, tag: 'New' })))}>
        Add Tag
      </button>
    </div>,
  {
    state: devboard.atom({
      tags: [
        { id: 1, tag: 'Yo' },
        { id: 2, tag: 'It' },
        { id: 3, tag: 'Stuff' }
      ]
    })
  }
);

const filterBy = id => obj =>
  obj.filter(item => item.id !== id);

const set = (key, val) => {
  return obj => Object.assign(
    {}, obj,
    { [key]: (typeof val === 'function') ? val(obj[key]) : val }
  );
};


devcard(
  'Tag',
  'Example of uncloseable Tag Component',
  ({ state }) =>
    <div>
      {state.deref().tags.map(obj =>
        <Tag key={'33' + obj.id} {...obj}/>
      )}
    </div>,
  {
    state: devboard.atom({
      tags: [
        { id: 5, tag: 'Yo' },
        { id: 6, tag: 'It' },
        { id: 7, tag: 'Stuff' }
      ]
    })
  }
);