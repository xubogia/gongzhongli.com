import Logo from '@/asset/svg/logo.svg'
import LoginSuccess from '@/asset/svg/loginSuccess.svg'
import Avatar from '@/asset/svg/avatar.svg'
import Image from "next/image";
import {useEffect, useState} from "react";
import axios from "axios";
function Header({id}: { id: any }) {
    const [loginStatus, setLoginStatus] = useState(0);
    const [login, setLogin] = useState(false);
    const [inputStatus, setInputStatus] = useState(0);
    const [codeError, setCodeError] = useState(false);
    const [message,setMessage]=useState(false);
    const [loginUrl,setLoginUrl]=useState(null)
    const [userData,setUserData]=useState(null)

    useEffect(() => {
        console.log(id)
        if (id) {
            setLogin(true)
            let userDataJSON=localStorage.getItem('userData');
            if(userDataJSON!=null){
                const userDataTemp=JSON.parse(userDataJSON)
                setUserData(userDataTemp);
            }

        }
    }, [id])
    const toLogin = () => {
        setLoginStatus(1)
    }

    useEffect(()=>{
        if(loginStatus==1){
            axios.post('/api/proxy',{
                url:'/login-qrcode',
                method:'get',
            }).then(res=>{
                console.log(res.data)
                setLoginUrl(res.data)
            })
        }

    },[loginStatus])


    useEffect(() => {
        if (loginUrl) {
            const interval = setInterval(() => {
                axios.post('/api/proxy', {
                    url:'/login-check-qr-status',
                    method:'post',
                    data:
                        loginUrl.qrcodeId
                })
                    .then(response => {
                        console.log(response.data)

                        if(response.data.status=='AUTHORIZED'){
                            loginSuccess(response.data)
                            clearInterval(interval)
                        }
                    })
                    .catch(error => {
                        console.error('Error checking QR status:', error);
                    });
            }, 3000); // 每3秒检查一次

            return () => clearInterval(interval); // 清除interval
        }
    }, [loginUrl]);

    const  loginSuccess=(data: any)=> {
        setUserData(data.briefUserInfo)
        localStorage.setItem('userData',JSON.stringify(data.briefUserInfo))
        axios.post('/api/proxy', {
            url: '/login-get-token',
            method: 'post',
            data: data.ticket,
        }).then(res=>{
            document.cookie = `token=${res.data.data.access_token}; path=/`;
            setLoginStatus(3)
        })
    }

    const confirmCode = (event: any) => {
        event.preventDefault();
        const {code} = event.target.elements;
        console.log(code.value)
        if (code.value.length < 10) {
            setCodeError(true)
        } else {
            setCodeError(false);
            setLoginStatus(3)
        }
    }

    const confirmLogin=()=>{
        setLoginStatus(4);
        window.location.reload()
    }

    const logout=()=>{
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.reload()
    }
    return (
        <>
            <div className={'w-full px-[360px] text-white py-2 flex justify-between items-center'}>
                <Image src={Logo} alt={'LOGO'}/>
                {
                    userData ? <>
                            <div className={'flex items-center relative'}>
                                <div className={'login-success-block1 text-[12px] flex items-center justify-center mr-3 w-[48px] h-[22px]'}>
                                    创始版
                                </div>
                                <div onClick={()=>setMessage(!message)}>
                                    <img className={'w-[36px] h-[36px]'} src={userData.photo} alt={'Avatar'} />
                                </div>
                                {
                                    message&&<div className={'w-[220px] h-[256px] bg-[#22242a] absolute right-0 top-[44px] rounded-lg flex flex-col items-center py-3 '}>
                                        <div className={''}>
                                            <div className={'login-success-block2 relative flex flex-col items-center'}>
                                                <div className={'login-success-block1 text-[6px] w-[32px] h-[12px] flex' +
                                                    ' items-center justify-center mr-3 absolute right-0 top-1 '}>
                                                    创始版
                                                </div>
                                                <Image className={'mt-3'} src={Avatar} alt={'Avatar'} width={36} height={36}/>
                                                <div className={'text-[14px] font-[600] text-white mt-2'}>
                                                    {userData.displayName}
                                                </div>
                                                <div className={'text-[12px] text-white opacity-40 mt-2'}>
                                                    深圳大学创新创业中心
                                                </div>
                                                <div className={'text-[12px] text-white opacity-40 mt-2'}>
                                                    UI成员
                                                </div>
                                            </div>
                                            <div className={'mt-2 h-[40px] flex items-center login-success-block3 px-2 rounded-lg'}>
                                                <button>编辑资料</button>
                                            </div>
                                            <div className={'h-[40px] flex items-center login-success-block3 px-2 rounded-lg '}>
                                                <button onClick={logout}>退出登录</button>
                                            </div>

                                        </div>

                                    </div>
                                }
                            </div>


                        </> :
                        <div className={'login-border  p-[1px] '}>
                            <button
                                className={'bg-[#0d0e12] text-[14px] w-full h-full flex justify-center items-center rounded'}
                                onClick={toLogin}
                            >
                                登陆 / 注册
                            </button>
                        </div>
                }


            </div>
            {
                loginStatus == 1 &&
                <div className={'w-screen h-full fixed left-0 top-0 z-20  flex justify-center items-center'}>
                    <div className={'w-screen h-full bg-black opacity-80 '}></div>
                    <div className={'w-[493px] h-[588px] rounded-2xl   z-40 absolute flex  flex-col items-center'}>
                        <div
                            className={'bg-[#242527] w-full h-[107px] flex justify-center items-center rounded-t-2xl relative '}>
                            <Image src={Logo} alt={'LOGO'} width={180} height={60}/>
                            <button className={'absolute right-4 top-4'} onClick={() => setLoginStatus(0)}>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18 2.25C9.30234 2.25 2.25 9.30234 2.25 18C2.25 26.6977 9.30234 33.75 18 33.75C26.6977 33.75 33.75 26.6977 33.75 18C33.75 9.30234 26.6977 2.25 18 2.25ZM23.8148 23.9836L21.4945 23.973L18 19.807L14.509 23.9695L12.1852 23.9801C12.0305 23.9801 11.9039 23.857 11.9039 23.6988C11.9039 23.632 11.9285 23.5688 11.9707 23.516L16.5445 18.0668L11.9707 12.6211C11.9282 12.5696 11.9047 12.5051 11.9039 12.4383C11.9039 12.2836 12.0305 12.157 12.1852 12.157L14.509 12.1676L18 16.3336L21.491 12.1711L23.8113 12.1605C23.966 12.1605 24.0926 12.2836 24.0926 12.4418C24.0926 12.5086 24.068 12.5719 24.0258 12.6246L19.459 18.0703L24.0293 23.5195C24.0715 23.5723 24.0961 23.6355 24.0961 23.7023C24.0961 23.857 23.9695 23.9836 23.8148 23.9836Z"
                                        fill="white" fill-opacity="0.3"/>
                                </svg>

                            </button>
                        </div>
                        <div className={'bg-white grow rounded-b-2xl w-full flex justify-center'}>
                            <div className={' mt-6 w-[309px] flex flex-col items-center  '}>
                                <div className={'text-[20px] font-[400] flex justify-center items-center'}>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24.2613 13.2682C24.4688 13.2682 24.6762 13.2752 24.8801 13.2858C24.0223 8.76115 19.3148 5.30177 13.6336 5.30177C7.34766 5.30177 2.25 9.54162 2.25 14.7729C2.25 17.624 3.78281 20.194 6.18398 21.9307C6.28302 22.0006 6.36379 22.0933 6.41947 22.201C6.47515 22.3087 6.50411 22.4282 6.50391 22.5494C6.50391 22.6338 6.48633 22.7111 6.46523 22.792C6.27187 23.5057 5.96602 24.6483 5.95195 24.701C5.92734 24.7924 5.89219 24.8838 5.89219 24.9787C5.89219 25.1861 6.06094 25.3584 6.27187 25.3584C6.35273 25.3584 6.41953 25.3268 6.48984 25.2881L8.98242 23.8502C9.16875 23.7412 9.36914 23.6744 9.58711 23.6744C9.69961 23.6744 9.81211 23.692 9.92109 23.7236C11.0848 24.0576 12.3398 24.244 13.6371 24.244C13.848 24.244 14.0555 24.2404 14.2629 24.2299C14.0133 23.4916 13.8797 22.7147 13.8797 21.9096C13.8797 17.1354 18.5273 13.2682 24.2613 13.2682ZM17.4305 10.2272C18.2672 10.2272 18.9492 10.9057 18.9492 11.7424C18.9492 12.5791 18.2707 13.2576 17.4305 13.2576C16.5938 13.2576 15.9117 12.5791 15.9117 11.7424C15.9117 10.9057 16.5938 10.2272 17.4305 10.2272ZM9.84023 13.2576C9.00352 13.2576 8.32148 12.5791 8.32148 11.7424C8.32148 10.9057 9 10.2272 9.84023 10.2272C10.6805 10.2272 11.359 10.9057 11.359 11.7424C11.359 12.5791 10.677 13.2576 9.84023 13.2576ZM30.4699 27.8686C32.4703 26.4201 33.7465 24.2826 33.7465 21.9026C33.7465 17.5432 29.4996 14.01 24.2578 14.01C19.0195 14.01 14.7691 17.5432 14.7691 21.9026C14.7691 26.2619 19.016 29.7951 24.2578 29.7951C25.3406 29.7951 26.3883 29.6404 27.3551 29.3627C27.4465 29.3346 27.5379 29.3205 27.6328 29.3205C27.8156 29.3205 27.9809 29.3768 28.1355 29.4647L30.2133 30.66C30.273 30.6951 30.3293 30.7197 30.3961 30.7197C30.4378 30.7201 30.4791 30.7122 30.5177 30.6965C30.5563 30.6808 30.5915 30.6576 30.6211 30.6283C30.6504 30.5987 30.6736 30.5636 30.6892 30.525C30.7049 30.4863 30.7128 30.445 30.7125 30.4033C30.7125 30.326 30.6809 30.2486 30.6633 30.1713C30.6527 30.1291 30.3961 29.1764 30.2344 28.5787C30.2168 28.5119 30.2027 28.4451 30.2027 28.3783C30.2062 28.1709 30.3117 27.9846 30.4699 27.8686ZM21.1008 20.644C20.4012 20.644 19.8352 20.0779 19.8352 19.3819C19.8352 18.6858 20.4012 18.1197 21.1008 18.1197C21.8004 18.1197 22.3664 18.6858 22.3664 19.3819C22.3664 20.0779 21.7969 20.644 21.1008 20.644ZM27.4254 20.644C26.7258 20.644 26.1598 20.0779 26.1598 19.3819C26.1598 18.6858 26.7258 18.1197 27.4254 18.1197C28.125 18.1197 28.691 18.6858 28.691 19.3819C28.6893 19.7167 28.5554 20.0373 28.3183 20.2737C28.0812 20.5101 27.7602 20.6432 27.4254 20.644Z"
                                            fill="black"/>
                                    </svg>
                                    <div className={'ml-2'}>微信扫码快速登入/注册</div>
                                </div>
                                {
                                    loginUrl==null?<div className={'w-[293px] h-[293px] bg-[#d9d9d9] mt-4'}>

                                    </div>:<div className={'w-[293px] h-[293px]  mt-4'}>
                                        {/*{loginUrl}*/}
                                        <img src={loginUrl.url}/>
                                    </div>
                                }
                                <div
                                    className={'mt-4  opacity-50 text-[14px]'}>我已阅读并同意《公众力用户协议》，未注册用户登录后将自动完成注册。
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            }
            {
                loginStatus == 2 &&
                <div className={'w-screen h-full fixed left-0 top-0 z-20  flex justify-center items-center'}>
                    <div className={'w-screen h-full bg-black opacity-80 '}></div>
                    <div
                        className={'w-[667px] h-[333px] rounded-2xl bg-[#242527]  z-40 absolute flex  flex-col items-center'}>
                        <div className={' w-full h-[120px] flex justify-center items-center rounded-t-2xl relative '}>
                            <Image src={Logo} alt={'LOGO'} width={180} height={68}/>
                            <button className={'absolute right-4 top-4'} onClick={() => setLoginStatus(0)}>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18 2.25C9.30234 2.25 2.25 9.30234 2.25 18C2.25 26.6977 9.30234 33.75 18 33.75C26.6977 33.75 33.75 26.6977 33.75 18C33.75 9.30234 26.6977 2.25 18 2.25ZM23.8148 23.9836L21.4945 23.973L18 19.807L14.509 23.9695L12.1852 23.9801C12.0305 23.9801 11.9039 23.857 11.9039 23.6988C11.9039 23.632 11.9285 23.5688 11.9707 23.516L16.5445 18.0668L11.9707 12.6211C11.9282 12.5696 11.9047 12.5051 11.9039 12.4383C11.9039 12.2836 12.0305 12.157 12.1852 12.157L14.509 12.1676L18 16.3336L21.491 12.1711L23.8113 12.1605C23.966 12.1605 24.0926 12.2836 24.0926 12.4418C24.0926 12.5086 24.068 12.5719 24.0258 12.6246L19.459 18.0703L24.0293 23.5195C24.0715 23.5723 24.0961 23.6355 24.0961 23.7023C24.0961 23.857 23.9695 23.9836 23.8148 23.9836Z"
                                        fill="white" fill-opacity="0.3"/>
                                </svg>

                            </button>
                        </div>
                        <div className={' grow rounded-b-2xl w-full flex justify-center'}>
                            <div className={'w-[390px] '}>
                                <div className={'text-white opacity-40'}>请输入您的邀请码：</div>
                                <form className={'mt-2 flex w-full h-[44px] rounded'} onSubmit={confirmCode}
                                      action={'#'}>
                                    <input
                                        className={'grow bg-[#424242] rounded-l focus:outline-none px-1 text-white ' +
                                            'placeholder-white placeholder-opacity-30'}
                                        placeholder={'AHHJ678787'}
                                        name={'code'}
                                        onFocus={() => setInputStatus(1)}/>
                                    <button className={'w-[80px] h-full flex justify-center items-center  rounded ' +
                                        (inputStatus === 0 ? 'bg-[#848484]' : (inputStatus == 1 ? 'bg-[#2A92DE]' : 'bg-[#0077ce]'))}
                                            type={"submit"}
                                    >
                                        <div className={'text-white ' + (inputStatus == 0 ? 'opacity-40' : '')}>确认
                                        </div>
                                    </button>
                                </form>
                                {
                                    codeError && <div className={'text-red-600 opacity-90 mt-1 text-sm'}>
                                        当前验证码错误，请核实后再输入！
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            }
            {
                loginStatus == 3 &&
                <div className={'w-screen h-full fixed left-0 top-0 z-20  flex justify-center items-center'}>
                    <div className={'w-screen h-full bg-black opacity-80 '}></div>
                    <div
                        className={'w-[845px] h-[375px] rounded-2xl bg-[#242527]  z-40 absolute flex  flex-col items-center'}>
                        <div className={'w-full  h-full relative'}>
                            <Image src={LoginSuccess} alt={'LoginSuccess'}/>
                            <button className={'absolute right-5 top-2 opacity-0'} onClick={confirmLogin}>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18 2.25C9.30234 2.25 2.25 9.30234 2.25 18C2.25 26.6977 9.30234 33.75 18 33.75C26.6977 33.75 33.75 26.6977 33.75 18C33.75 9.30234 26.6977 2.25 18 2.25ZM23.8148 23.9836L21.4945 23.973L18 19.807L14.509 23.9695L12.1852 23.9801C12.0305 23.9801 11.9039 23.857 11.9039 23.6988C11.9039 23.632 11.9285 23.5688 11.9707 23.516L16.5445 18.0668L11.9707 12.6211C11.9282 12.5696 11.9047 12.5051 11.9039 12.4383C11.9039 12.2836 12.0305 12.157 12.1852 12.157L14.509 12.1676L18 16.3336L21.491 12.1711L23.8113 12.1605C23.966 12.1605 24.0926 12.2836 24.0926 12.4418C24.0926 12.5086 24.068 12.5719 24.0258 12.6246L19.459 18.0703L24.0293 23.5195C24.0715 23.5723 24.0961 23.6355 24.0961 23.7023C24.0961 23.857 23.9695 23.9836 23.8148 23.9836Z"
                                        fill="white" fill-opacity="0.3"/>
                                </svg>

                            </button>
                            <button className={'w-[166px] h-[60px] absolute opacity-0 top-[267px] right-[48px] '}
                                    onClick={confirmLogin}
                            >
                                知道啦
                            </button>
                        </div>

                    </div>
                </div>
            }
        </>

    );
}

export default Header;
