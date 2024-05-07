const isValidURL = (url: string): boolean => {
  const urlRegex: RegExp =
    /^(?:https?|ftp):\/\/(?:\w+:{0,1}\w*@)?(?:\S+)(?::\d+)?(?:\/|\/(?:[\w#!:.?+=&%@!\-\/]))?$/
  return urlRegex.test(url)
}

export default isValidURL
