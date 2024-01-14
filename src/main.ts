import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// 認証の状態をローカルストレージから取得
const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

// 認証ガードを追加
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        // 認証が必要でログインしていない場合、ログインページにリダイレクト
        next('/login');
    } else {
        next();
    }
})
