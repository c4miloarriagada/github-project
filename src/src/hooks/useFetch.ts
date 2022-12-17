import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import { getRepos } from '../helpers/getRepos';

type Repos = {
  _id: string;
  full_name: string;
  html_url: string;
  update_at: Date;
  language: string;
  description: string;
};

type GetReposResponse = {
  data: Repos[];
};


export const useFetch =  () => {
  
  const [repos, setRepos] = useState<AxiosResponse | null | any>([])

    const getFetch = async()=>{
      let data= await getRepos()
      setRepos(data)
    }

    useEffect(()=>{
      getFetch()
    },[])

      
    return {
      repos
    }


};
