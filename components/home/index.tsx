import Block1 from '@/asset/svg/console-block1.svg'
import Block2 from '@/asset/svg/console-block2.svg'
import Block3 from '@/asset/svg/console-block3.svg'
import Example from '@/asset/svg/example.svg'
import Image from "next/image";
import type { PopconfirmProps } from 'antd';
// import {  message, Popconfirm } from 'antd';


const data = [
    {
        title: 'AI 视频示例',
        time: '5月22日 14:22',
        image: ''
    }
]
const Index = ({id}: { id: any }) => {

    const confirm: PopconfirmProps['onConfirm'] = (e) => {
        // console.log(e);
        // message.success('Click on Yes');
    };

    const cancel: PopconfirmProps['onCancel'] = (e) => {
        // console.log(e);
        // message.error('Click on No');
    };



    return (
        <div className={'w-full grow px-[360px] pb-20 '}>
            <div className={'console-block1 flex justify-center '}>
                <div className={'text-white flex flex-col  mt-[60px]'}>
                    <div className={'console-block1-text1'}>视频合成</div>
                    <div className={'text-[20px] font-bold mt-4'}>视频、图片等素材自动合成</div>
                    <div className={'opacity-80 text-[16px] mt-4'}>
                        适用场景：活动宣传、事件集锦等视频制作
                    </div>
                    <button className={'console-block1-button1 font-[600] text-xl mt-20'} onClick={()=>window.location.href='./dashboard'}>
                        开始制作
                    </button>
                </div>
                <Image src={Block1} alt={'block1'}/>
            </div>

            <div className={'w-full flex justify-between mt-10 '}>
                <div className={'relative'}>
                    <Image src={Block2} alt={'Block2'}/>
                    <div className={'absolute  top-16 left-5 text-white'}>
                        <div className={'text-3xl'}>视频切片</div>
                        <div className={'mt-2 text-gray-300'}>只需导入视频，AI 一键搞定批量切片</div>
                    </div>
                </div>

                <div className={'relative'}>
                    <Image src={Block3} alt={'Block3'}/>
                    <div className={'absolute  top-16 left-5 text-white'}>
                        <div className={'text-3xl'}>其他功能拓展</div>
                        <div className={'mt-2 text-gray-300'}>更多 AI 工具开发中，敬请期待！</div>
                    </div>
                </div>

            </div>

            {
                id && <div className={'mt-10'}>
                    <div>
                        <div className={'text-3xl text-white'}>我的项目</div>
                        <div className={'text-gray-400 mt-2'}>历史项目都可以在下面找到哦！</div>
                    </div>
                    <div className={'mt-4 console-block4 flex items-center px-6'}>
                        {
                            data.length > 0 ? data.map((item, index) => <div key={index}>
                                    <div className={'relative rounded-2xl'}>
                                        <Image src={Example} alt={'Example'} className={'w-[255px] h-180px '}/>
                                        <div
                                            className={'absolute w-full h-full top-0 rounded-2xl opacity-0 hover:opacity-100 '}>
                                            <div className={'absolute w-full h-full bg-black opacity-60 rounded-xl '}>
                                                <div className={'right-2 top-2 flex absolute w-14 justify-between  '}>

                                                    {/*<Popconfirm*/}
                                                    {/*    title="是否要删除 “AI视频示例” ？"*/}
                                                    {/*    onConfirm={confirm}*/}
                                                    {/*    onCancel={cancel}*/}
                                                    {/*    okText="确认"*/}
                                                    {/*    cancelText="取消"*/}
                                                    {/*>*/}
                                                    {/*    <button className={'hover:bg-white rounded'}>*/}
                                                    {/*        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
                                                    {/*             xmlns="http://www.w3.org/2000/svg">*/}
                                                    {/*            <rect width="24" height="24" rx="4.8" fill="white" fill-opacity="0.6"/>*/}
                                                    {/*            <path*/}
                                                    {/*                d="M17.5 8H15.5V6.75C15.5 6.19844 15.0516 5.75 14.5 5.75H9.5C8.94844 5.75 8.5 6.19844 8.5 6.75V8H6.5C6.22344 8 6 8.22344 6 8.5V9C6 9.06875 6.05625 9.125 6.125 9.125H7.06875L7.45469 17.2969C7.47969 17.8297 7.92031 18.25 8.45312 18.25H15.5469C16.0813 18.25 16.5203 17.8313 16.5453 17.2969L16.9312 9.125H17.875C17.9438 9.125 18 9.06875 18 9V8.5C18 8.22344 17.7766 8 17.5 8ZM9.625 6.875H14.375V8H9.625V6.875ZM15.4266 17.125H8.57344L8.19531 9.125H15.8047L15.4266 17.125Z"*/}
                                                    {/*                fill="black"/>*/}
                                                    {/*        </svg>*/}
                                                    {/*    </button>*/}
                                                    {/*</Popconfirm>*/}

                                                    <button className={'hover:bg-white rounded'}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="24" height="24" rx="4.8" fill="white" fill-opacity="0.6"/>
                                                            <path d="M17.75 17.0625H6.25C5.97344 17.0625 5.75 17.2859 5.75 17.5625V18.125C5.75 18.1938 5.80625 18.25 5.875 18.25H18.125C18.1938 18.25 18.25 18.1938 18.25 18.125V17.5625C18.25 17.2859 18.0266 17.0625 17.75 17.0625ZM8.02656 15.75C8.05781 15.75 8.08906 15.7469 8.12031 15.7422L10.7484 15.2812C10.7797 15.275 10.8094 15.2609 10.8313 15.2375L17.4547 8.61406C17.4692 8.59961 17.4807 8.58244 17.4885 8.56354C17.4963 8.54463 17.5004 8.52437 17.5004 8.50391C17.5004 8.48344 17.4963 8.46318 17.4885 8.44428C17.4807 8.42538 17.4692 8.40821 17.4547 8.39375L14.8578 5.79531C14.8281 5.76563 14.7891 5.75 14.7469 5.75C14.7047 5.75 14.6656 5.76563 14.6359 5.79531L8.0125 12.4187C7.98906 12.4422 7.975 12.4703 7.96875 12.5016L7.50781 15.1297C7.49261 15.2134 7.49804 15.2995 7.52364 15.3807C7.54923 15.4618 7.59421 15.5355 7.65469 15.5953C7.75781 15.6953 7.8875 15.75 8.02656 15.75ZM9.07969 13.025L14.7469 7.35938L15.8922 8.50469L10.225 14.1703L8.83594 14.4156L9.07969 13.025Z" fill="black"/>
                                                        </svg>

                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={'mt-2'}>
                                        <div className={'text-[18px] text-white'}>{item.title}</div>
                                        <div className={'text-white opacity-50 text-sm mt-1'}>{item.time}</div>
                                    </div>
                                </div>) :
                                <div className={'w-full h-full flex items-center justify-center opacity-40 text-white'}>
                                    您还没有项目，赶紧去创作一个吧～
                                </div>
                        }

                    </div>

                </div>
            }
        </div>
    )
}
export default Index;