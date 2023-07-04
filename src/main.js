import 'lib-flexible/flexible'
import 'vant/es/toast/style';
import {
	createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/es/dialog/style';

// 1. 引入你需要的组件
import {
	Button,
	Toast
} from 'vant';


// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App);
app.use(Button)
	.use(Toast)
	.use(store)
	.use(router)
	.mount('#app')

// createApp(App).use(store).use(router).mount('#app')
