import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'stefkors.com-settings',
    storage: window.localStorage
  }).plugin(store);
}
