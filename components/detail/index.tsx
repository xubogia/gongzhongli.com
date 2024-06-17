import Example from '@/asset/svg/example.svg'
import Image from "next/image";
import {useState} from "react";


const dataTemp =
    {
        title: '视频名称',
        duration: '10 分 35 秒',
        size: '136 M',
        image: '',
        time: '2024 年 5 月 24 日  14:40',
        fragments: [
            {
                title: '视频名称',
                duration: '1:20',
                image: '',
                video: 'https://www.w3schools.com/html/mov_bbb.mp4',
                subtitle: '硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门。\n' +
                    '前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享'
            },
            {
                title: '视频名称',
                duration: '1:20',
                image: '',
                video: 'https://www.w3schools.com/html/mov_bbb.mp4',
                subtitle: '硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门。\n' +
                    '前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享'
            },
            {
                title: '视频名称',
                duration: '1:20',
                image: '',
                video: 'https://www.w3schools.com/html/mov_bbb.mp4',
                subtitle: '硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门。\n' +
                    '前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享硅谷知名博士闭门前沿分享'
            }
        ]
    }

const Index = ({id}: { id: any }) => {


    const [data, setData] = useState<any>(dataTemp)

    const [selectIndex,setSelectIndex]=useState(0);

    return (
        <div className={'w-full grow px-[360px] pb-20 '}>
            <div
                className={'detail-block1 w-full h-[175px] rounded-xl mt-[32px] flex items-center justify-between px-6'}>
                <div className={'flex'}>
                    <Image src={Example} alt={'demo'} className={'w-[180px] h-[127px]'}/>
                    <div className={'ml-6 h-[127px] flex flex-col justify-end'}>
                        <div>
                            <div className={'text-[24px] text-white font-[600] '}>视频名称</div>
                            <div className={'flex space-x-4 mt-2 text-white opacity-60 font-[400]'}>
                                <div>
                                    时长：10 分 35 秒
                                </div>
                                <div>
                                    大小：136 M（估计）
                                </div>
                                <div>
                                    2024 年 5 月 24 日 14:40
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className={'w-[130px] h-[45px] flex justify-center items-center rounded-xl detail-button1 text-white'}>
                    修改原视频
                </button>
            </div>

            <div className={'w-full mt-8 '}>
                <div className={'font-[600] text-white text-[24px] '}>
                    视频片段预览
                </div>
                <div className={'w-full flex justify-between mt-4'}>
                    <div className={'w-[324px] h-[509px] rounded-lg detail-block1 flex flex-col items-center py-4 space-y-4'}>
                        {
                            dataTemp && dataTemp.fragments.map((item, index) => <button
                            key={index}
                            onClick={()=>setSelectIndex(index)}
                                className={'w-[288px]  flex p-2 rounded-lg '+(selectIndex==index?'detail-block3':'')}>
                                <div className={'relative'}>
                                    <Image src={Example} alt={'part'} className={'w-[116px] h-[82px] rounded-lg'}/>
                                    <div
                                        className={'absolute top-2 left-2 w-[31px] h-[16px] rounded detail-block2 flex items-center justify-center'}>
                                        <div className={'text-[12px] text-white font-[400]'}>
                                            {
                                                index + 1
                                            }
                                        </div>

                                    </div>
                                </div>

                                <div className={'h-full flex flex-col justify-end ml-3'}>
                                    <div className={'text-white '}>
                                        {item.title}
                                    </div>
                                    <div className={'text-[14px] mt-2 text-white opacity-60'}>
                                        {item.duration}
                                    </div>
                                </div>

                            </button>)
                        }
                    </div>
                    <div className={'w-[842px] h-[509px] rounded-lg detail-block1 py-4 px-4 flex flex-col justify-between '}>
                        <div className={'w-full justify-between flex text-white'}>
                            <div>
                                { data.fragments[selectIndex].title}
                            </div>
                            <div className={'flex space-x-2'}>
                                <button>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0236 3C11.8266 3 11.6315 3.0388 11.4495 3.11418C11.2675 3.18956 11.1022 3.30005 10.9629 3.43934C10.8236 3.57863 10.7131 3.74399 10.6377 3.92597C10.5624 4.10796 10.5236 4.30302 10.5236 4.5C10.5236 4.69698 10.5624 4.89204 10.6377 5.07403C10.7131 5.25601 10.8236 5.42137 10.9629 5.56066C11.1022 5.69995 11.2675 5.81044 11.4495 5.88582C11.6315 5.9612 11.8266 6 12.0236 6C12.2205 6 12.4156 5.9612 12.5976 5.88582C12.7796 5.81044 12.9449 5.69995 13.0842 5.56066C13.2235 5.42137 13.334 5.25601 13.4094 5.07403C13.4848 4.89204 13.5236 4.69698 13.5236 4.5C13.5236 4.30302 13.4848 4.10796 13.4094 3.92597C13.334 3.74399 13.2235 3.57863 13.0842 3.43934C12.9449 3.30005 12.7796 3.18956 12.5976 3.11418C12.4156 3.0388 12.2205 3 12.0236 3ZM12.0236 10.5C11.6257 10.5 11.2442 10.658 10.9629 10.9393C10.6816 11.2206 10.5236 11.6022 10.5236 12C10.5236 12.3978 10.6816 12.7794 10.9629 13.0607C11.2442 13.342 11.6257 13.5 12.0236 13.5C12.4214 13.5 12.8029 13.342 13.0842 13.0607C13.3655 12.7794 13.5236 12.3978 13.5236 12C13.5236 11.6022 13.3655 11.2206 13.0842 10.9393C12.8029 10.658 12.4214 10.5 12.0236 10.5ZM12.0236 18C11.6257 18 11.2442 18.158 10.9629 18.4393C10.6816 18.7206 10.5236 19.1022 10.5236 19.5C10.5236 19.8978 10.6816 20.2794 10.9629 20.5607C11.2442 20.842 11.6257 21 12.0236 21C12.4214 21 12.8029 20.842 13.0842 20.5607C13.3655 20.2794 13.5236 19.8978 13.5236 19.5C13.5236 19.1022 13.3655 18.7206 13.0842 18.4393C12.8029 18.158 12.4214 18 12.0236 18Z" fill="white"/>
                                    </svg>
                                </button>

                                <button className={'bg-[#3A3A3A] flex items-center justify-center w-[78px] h-[29px] rounded-lg text-[14px] '}>
                                    编辑
                                </button>
                                <button className={'bg-[#2A92DE] flex items-center justify-center w-[78px] h-[29px] rounded-lg text-[14px] '}>
                                    导出
                                </button>
                            </div>
                        </div>
                        <div className={'flex justify-between'}>
                            <div className={'w-[564px] h-[432px]'}>
                                <video className={'w-[564px] h-[432px] '} controls>
                                    <source src={ data.fragments[selectIndex].video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className={'w-[216px] h-[432px] text-white opacity-60 overflow-auto'}>
                                {
                                    data.fragments[selectIndex].subtitle
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Index;