import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import Model from './model'

const data = [
    {
        title: 'AI 视频示例',
        time: '5月22日 14:22',
        image: ''
    }
]
const Index = ({id}: { id: any }) => {

    const [images, setImages] = useState<any>([]);
    const [words, setWords] = useState<any>([]);
    const [uploadProgress, setUploadProgress] = useState<any>({});
    const handleVideosChange = (e:any) => {
        const selectedFiles = Array.from(e.target.files);
        selectedFiles.forEach((file:any) => {
            const reader = new FileReader();
            reader.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percentage = Math.round((event.loaded * 100) / event.total);
                    setUploadProgress((prevProgress:any) => ({
                        ...prevProgress,
                        [file.name]: percentage,
                    }));
                }
            };

            reader.onloadend = () => {
                setUploadProgress((prevProgress:any) => ({
                    ...prevProgress,
                    [file.name]: 100,
                }));
                console.log(`${file.name} read successfully`);
            };

            reader.onerror = () => {
                console.error(`${file.name} failed to read`);
            };

            reader.readAsArrayBuffer(file); // Or readAsDataURL(file), etc. based on your needs
        });
        setImages(selectedFiles);

    };
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const textareaRef = useRef(null);
    useEffect(() => {
        // 动态调整高度
        // if (textareaRef.current) {
        //     textareaRef.current.style.height = 'auto';
        //     textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        // }
    }, [value]);

    const handleWordsChange = (e:any) => {
        const selectedFiles = Array.from(e.target.files);
        selectedFiles.forEach((file:any) => {
            const reader = new FileReader();
            reader.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percentage = Math.round((event.loaded * 100) / event.total);
                    setUploadProgress((prevProgress:any) => ({
                        ...prevProgress,
                        [file.name]: percentage,
                    }));
                }
            };

            reader.onloadend = () => {
                setUploadProgress((prevProgress:any) => ({
                    ...prevProgress,
                    [file.name]: 100,
                }));
                console.log(`${file.name} read successfully`);
            };

            reader.onerror = () => {
                console.error(`${file.name} failed to read`);
            };

            reader.readAsArrayBuffer(file); // Or readAsDataURL(file), etc. based on your needs
        });
        setWords(selectedFiles);

    };

    const deleteWord=(index:any)=>{
        let wordsTemp=[...words];
        wordsTemp.splice(index);
        setWords(wordsTemp)
    }


    return (
        <div className={'w-full grow px-[528px] pb-20 relative '}>
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
            <div className={'w-full dashboard-block1 mt-[34px]   text-[20px] relative '}>
                {
                    images.length == 0 ? <div className={'w-full h-full flex flex-col justify-center items-center '}>
                        <input className={'w-full h-full z-40  bg-red-100 absolute opacity-0'} type={'file'} multiple
                               onChange={handleVideosChange}/>
                        <div className={' '}>
                            <span className={'text-white'}>点击</span> <span
                            className={'text-white opacity-40'}>或</span> <span className={'text-white'}>拖拽</span>
                        </div>
                        <div className={'text-white opacity-40 tracking-wider mt-2'}>
                            导入合成的素材
                        </div>
                    </div> : <>
                        <div className={'p-6 grid grid-cols-3 h-full overflow-y-auto z-40 '}>
                            <div
                                className={'bg-[#363b49] w-[255px] h-[180px] rounded-lg flex flex-col justify-center items-center relative'}>
                                <svg width="44" height="45" viewBox="0 0 44 45" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22" cy="22" r="22" fill="#1F91E5"/>
                                    <path
                                        d="M22.8034 12.3584H21.1962C21.0534 12.3584 20.9819 12.4298 20.9819 12.5727V20.9834H13.0004C12.8576 20.9834 12.7861 21.0548 12.7861 21.1977V22.8048C12.7861 22.9477 12.8576 23.0191 13.0004 23.0191H20.9819V31.4298C20.9819 31.5727 21.0534 31.6441 21.1962 31.6441H22.8034C22.9462 31.6441 23.0176 31.5727 23.0176 31.4298V23.0191H31.0004C31.1433 23.0191 31.2147 22.9477 31.2147 22.8048V21.1977C31.2147 21.0548 31.1433 20.9834 31.0004 20.9834H23.0176V12.5727C23.0176 12.4298 22.9462 12.3584 22.8034 12.3584Z"
                                        fill="white"/>
                                </svg>
                                <div className={'text-white opacity-60 text-[16px] mt-2'}>
                                    继续导入素材
                                </div>
                                <input className={'w-full h-full absolute opacity-0'} type={'file'}/>
                            </div>
                            {images.length > 0 && (
                                <>
                                    {images.map((image:any) => (
                                        <div key={image.name}
                                             className="mb-2 w-[255px] h-[180px] rounded-lg relative flex justify-center items-center ">
                                            <Image src={URL.createObjectURL(image)} className={'absolute w-full h-full rounded-lg'} alt={'DEMO'}
                                                   width={255} height={180}/>
                                            {

                                                (uploadProgress[image.name]!==100)&&<>
                                                    <div className={'w-full h-full absolute bg-black opacity-60'}>

                                                    </div>
                                                    <div className=" flex items-center  z-20 flex h-2 ">
                                                        <div className={'w-[100px] h-[6px] bg-gray-300 rounded-full'}>
                                                            <div
                                                                className="bg-blue-500  rounded-full h-full "
                                                                style={{width: `${uploadProgress[image.name] || 0}%`}}
                                                            ></div>
                                                        </div>

                                                        <div className="text-[12px] text-white ml-2">{uploadProgress[image.name] || 0}%</div>
                                                    </div>
                                                </>
                                            }
                                            <div className="absolute z-30 left-0 bottom-0 h-[44px] w-full bg-black opacity-40 flex items-center ">
                                                <span className="text-white text-[14px] ml-2">{image.name}</span>

                                            </div>

                                        </div>
                                    ))}
                                </>
                            )}

                        </div>
                    </>
                }
            </div>
            <div className={'mt-8 flex justify-between '}>
                <div className={' w-[720px] bg-[#181d2d] rounded-xl'}>
                    {
                        words.length>0&&words.map((word:any,index:any)=><div key={index} className={'w-full pl-[68px] text-[12px] pt-2'}>
                                <div className={'w-[250px] h-[48px] rounded-lg flex items-center dashboard-file1 pl-1 relative'}>
                                    <div className={'w-full h-full z-20 absolute opacity-0 hover:opacity-100 '}>
                                        <button className={'absolute -top-1 right-0 '} onClick={()=>deleteWord(index)}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM10.5844 10.6594L9.55313 10.6547L8 8.80313L6.44844 10.6531L5.41563 10.6578C5.34688 10.6578 5.29063 10.6031 5.29063 10.5328C5.29063 10.5031 5.30156 10.475 5.32031 10.4516L7.35313 8.02969L5.32031 5.60938C5.30143 5.58647 5.29096 5.5578 5.29063 5.52812C5.29063 5.45937 5.34688 5.40312 5.41563 5.40312L6.44844 5.40781L8 7.25938L9.55156 5.40938L10.5828 5.40469C10.6516 5.40469 10.7078 5.45937 10.7078 5.52969C10.7078 5.55937 10.6969 5.5875 10.6781 5.61094L8.64844 8.03125L10.6797 10.4531C10.6984 10.4766 10.7094 10.5047 10.7094 10.5344C10.7094 10.6031 10.6531 10.6594 10.5844 10.6594Z" fill="#7E7E7E"/>
                                            </svg>
                                        </button>

                                    </div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0297 6.76406L14.9859 1.72031C14.8453 1.57969 14.6555 1.5 14.4562 1.5H4.5C4.08516 1.5 3.75 1.83516 3.75 2.25V21.75C3.75 22.1648 4.08516 22.5 4.5 22.5H19.5C19.9148 22.5 20.25 22.1648 20.25 21.75V7.29609C20.25 7.09688 20.1703 6.90469 20.0297 6.76406ZM14.1094 3.22969L18.5203 7.64062H14.1094V3.22969ZM18.5625 20.8125H5.4375V3.1875H12.5156V8.25C12.5156 8.51107 12.6193 8.76145 12.8039 8.94606C12.9885 9.13066 13.2389 9.23438 13.5 9.23438H18.5625V20.8125Z" fill="white"/>
                                        <path d="M7.3125 11.4844V12.6094C7.3125 12.7125 7.39688 12.7969 7.5 12.7969H16.5C16.6031 12.7969 16.6875 12.7125 16.6875 12.6094V11.4844C16.6875 11.3813 16.6031 11.2969 16.5 11.2969H7.5C7.39688 11.2969 7.3125 11.3813 7.3125 11.4844ZM11.8125 14.4844H7.5C7.39688 14.4844 7.3125 14.5688 7.3125 14.6719V15.7969C7.3125 15.9 7.39688 15.9844 7.5 15.9844H11.8125C11.9156 15.9844 12 15.9 12 15.7969V14.6719C12 14.5688 11.9156 14.4844 11.8125 14.4844Z" fill="white"/>
                                    </svg>
                                    <div className={'ml-2 text-white'}>
                                        {word.name}
                                    </div>

                                </div>
                            </div>
                        )

                    }
                    <div className={'flex w-full min-h-[68px] py-4 '}>
                        <div className={'flex justify-center items-center ml-2  w-[44px] h-[44px] relative pt-1 dashboard-button2 rounded-lg '}>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.8034 10.3584H21.1962C21.0534 10.3584 20.9819 10.4298 20.9819 10.5727V18.9834H13.0004C12.8576 18.9834 12.7861 19.0548 12.7861 19.1977V20.8048C12.7861 20.9477 12.8576 21.0191 13.0004 21.0191H20.9819V29.4298C20.9819 29.5727 21.0534 29.6441 21.1962 29.6441H22.8034C22.9462 29.6441 23.0176 29.5727 23.0176 29.4298V21.0191H31.0004C31.1433 21.0191 31.2147 20.9477 31.2147 20.8048V19.1977C31.2147 19.0548 31.1433 18.9834 31.0004 18.9834H23.0176V10.5727C23.0176 10.4298 22.9462 10.3584 22.8034 10.3584Z"
                                    fill="white"/>
                            </svg>
                            <input className={'opacity-0 w-full h-full absolute '} type={'file'} onChange={handleWordsChange} />
                        </div>
                        <textarea
                            ref={textareaRef}
                            value={value}
                            onChange={handleChange}
                            className={
                                'mx-4 mt-2  grow max-h-[187px] bg-[#181d2d] text-[20px] focus:outline-none text-white ' +
                                'overflow-y-auto resize-none'
                            }
                            placeholder={'输入/上传你的视频文案，我们将自动帮你生成配音内容'}
                            rows={(value.length>30?3:1)}

                        />

                    </div>
                </div>

                <Model/>

            </div>
            <div className={'mt-8 flex justify-center items-center '}>
                <button className={'dashboard-button1 text-white z-20 text-[24px] font-[600]'}>
                    开始生成
                </button>
            </div>

        </div>
    )
}
export default Index;