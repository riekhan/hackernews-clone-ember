import { helper } from '@ember/component/helper';
import moment from 'moment';

export function timeSince(params/*, hash*/) {
  const [time] = params
  console.log(params, time)
  return moment.unix(time).fromNow()
}

export default helper(timeSince);
