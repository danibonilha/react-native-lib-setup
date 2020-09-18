import execa from "execa";
import ora from "ora";

import { Cmd } from "../enums";
import { logger } from "../logger";
import { strings } from "../strings";

const packages = [
  "@react-navigation/native",
  "react-native-reanimated",
  "react-native-gesture-handler",
  "react-native-screens",
  "react-native-safe-area-context",
  "@react-native-community/masked-view"
]


const installDeps = async () => {
  const spinner = ora(strings.loadingDeps)
  spinner.start();
  try {
    await execa(Cmd.yarn, [Cmd.add, ...packages])
    await execa(Cmd.npx, [Cmd.pod, Cmd.ios])
  } catch (e) {
    logger.error(e)

  } finally {
    spinner.stop();
  }
}

const setupReactNavigation = (): void => {
  installDeps()
}


export {
  setupReactNavigation
}