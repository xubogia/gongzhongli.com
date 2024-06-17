// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";



const baseUrl='http://47.116.221.83:8000'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    console.log(req.body)
    const {url,method,data}=req.body;
    if(method=='get'){
        axios.get(baseUrl+url).then(response=>{
            console.log(response.data)
            res.status(200).json(response.data);
        })
    }else {
        axios.post(baseUrl+url,data).then(response=>{
            console.log(response.data,'posting')
            res.status(200).json(response.data);
        })
    }

}
