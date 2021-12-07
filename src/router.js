import Vue from "vue";
import VueRouter from "vue-router";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home";
import Turn from "./views/Turn";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/turn", component: Turn },
        {
            path: "*",
            component: ErrorPage
        }
    ]
});

export default router;
