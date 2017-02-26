let ENV = {
    apiURL: 'http://192.168.22.144',
    serverRootUrl: '/',
    moduleName: 'attendance-web',
    version: '1.0',
    environment: process.env.NODE_ENV,
    defaultLocale: 'zh',
    apiNameSpace: 'rest',
    hostEndpoint: 'attendance',
    routeRootPath: null
}

if (ENV.environment === 'develop') {
}
if (ENV.environment === 'staging') {
}
if (ENV.environment === 'production') {
}

export default ENV
