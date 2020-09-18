import path from 'path'
import fs, { PathLike } from 'fs'

const getCurrentDirectoryBase = (): string => path.basename(process.cwd())

const directoryExists = (filePath: PathLike): boolean => fs.existsSync(filePath)

export {
  getCurrentDirectoryBase,
  directoryExists
}