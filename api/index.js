import request  from "./ajax";

const questTest = () => {
  return request("test");
}

const api = {
  questTest
}

const install = (Vue) => {
  if (install.installed) return;
  install.installed = true;

  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return api
      }
    }
  })
}

export default {
  install
}
