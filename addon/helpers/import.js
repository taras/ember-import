import { helper } from '@ember/component/helper';

export function importHelper([pathName], /*, hash*/) {
  let [path, name = 'default'] = pathName.split('?');
  return window.require(path)[name];
}

export default helper(importHelper);
