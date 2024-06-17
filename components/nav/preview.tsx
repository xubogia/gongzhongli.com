import Logo from '@/asset/svg/logo.svg'
import LoginSuccess from '@/asset/svg/loginSuccess.svg'
import Avatar from '@/asset/svg/avatar.svg'
import Image from "next/image";
import {useEffect, useState} from "react";

function Header({id}: { id: any }) {
    const [loginStatus, setLoginStatus] = useState(0);
    const [login, setLogin] = useState(false);
    const [inputStatus, setInputStatus] = useState(0);
    const [codeError, setCodeError] = useState(false);
    const [message,setMessage]=useState(false);

    useEffect(() => {
        if (id) {
            setLogin(true)
        }
    }, [id])
    const toLogin = () => {
        setLoginStatus(1)
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
            setLogin(true)
            document.cookie = `username=${code.value}; path=/`;
        }
    }

    const confirmLogin=()=>{
        setLoginStatus(4);
        window.location.reload()
    }

    const logout=()=>{
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.reload()
    }
    return (
        <>
            <div className={'w-full px-[360px] text-white py-3 flex justify-between items-center'}>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6792 4.13242V2.06189C17.6792 1.88242 17.473 1.78332 17.3337 1.89314L5.2587 11.3244C5.15611 11.4042 5.07309 11.5063 5.01599 11.6231C4.95888 11.7398 4.9292 11.8681 4.9292 11.998C4.9292 12.128 4.95888 12.2563 5.01599 12.373C5.07309 12.4898 5.15611 12.5919 5.2587 12.6717L17.3337 22.103C17.4757 22.2128 17.6792 22.1137 17.6792 21.9342V19.8637C17.6792 19.7324 17.6176 19.6065 17.5158 19.5262L7.87299 11.9994L17.5158 4.46992C17.6176 4.38957 17.6792 4.26367 17.6792 4.13242Z" fill="white"/>
                    </svg>
                </button>


                <div className={'font-[600] text-[20px]'}>
                    脚本预览
                </div>
                {
                    login ? <>
                            <div className={'flex items-center relative'}>
                                <div className={'login-success-block1 text-[12px] flex items-center justify-center mr-3 w-[48px] h-[22px]'}>
                                    创始版
                                </div>
                                <div onClick={()=>setMessage(!message)}>
                                    <Image src={Avatar} alt={'Avatar'} width={36} height={36}/>
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
                                                    JuNJUn123
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


        </>

    );
}

export default Header;
