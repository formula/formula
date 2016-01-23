import * as FF from './index'
import {COMPILE} from './COMPILE'

if (window) {

  // This is a sham that makes Object.freeze work (insecurely) in ES3 environments
  // ES5 15.2.3.9
  // http://es5.github.com/#x15.2.3.9
  if (!Object.freeze) {
      Object.freeze = function freeze(object) {
          if (Object(object) !== object) {
              throw new TypeError('Object.freeze can only be called on Objects.');
          }
          // this is misleading and breaks feature-detection, but
          // allows "securable" code to "gracefully" degrade to working
          // but insecure code.
          return object;
      };
  }

  FF.COMPILE = COMPILE

  window.FunctionFoundry = Object.freeze(FF);
}
