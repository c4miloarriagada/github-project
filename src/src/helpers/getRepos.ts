import axios, { AxiosResponse } from "axios";

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

 export  const getRepos = async( ) =>{
    try {
      const response = await axios.post<AxiosResponse | null | GetReposResponse>(
        "http://localhost:8080/api/repos",
        {
          _id: process.env.REACT_APP_ID,
        }
      );
  
      return response.data;
    } catch (error) {
      console.log(error);
    }
} 
