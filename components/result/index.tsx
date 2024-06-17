
import {useEffect, useRef, useState} from "react";


const data = [
    {
        title: 'AI 视频示例',
        time: '5月22日 14:22',
        image: ''
    }
]
const Index = ({id}: { id: any }) => {

    const [videos, setVideos] = useState<any>([]);






    return (
        <div className={'w-full grow px-[516px] pb-20 relative '}>
            <div className={'absolute right-[200px] top-[-80px] opacity-[8%] z-20'}>
                <svg width="890" height="750" viewBox="0 0 890 750" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.08" filter="url(#filter0_f_43_3880)">
                        <circle cx="445" cy="305" r="245" fill="#2A92DE"/>
                        <circle cx="445" cy="305" r="244.5" stroke="black"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_43_3880" x="0" y="-140" width="890" height="890"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_43_3880"/>
                        </filter>
                    </defs>
                </svg>

            </div>

            <div className={'flex flex-col items-center mt-[40px]'}>
                <div className={'flex items-center'}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_279_8195)">
                            <path d="M15.8823 5.67247L18.6506 1.05957L19.9283 5.67247H15.8823Z" fill="#7843CE"/>
                            <path d="M31.7642 9.53056L33.9375 12.707L34.9406 9.53056H31.7642Z" fill="#F5CDFF"/>
                            <path d="M0.930403 32.5987L12.6605 9.5293L27.529 26.9999L2.55438 34.5394C1.39478 34.8895 0.381395 33.6785 0.930403 32.5987Z" fill="url(#paint0_linear_279_8195)"/>
                            <ellipse cx="3.23876" cy="11.4674" rx="3.23876" ry="11.4674" transform="matrix(0.658641 -0.752458 0.660191 0.751098 10.3774 12.1113)" fill="url(#paint1_linear_279_8195)"/>
                            <path d="M21.9033 9.5293C23.5144 10.8822 26.35 14.2523 24.8033 16.909C22.8699 20.2299 19.7535 16.7245 21.9033 14.3261C24.0531 11.9277 29.1534 11.9277 30.1201 15.4331" stroke="white" stroke-width="1.83439" stroke-linecap="round"/>
                            <circle cx="27.0003" cy="4.76402" r="1.58824" fill="#E479FF"/>
                            <circle cx="27.0003" cy="22.764" r="1.58824" fill="#42F4FF"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_279_8195" x1="12.6605" y1="10.7215" x2="15.9018" y2="32.3094" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#DB4AFF"/>
                                <stop offset="1" stop-color="#006CB8"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_279_8195" x1="-0.686205" y1="7.18157" x2="8.27712" y2="10.0277" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F5CBFF"/>
                                <stop offset="1" stop-color="#326597"/>
                            </linearGradient>
                            <clipPath id="clip0_279_8195">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <div className={'text-[24px] font-[600] text-white ml-2'}>
                        视频生成成功！
                    </div>
                </div>
               <button className={'w-[106px] h-[30px] text-[14px] flex items-center justify-center mt-8 bg-[#2a92de] text-white rounded-lg'}>
                   立即下载
               </button>
                <div className={'w-full  result-block1 mt-12'}>
                    <div className={'result-block2 pl-4 text-white text-[14px] h-[38px] flex items-center'}>
                        项目名称项目名称项目名称
                    </div>
                    <video width="100%" height="100%" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

        </div>
    )
}
export default Index;