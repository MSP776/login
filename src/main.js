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
	Toast,
	Swipe,
	SwipeItem,
	Image as VanImage,
	Collapse,
	CollapseItem,
	Tab,
	Tabs,
	Dialog 
} from 'vant';


// 2. 引入组件样式
import 'vant/lib/index.css';
import 'vant/es/dialog/style';

const app = createApp(App);
app.config.globalProperties.$toast = Toast;
app.use(Button)
	.use(Toast)
	.use(store)
	.use(router)
	.use(Swipe)
	.use(SwipeItem)
	.use(VanImage)
	.use(Collapse)
	.use(CollapseItem)
	.use(Tab)
	.use(Tabs)
	.use(Dialog)
	.mount('#app')

// createApp(App).use(store).use(router).mount('#app')
