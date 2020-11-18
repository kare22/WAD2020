export default function ({ app, $axios, redirect, $store }) {
  $axios.setBaseURL('https://private-anon-a152871d21-wad20postit.apiary-mock.com/')

  //Before the request
  $axios.interceptors.request.use((config) => {
      config.headers['Cache-Control'] = `no-cache`
    return config;
  });

  //After the request
  $axios.interceptors.response.use((response) => response, (error) => {
    throw error;
  });


  $axios.onRequest(config => {
  })

}
