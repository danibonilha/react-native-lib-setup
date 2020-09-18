import { RelativePlatormPath } from "./helpers/enums";
import { directoryExists } from "./helpers/files";
import { logger } from "./helpers/logger";
import { strings } from "./helpers/strings";


const checkRNProject = (): void => {
  Object.keys(RelativePlatormPath).map((path) => {
    if (!directoryExists(path)) {
      logger.error(strings.nonRNProjectError(path))
      throw Error()
    }
  });
}


export const run = (): void => {
  console.log('run')

  logger.banner()
  checkRNProject()
}

run()