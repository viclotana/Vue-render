import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('Hello', {
  render(createElement){
    // return createElement('p', this.greetings + this.car);
    return createElement('ul', 
      [createElement('li',[createElement('p', 'I am a nested list item')])]);
  },
  data(){
    return {
      greetings: 'The paragraph text stays here'
    }
  },
  props: ['car']
})

new Vue({
  render: h => h(App),
}).$mount('#app')

