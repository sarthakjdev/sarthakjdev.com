import Router from "next/router"
import NProgress from "nprogress"

Router.events.on('routeChangeStart', ()=> NProgress.start())
Router.events.on('routerChangeComplete', ()=> NProgress.done())
Router.events.on('routerChnageError', ()=> NProgress.done())