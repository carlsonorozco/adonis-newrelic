'use strict'

/**
 * adonis-newrelic
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const GE = require('@adonisjs/generic-exceptions')

class NewRelic {
  constructor (Config, Handler = new DefaultHandler()) {
    this.Config = Config
    this.Handler = Handler

    if (Config.get('throwIfNotInstalled')) {
      // throw GE.RuntimeException.
    }

  }

  setAppName (name, license, $xmit = false) {

  }

  noticeError (message, exception = null) {

  }

  nameTransaction (name) {

  }

  endOfTransaction () {

  }

  endTransaction (ignore = false) {

  }

  startTransaction (name, license) {

  }

  ignoreTransaction () {

  }

  ignoreApdex() {

  }

  backgroundJob (flag = true) {

  }

  captureParams (enable = true) {

  }

  customMetric (name, value) {

  }

  addCustomParameter (key, value) {

  }

  addCustomTracer (functionName) {

  }

  getBrowserTimingHeader (flag = true) {

  }

  getBrowserTimingFooter (flag = true) {

  }

  disableAutoRUM () {

  }

  setUserAttributes (user = '', account = '', product = '') {

  }

  recordCustomEvent (name, attributes) {

  }

  _call (method, params = []) {
    this.handler.handle(method, params)
  }
}
