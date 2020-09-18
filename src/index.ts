import minimist from "minimist";

import { setupReactNavigation } from "./helpers/libs/react-navigation";
import { Libraries, RelativePlatormPath } from "./helpers/enums";
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
  const argv = minimist(process.argv.slice(2))
  const arg = argv._[0]

  logger.banner()

  checkRNProject()

  if (arg == Libraries.navigation) {
    setupReactNavigation()
  }

}

run()