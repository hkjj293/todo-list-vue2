import * as components from '@/components/index';

// Copied and modified from PROformajs Vue, see source https://gitlab.com/openclinical/proformajs-vue/-/blob/main/src/entry.esm.js
const install = function installProformajsVue(Vue) {
    Object.entries(components).forEach(([componentName, component]) => {
        // next line altered from the standard sfc-init to respect component name
        Vue.component(component.name || componentName, component);

        // v-focus directive on dynamic inputs, see https://vuejs.org/v2/guide/custom-directive.html
        Vue.directive('focus', {
            inserted: function (el) {
                Vue.nextTick(function () {
                    el.focus()
                })
            }
        })
    });
};

// Create module definition for Vue.use()
export default install;
