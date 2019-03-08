import test from 'tape-catch';
import { addQa } from './data-qa';

test('data-qa', t => {
  const noProps = addQa('SG_toggle');
  t.equal(noProps, 'SG_toggle', 'should handle no props');

  const noDataQa = addQa('SG_toggle', { 'data-qa': undefined });
  t.equal(noDataQa, 'SG_toggle', 'should handle no data-qa prop');

  const topLevel = addQa('SG_toggle', { 'data-qa': 'toggle-app-thing' });
  t.equal(topLevel, 'toggle-app-thing SG_toggle', 'should prepend passed down data-qa selectors');

  const subElement = addQa('toggle-value', { 'data-qa': topLevel });
  t.equal(subElement, 'toggle-app-thing SG_toggle toggle-value', 'should prepend already composed data-qa selectors');

  t.end();
});
