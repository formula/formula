import isnumber from './isnumber'
import error from './error'
import numbervalue from './numbervalue'
import fact from './fact'

//
export default function combin(number, number_chosen) {
  number = numbervalue(number);
  number_chosen = numbervalue(number_chosen);
  // if (utils.isAnyError(number, number_chosen)) {
  //   return error.value;
  // }
  return fact(number) / (fact(number_chosen) * fact(number - number_chosen));
};
