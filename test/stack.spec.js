let Stack = require('../src/stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should have items', () => {
    expect(stack.items).toBeDefined();
  });

});