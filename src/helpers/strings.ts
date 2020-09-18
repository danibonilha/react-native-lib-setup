
const strings = {
  appName: 'RNLIBSETUP',
  loadingDeps: 'Installing dependencies, please wait...',
  nonRNProjectError:
    (folder: string): string =>
      `${folder} project folder not found. Are you sure this is a React Native project?`,

}

export { strings }