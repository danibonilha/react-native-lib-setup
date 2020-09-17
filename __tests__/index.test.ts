import { run } from "../src";

describe('run function', () => {
  it('checks run function', () => {
    const spy = jest.spyOn(console, 'log');

    run()

    expect(spy).toHaveBeenCalledWith('run');
  });
});
