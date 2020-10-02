// ref https://qiita.com/itouuuuuuuuu/items/4132e3b7ddf2cbf02442
export let axios;

export default ({ store, $axios }) => {
  $axios.defaults.baseURL = 'http://localhost:4001/';
  axios = $axios;
};
