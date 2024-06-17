import {useEffect} from "react";
import Nav from '@/components/nav/index'


const setDomFontSize = () => {
    const clientWidth = document.body.clientWidth;
    console.log(clientWidth)
    const htmlNode=document.getElementsByTagName("html")[0];
    htmlNode.style.fontSize = `${clientWidth / 1920 * 16  }px`;
    console.log(htmlNode.style.fontSize);
}
export default function Home({Main,id}:{Main:any,id:any}) {

    useEffect(() => {
        // 初始化时设置一次
        setDomFontSize();

        // 添加resize事件监听器
        window.addEventListener('resize', setDomFontSize);

        // 在组件卸载时移除事件监听器
        return () => {
            window.removeEventListener('resize', setDomFontSize);
        };
    }, []);



    return (
        <div className={'w-full min-h-full  flex flex-col bg-[#0d0e12]'}>
                <Nav id={id} />
                <Main id={id}/>

        </div>
    )
}
