'use strict'

/**
 * adonis-newrelic
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const { ServiceProvider } = require('@adonisjs/fold')

class NewRelicProvider extends ServiceProvider {
  /**
   * Register all the required providers
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this.app.singleton('Adonis/Addons/Hashids', app => {
      const Config = app.use('Adonis/Src/Config')
      const NewRelic = require('../src/NewRelic')
      return new NewRelic(Config)
    })
    this.app.alias('Adonis/Addons/NewRelic', 'NewRelic')
  }

  boot () {
    this.registerNamedTransactions()
    this.registerQueueTransactions()
  }

  _registerNamedTransactions() {
    const app = this.app

    if (Config.get('newrelic.autoNameTransactions')) {

    }
  }
}

module.exports = HashidsProvider
