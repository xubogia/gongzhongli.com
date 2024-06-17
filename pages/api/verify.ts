import {GetServerSideProps} from 'next';
import axios from "axios";

const getServerSideProps: GetServerSideProps = async (context) => {
    // 在这里进行登录验证的逻辑判断
    let isLogin = false;

    // 从请求的 Cookie 中获取令牌
    let {token} :any= context.req.cookies;

    // 发送登录验证请求到服务器，并在请求头中包含令牌
    const response= await  axios.post('http://localhost:3000/api/proxy',{
        url:'/login-checkToken',
        method:'post',
        data: token
    })

    token=response.data;

    if (token=='') {
        token=null
    }else{
        isLogin = true;
    }
    console.log('isLoggedIn', isLogin);
    // if (!isLogin) {
    //     // 如果用户未登录，则重定向到登录页
    //     return {
    //         redirect: {
    //             destination: '/login',
    //             permanent: false,
    //         },
    //     };
    // }

    // 用户已登录，继续渲染页面内容
    return {
        props: {id:token},
    };
};
export default getServerSideProps;
