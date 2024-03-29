//component import starts
import { home } from "./components/home.js";
import { decks } from "./components/decks.js";
import { cards } from "./components/cards.js";
import { login } from "./components/login.js";
import { register } from "./components/register.js";
import { review } from "./components/review.js";
import { export_csv } from "./components/export_csv.js";

// routing code starts
const routes = [
    { path: "/", component: home },
    { path: "/decks", component: decks },
    { path: "/cards", component: cards },
    { path: "/review", component: review },
    { path: "/login", component:login},
    { path : "/register", component:register},
    { path : "/export", component:export_csv}
];
const router = new VueRouter({
    routes: routes
});

// vue instance starts
const app=new Vue({
    el: "#vue-app",
    data:{
        loginStatus:false
    },
    watch:{
        // If clicked on logout loginStatus will become false and
        // after login, loginStatus will become true 
        loginStatus(){
            localStorage.setItem("loginStatus",this.loginStatus)
            if(this.loginStatus==false){
                window.location.replace("/#/login")
            }
        }
    },
    methods:{
        logout(){
            this.loginStatus=false
            localStorage.clear()
        }
    },
    router: router,
    mounted() {
        
         //after loading and mounting, take value from localStorage and put in vue data
        if (localStorage.loginStatus) {
            this.loginStatus = JSON.parse(localStorage.loginStatus)
        }
        if(this.loginStatus==false){
            window.location.replace("/#/login")
        }
        if(localStorage.decks){
            localStorage.removeItem("decks")
        }
    }

});
