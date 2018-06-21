'use strict'

/*
|--------------------------------------------------------------------------
| NewRelic Configuaration
|--------------------------------------------------------------------------
|
| Here we define the configuration for hashids. A single application
| can make use of multiple hashids connections using the hashids provider.
|
*/

const Env = use('Env')

module.exports = {

  appName: [],
  licenseKey: '',
  logging: {
    level: 'info'
  },
  allowAllHeaders: true,
  attributes: {
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
      'response.headers.cookie',
      'response.headers.authorization',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*'
    ]
  },

  autoNameTransaction: Env.get('NEWRELIC_AUTO_NAME_TRANSACTION', true),
  autoNameJobs: Env.get('NEWRELIC_AUTO_NAME_JOB', true),
  nameProvider: Env.get('NEWRELIC_NAME_PROVIDER', '{uri} {route}')
  jobNameProvider: Env.get('NEWRELIC_JOB_NAME_PROVIDER', '{class}'),
  throwIfNotInstalled: Env.get('NEWRELIC_THROW_IF_NOT_INSTALLED', false)

}
