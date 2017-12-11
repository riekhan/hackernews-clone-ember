import { helper } from '@ember/component/helper';

export function formatDomain(params/*, hash*/) {
  const [url] = params
  if(!url){return null}
  let hostname
  if (url.indexOf("://") > -1) {
      hostname = url.split('/')[2];
  }
  else {
      hostname = url.split('/')[0];
  }
  return hostname;
}

export default helper(formatDomain);
