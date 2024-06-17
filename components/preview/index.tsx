import ScriptDemo from '@/asset/img/script.png'
import Image from "next/image";
import {useEffect, useState} from "react";
import Example from '@/asset/svg/example.svg'
import Recording from "@/components/preview/recording";


const dataTemp =
    {
        title: '硅谷知名博士闭门前沿分享',
        subtitle: '2024年4月25日 创新创业教育中心承办',
        copyWriting: '硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门。' +
            '前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知。\n' +
            '谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享。',
        series: '新闻报道AE视频',
        cover: '',
        logo: '',
        demos: [
            {
                name: '素材1',
                video: ''
            },
            {
                name: '素材2',
                video: ''
            },
            {
                name: '素材3',
                video: ''
            }
        ]
    }

const Index = ({id}: { id: any }) => {

    const [data, setData] = useState<any>(dataTemp)
    const [finishStatus, setFinishStatus] = useState(0)

    const handleChange = (type, value) => {

    }

    const confirmProduct=()=>{
        setFinishStatus(1)
    }

    useEffect(()=>{
        let timer:any;
        if(finishStatus<4){
            timer= setTimeout(() => {
                setFinishStatus(prevStatus => (prevStatus + 1) );
            }, 1000);
        }


        return () => clearTimeout(timer);
    },[finishStatus])


    return (
        <div className={'w-full grow px-[360px] pb-20 '}>
            <div className={'w-full mt-[24px] flex justify-between'}>
                <div>
                    <div className={'text-white text-[20px] font-[500]'}>
                        系列名称：{'新闻报道AE视频'}
                    </div>
                    <div className={'w-[304px] h-[408px] mt-4 rounded-xl'}>
                        <Image src={ScriptDemo} alt={'DEMO'}/>
                    </div>
                </div>

                <div>
                    <div className={'text-white opacity-60 mt-10'}>
                        视频标题
                    </div>
                    <input className={'w-[390px] h-[44px] bg-[#22222D] rounded-lg mt-3 px-2 text-white opacity-30'}
                           defaultValue={data.title}/>
                    <div className={'text-white opacity-60 mt-3'}>
                        副标题
                    </div>
                    <input className={'w-[390px] h-[44px] bg-[#22222D] rounded-lg mt-3 px-2 text-white opacity-30'}
                           defaultValue={data.subtitle}/>
                    <div className={'text-white opacity-60 mt-3'}>
                        视频LOGO
                    </div>
                    <Image src={ScriptDemo} alt={'LOGO'} className={'w-[104px] h-[104px] mt-3'}/>
                </div>
                <div className={''}>
                    <div className={'text-white text-[20px] font-[500]'}>
                        视频配音文案（字幕）
                    </div>
                    <div className={'w-[458px] h-[408px] mt-4  preview-block1 rounded-xl '}>
                        <textarea
                            className={'w-full h-[340px] preview-block1 text-white opacity-30 p-3 focus:outline-none rounded-xl '}
                            defaultValue={data.copyWriting}
                            rows={14}
                            maxLength={500}
                            onChange={(e) => handleChange('cppyWriting', e.target.value)}
                        />
                        <div className={'mt-4 ml-4 text-white opacity-60'}>
                            字数：<span
                            className={(data.copyWriting.length == 50 ? 'text-red-500' : '')}>{data.copyWriting.length}</span> /
                            500
                        </div>
                    </div>

                </div>

            </div>
            <div className={'w-full h-[214px] mt-[40px] rounded-xl flex flex-col '}>
                <div className={'h-[52px] rounded-t-xl preview-block2 flex items-center'}>
                    <div className={'ml-4 font-[500] text-white '}>
                        素材顺序
                    </div>
                    <div className={'ml-4 text-[14px] mt-2 text-white opacity-60 '}>
                        当前共 {6} 段素材
                    </div>
                </div>
                <div className={'preview-block3 grow rounded-b-xl flex px-2 items-center'}>
                    {
                        data && data.demos.map((item: any, index: any) => <div key={index}
                                                                               className={'w-[191px] h-[130px]  relative ml-1 '}>
                                <Image src={Example} alt={'DEMO'} className={'w-full h-full rounded-xl'}/>
                                <div className={'w-full preview-block4  h-[38px] flex items-center absolute bottom-0 left-0  '}>
                                    <div className={'ml-2 text-white '}>
                                        {
                                            item.name
                                        }
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>


            </div>

            <div className={'w-full flex justify-center mt-8'}>
                <button
                    className={'w-[166px] h-[60px] flex items-center justify-center rounded-xl text-white text-[22px] bg-[#2a92de]'}
                    onClick={confirmProduct}
                >
                    确认生成
                </button>
            </div>
            {
                (finishStatus !== 0&&finishStatus<4) &&
                <div className={'w-screen h-full fixed left-0 top-0 z-20  flex justify-center items-center'}>
                    <div className={'w-screen h-full bg-black opacity-80 '}></div>
                    <div className={'w-[597px] h-[353px] rounded-xl preview-block5 absolute px-20 py-10'}>
                        <div className={'text-white'}>
                            正在进行AI自动生成…
                        </div>
                        {
                            finishStatus>0&&<div className={'mt-8 flex text-white items-center'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_361_284)">
                                        <circle cx="12" cy="12" r="12" fill="#1F91E5"/>
                                        <path d="M6.96777 12.7747L11.6129 16.6456L18.1936 8.5166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_361_284">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className={'ml-6'}>第 1 步  正在理解视频内容</div>

                            </div>
                        }
                        {
                            finishStatus>1&&<div className={'mt-8 flex text-white items-center'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_361_284)">
                                        <circle cx="12" cy="12" r="12" fill="#1F91E5"/>
                                        <path d="M6.96777 12.7747L11.6129 16.6456L18.1936 8.5166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_361_284">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className={'ml-6'}>第 2 步  正在根据脚本拆分 7 / 16</div>

                            </div>
                        }
                        {
                           finishStatus>2&&<div className={'mt-8 flex text-white items-center'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_361_284)">
                                        <circle cx="12" cy="12" r="12" fill="#1F91E5"/>
                                        <path d="M6.96777 12.7747L11.6129 16.6456L18.1936 8.5166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_361_284">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className={'ml-6'}>第 3 步  拆分完成</div>

                            </div>
                        }


                        <Recording/>
                    </div>
                </div>
            }
        </div>
    )
}
export default Index;