import React, { useEffect, useState } from 'react'

const Ourvideos = () => {
  const [data,setData]=useState([])
  const database=[];
  var [datasource,setDatasource]=useState([])
  const api_key = "AIzaSyD3jUEpMAGqbJQh72nViL-82KwAWjOs3m8";


const playlist_http= "https://www.googleapis.com/youtube/v3/playlists?";
const playlist_items= "https://www.googleapis.com/youtube/v3/playlistItems?";
const channel="UCskzM6JjAIe9auJoPjPs4kg";

async function video(){
  await fetch(playlist_http + new URLSearchParams({
      key: api_key,
      channelId:channel,
      part:['snippet','contentDetails'],
       maxResults: 30,
       regionCode: 'IN'

  }))
  .then( res => res.json())
  .then( (dat)=>{
    setData(dat.items)

}

  )}
const list=(playlist,title)=>{
  fetch(playlist_items + new URLSearchParams({
    key: api_key,
    playlistId:playlist,
    part:'contentDetails',
     maxResults: 30,
     regionCode: 'IN'

}))
.then(res => res.json())
.then(data => {data.items.map((val)=>{
  let videoid=val.contentDetails.videoId;
      
        
        // console.log(val.contentDetails.videoId);
        const video={
            src:`https://www.youtube.com/embed/${videoid}`,
            title:title,
            hrf:`https://youtu.be/${videoid}`
        }
        database.push(video)
      
      } ) }
      
) 

}
const filtt=(e)=>{
 
    setDatasource(database.filter((v)=>{
      return e.target.value===v.title;
    }))
   
  }






useEffect(()=>{
  video()

},[])


  return (
    <div>
        <section className="menu" id="ourvideos">
        <h1 className="heading"><span>our</span> videos </h1>
        <div className='filt'>

        <select name="filter" id="filter" onChange={(e)=>{filtt(e)}}>
        <option value="all" >--Please choose type of video you want--</option>
        {
           data.map((value,i)=>{
            let playlist=value.id;
          
            let title=value.snippet.title
            list(playlist,title)
            return(
              <option value={title} id={i}>{title}</option>
            )
            } )
          }
          </select>  
          </div> 

          <div className='container'>

        {
          datasource.map((val,i)=>{
            return(
              <div className="box" id={i}>
          <iframe  src={val.src} title={val.title}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
          <h3>video title</h3>
          <p>video description of 10-15 words</p>
          <a href={val.hrf} className="btn">click here to Play</a>
      </div>
            )
          })
        }
        </div>
          
       
    </section>
    </div>
  )
}

export default Ourvideos;