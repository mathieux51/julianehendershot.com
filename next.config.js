const LANGUAGES = ['en', 'de', 'fr']

module.exports = {
  // target: 'serverless',
  exportPathMap(defaultPathMap) {
    const pathMap = {}

    Object.entries(defaultPathMap).forEach(([key, value]) => {
      pathMap[key] = value

      LANGUAGES.forEach(language => {
        pathMap[`/${language}${key}`] = { ...value, query: { language } }
      })
    })
    console.log('defaultPathMap', defaultPathMap)
    console.log('pathMap', pathMap)
    return pathMap
  }
}
