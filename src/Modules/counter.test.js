import counter from './counter.js';

describe('Test the count function', () => {
  test('No items', () => {
    const arr = [];
    let x = counter(arr);
    expect(x).toBe(0);
  });

  test('6 items', () => {
    const arr = [{ idMeal: '52791' }, { idMeal: '52791' }, { idMeal: '52791' }, { idMeal: '52791' }, { idMeal: '52791' }, { idMeal: '52791' }];
    expect(counter(arr)).toBe(6);
  });
});