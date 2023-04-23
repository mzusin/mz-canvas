import { bbb } from '../src/core/first';

describe('spec', () => {

  it('that succeeds', () => {
    const aaa = bbb();
    console.log('aaa', aaa)
    expect(1).toBe(1)
  })
});