import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),

    // 映射关系 path -> component 最好是路由懒加载
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: () => import("@/views/home/Home.vue")
        },
        {
            path: "/message",
            component: () => import("@/views/message/Message.vue")
        },
        {
            path: "/favor",
            component: () => import("@/views/favor/Favor.vue")
        },
        {
            path: "/order",
            component: () => import("@/views/order/Order.vue")
        },
        {
            path: "/city",
            component: () => import("@/views/city/City.vue"),
            meta: {
                hideTabBar: true
            }
        },
        {
            path: "/search",
            component: () => import("@/views/search/Search.vue"),
            meta: {
                hideTabBar: true
            }
        }
    ]

})

export default router