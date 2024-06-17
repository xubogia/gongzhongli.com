import Layout from "@/components/layout/preview"
import Main from "@/components/preview"
import getServerSideProps from '@/pages/api/verify';
export default function Home(props:any) {
    return (
        <Layout Main={Main} id={props.id}/>
    );
}
// export { getServerSideProps }; // 导出 getServerSideProps