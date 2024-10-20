import { createStore, createLogger } from "vuex";
import ServiceModule from "./modules/ServiceModule";
import ImageModule from "./modules/ImageModule";

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        ServiceModule,
        ImageModule
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
