import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 라우터
import './assets/styles/common.css';  // 공통 스타일

createApp(App)
  .use(router)  // 라우터 사용
    .mount('#app');