<template>
<div>
    <section class="hero is-info is-medium is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">
                {{article.description}}
                </h1>
            </div>
        </div>
    </section>
    <div class="container">
        <!-- START ARTICLE FEED -->
        <section class="articles">
            <div class="column is-8 is-offset-2">
                <!-- START ARTICLE -->
                <div class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                                <p class="title article-title">{{article.title}}</p>
                                <div class="tags has-addons level-item">
                                    <span class="tag is-rounded is-info">@Mralaa</span>
                                    <span class="tag is-rounded">{{ article.createdAt | moment("dddd, MMMM Do YYYY") }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="content article-body">
                            <markdown-it-vue class="md-body" :content="article.content" :options="options" />
                        </div>
                    </div>
                </div>
                 <vue-disqus shortname="comments-app" :identifier="article.link"></vue-disqus>
            </div>
           
            </section>
    </div>
    
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ArticleService from '@/services/ArticleService'; 
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import VueDisqus from 'vue-disqus/dist/vue-disqus.vue'
import AuthService from '@/services/AuthService'
@Component({
    components: {MarkdownItVue,VueDisqus},
})
export default class Article extends Vue{
 public article: any="";
 private articleService: ArticleService;
 private options: any="";
 private auth0!: AuthService;

  created() {
    this.auth0=new AuthService();
    this.options= {
  markdownIt: {
    linkify: true
  },
  linkAttributes: {
    attrs: {
      target: '_blank',
      rel: 'noopener'
    }
  }
}
    this.articleService = new ArticleService; 
    this.getArticleData(); // NEW - call getEventData() when the instance is created
  }

    public async getArticleData() {
   // Get the access token from the auth wrapper
      const accessToken = await this.auth0.getAccessToken();
      // Use the eventService to call the getEventSingle() method
      
      this.articleService.getArticle(this.$route.params.link,accessToken)
      .then(
        (article => {
          this.$set(this, "article", article);
        }).bind(this)
      ).catch( ()=> {
          return this.$router.push('/404')
     });
    }
  

}
</script>
<style lang="scss">
</style>