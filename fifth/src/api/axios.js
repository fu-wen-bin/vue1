import axios from "axios";
// import router from '../router/index.js'
//默认地址栏

// 47.93.252.92:8081
let javaAxios = axios.create({
    baseURL: 'http://192.168.136.36:8081',  //java 服务端
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

let nodeAxios = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

//响应拦截器
function setUpInterceptorsResponse(instance) {
    instance.interceptors.response.use(
        (res) => {
            if (res.status !== 200) {  // 程序错误
                // showToast('服务器异常');
                return Promise.reject(res)
            } else {
                if (res.data.status === 401) {//登录失效
                    // showToast(res.data.msg);
                    // router.push('/login');
                    return Promise.reject(res)
                }
                if (res.data.code !== 1) {  // 逻辑性错误
                    if (res.data.code === 1 && (res.data.msg === '令牌无效')) {
                        // router.push('/login');
                    }
                    // showToast(res.data.msg);
                    return Promise.reject(res)
                }
                return res.data
            }
        },
        (error)=>{
            // showToast('网络异常');
            return Promise.reject(error)
        }
    )
}
// 应用响应拦截器到两个实例
setUpInterceptorsResponse(javaAxios);
setUpInterceptorsResponse(nodeAxios);

// 请求拦截器
nodeAxios.interceptors.request.use(
    (req)=>{
        // let tokenNode = window.localStorage.getItem('tokenNode')
        // console.log('tokenNode',tokenNode);
        // if(tokenNode){
        //     req.headers.Authorization = tokenNode;
        // }
        return req
    },
    (error)=>{
        return Promise.reject(error)
    }
)

javaAxios.interceptors.request.use(
    (req)=>{
        let tokenJava = window.localStorage.getItem('tokenJava')
        console.log('tokenJava --- axios',tokenJava);
        if(tokenJava){
            req.headers.Authorization = tokenJava;
        }
        return req
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export {nodeAxios,javaAxios}