import { filterDataByGender, anotherExample } from '../src/data.js';


describe('filterByGender', () => {
  it('is a function', () => {
    expect(typeof filterDataByGender).toBe('function');

  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
