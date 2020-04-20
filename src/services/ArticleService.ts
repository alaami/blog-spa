import axios from "axios"

export default class ArticleService {
  public async getArticles() {
    const res = await axios.get("http://localhost:8000/api/articles");
    return res.data;
  }
  public async getArticle(link: string,accessToken: string) {
    const res = await axios.get("http://localhost:8000/api/article/" + link
    ,{
     headers: {
      Authorization: `Bearer ${accessToken}`
    //Authorization: `Bearer vlMDvtAlat7pws9jfwQkXgqbupMOT63n`
    },
      
    }
    );
    
    return res.data;
  }
}