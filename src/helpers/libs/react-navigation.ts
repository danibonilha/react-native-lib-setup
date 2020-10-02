import execa from "execa";
import ora from "ora";
import fs from "fs";

import { Cmd } from "../enums";
import { logger } from "../logger";
import { strings } from "../strings";

const packages = [
  "@react-navigation/native",
  "react-native-reanimated",
  "react-native-gesture-handler",
  "react-native-screens",
  "react-native-safe-area-context",
  "@react-native-community/masked-view",
  "@react-navigation/stack"
]

enum FilesToWrite {
  index = 'index.js'
}

const filesToWriteContent = {
  [FilesToWrite.index]: `*/\nimport 'react-native-gesture-handler';`
}

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

const writeFile = (file: FilesToWrite, text: string) => {
  fs.writeFile(file, text, (err) => {
    if (err) return console.log(err);
    console.log(`${text} > ${file}`);
  });
}

const readWriteSync = (file: FilesToWrite, text: string) => {
  const data = fs.readFileSync(file, 'utf-8');

  console.log(data)
  const newValue = data.replace('([*]/\\n.*)', text);

  fs.writeFileSync(file, newValue, 'utf-8');

  console.log('readFileSync complete');
}


const editFiles = async () => {

  const file = FilesToWrite.index

  readWriteSync(file, filesToWriteContent[file])


  // const spinner = ora(strings.loadingDeps)
  // spinner.start();
  // try {
  //   await execa(Cmd.yarn, [Cmd.add, ...packages])
  //   await execa(Cmd.npx, [Cmd.pod, Cmd.ios])
  // } catch (e) {
  //   logger.error(e)

  // } finally {
  //   spinner.stop();
  // }
}

const setupReactNavigation = (): void => {
  // installDeps()
  editFiles()
}


export {
  setupReactNavigation

}