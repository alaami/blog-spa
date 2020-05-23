import axios from "axios"

export default class ArticleService {
  public async getArticles() {
    const res = await axios.get(process.env.VUE_APP_API_MANAGER_URL + "/articles");
    return res.data;
  }
  public async getArticle(link: string,accessToken: string) {
    const res = await axios.get(process.env.VUE_APP_API_MANAGER_URL + "/article/" + link
    ,{
     headers: {
      Authorization: `Bearer ${accessToken}`
    },      
    }
    );
    
    return res.data[0];
  }
}