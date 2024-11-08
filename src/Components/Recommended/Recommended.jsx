import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnai3 from '../../assets/thumbnail3.png'
import thumbnai4 from '../../assets/thumbnail4.png'
import thumbnai5 from '../../assets/thumbnail5.png'
import thumbnai6 from '../../assets/thumbnail6.png'
import thumbnai7 from '../../assets/thumbnail7.png'
import thumbnai8 from '../../assets/thumbnail8.png'
import { API_KEY } from '../../data'

const Recommended = ({categoryId}) => {
    const[apiData,setApiData] = useState([]);
    const fetchData = async () => {
      const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}=${API_KEY}`  
      await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
    }
    useEffect(()=>{

    fetchData();

    },[])

    
  return (
   <div className="recommended">
    {apiData?.map((item,index)=>{
        return (

         <div key={index} className="side-video-list">
        <img src={item.snippet.thumbnails.medium.url} alt="" />
        <div className="vid-info">
            <h4>Best Channel that help you to be a web developer</h4>
            <p>Greatstack</p>
            <p>199K Views</p>
        </div>
    </div>
        )

    })}
    
          
        

    
    
    
   </div>
  )
}

export default Recommended



