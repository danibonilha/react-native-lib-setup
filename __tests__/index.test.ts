import { run } from "../src";
import { logger } from "../src/helpers/logger";
import { strings } from "../src/helpers/strings";

describe('run function', () => {
  it('checks run function', () => {
    const loggerBanner = jest.spyOn(logger, 'banner');
    const loggerError = jest.spyOn(logger, 'error');

    run()


    expect(loggerBanner).toHaveBeenCalledTimes(1)
    expect(loggerError).toHaveBeenCalledWith(strings.nonRNProjectError('ios'))
  });

});
