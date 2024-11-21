import React from 'react'   
import axios from 'axios'
import {useInfiniteQuery} from 'react-query'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const postlList = ({pageParam=1})=>{ 
  return axios.get('http://localhost/api/article-list?id='+pageParam)
}
const UserList = () => {
  const location = useLocation(); 
 useEffect(() => {
    console.log('URL berubah:', location.pathname);
  }, [location]);

  const {hasNextPage,fetchNextPage} =  useInfiniteQuery(['infiniteUser'],postlList,{

    getNextPageParam:(_lastPage,pages)=>{
      if(pages.length < 5){
        return pages.length + 1
      }else{
        return undefined
      }
    }
  })
 console.log(hasNextPage)
  return (
    <div className='text-ms'>
      <div>UserList Page</div>   
      <button onClick={fetchNextPage}>Next</button>
    </div>
  )
}

export default UserList