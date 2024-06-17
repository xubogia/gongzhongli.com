import Model from '@/asset/img/model.png'
import Image from "next/image";
const Index=()=>{

    return(
        <div className={'relative'}>
            <button
                className={'bg-[#6474b6] w-[121px] h-[68px] text-white rounded-xl flex justify-center items-center z-20 '}>
                选择系列
            </button>
            <div className={'w-[326px] h-[374px]   absolute -top-[390px] -left-[80px] px-2 py-2 rounded-lg bg-[#22242A] flex flex-wrap-reverse content-start justify-between  '}>


                <div className={'w-[90px] h-[90px] bg-[#3A414C] rounded-xl flex justify-center items-center  '}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2.25C9.30234 2.25 2.25 9.30234 2.25 18C2.25 26.6977 9.30234 33.75 18 33.75C26.6977 33.75 33.75 26.6977 33.75 18C33.75 9.30234 26.6977 2.25 18 2.25ZM28.1426 26.2547L9.76289 7.875C9.07031 8.4375 8.4375 9.07031 7.875 9.76289L26.2547 28.1426C24.0047 29.9777 21.1289 31.0781 18 31.0781C10.7789 31.0781 4.92188 25.2211 4.92188 18C4.92188 10.7789 10.7789 4.92188 18 4.92188C25.2211 4.92188 31.0781 10.7789 31.0781 18C31.0781 21.1289 29.9777 24.0047 28.1426 26.2547Z" fill="white" fill-opacity="0.6"/>
                    </svg>

                </div>
                <div className={'w-[90px] h-[90px] bg-[#3A414C] rounded-xl flex justify-center items-center mt-3 '}>
                    <Image src={Model} alt={'MODEL'} className={'rounded-xl'}/>
                </div>

                {/*<div className={'w-[90px] h-[90px] bg-[#3A414C] rounded-xl flex justify-center items-center '}>*/}
                {/*    <Image src={Model} alt={'MODEL'} className={'rounded-xl'}/>*/}
                {/*</div>*/}
                {/*<div className={'w-[90px] h-[90px] bg-[#3A414C] rounded-xl flex justify-center items-center '}>*/}
                {/*    <Image src={Model} alt={'MODEL'} className={'rounded-xl'}/>*/}
                {/*</div>*/}
                <div className={'w-[90px] h-[90px]'}></div>
            </div>
        </div>

    )
}

export default Index