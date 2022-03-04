import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, path } from "path";
import { loadEnv } from 'vite'

function pathResolve(dir) {
    return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd()) };
    return defineConfig({
        plugins: [vue()],
        resolve: {
            alias: {
                "/@": resolve(__dirname, "./src"),
            },
        },
        base: "/",
        server: {
            port: process.env.VITE_PORT,
            https: true,
            proxy: {
                // with options
                '/api': {
                    //target: 'http://192.168.1.153:8088',
                    target: 'https://localhost:44377',
                    changeOrigin: true,
                    ws: true,
                    secure: false,
                    // rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },
        build: {
            target: "modules",
            outDir: "dist",
            assetsDir: "assets",
            sourcemap: true,
        },
        define: {
            // setting vue-i18-next
            // Suppress warning

        },
        optimizeDeps: {
            entries: [],
            exclude: [],
            include: ["lodash", "@ant-design/icons-vue", "echarts/dist/echarts"],
        },
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        hack: `true; @import "./src/theme/theme.less";`,
                    },
                    javascriptEnabled: true,
                },
            },
        },
    })
};