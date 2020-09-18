import { red, cyanBright, Chalk } from "chalk"
import figlet from "figlet"

import { strings } from "./strings"

const printChalk = (msg: string, color: Chalk) => {
  console.log(color(msg))
}

const logger = {
  error: (msg: string): void => printChalk(msg, red),
  banner: (): void => printChalk(figlet.textSync(strings.appName, { font: "ANSI Shadow" }), cyanBright)
}


export { logger }