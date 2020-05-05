<template>
  <div class="events container">
    <div class="columns is-multiline">
      <div v-for="article in articles" :article="article" :key="article.id" class="column is-one-quarter">
        <router-link :to="`/article/${article._link}`">
          <ArticleCard :article="article" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import ArticleCard from "@/components/ArticleCard.vue";
import ArticleService from '@/services/ArticleService'; 
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
      ArticleCard
  },
})
export default class ArticlesList extends Vue{
  
  public article: string="";
  public articles: string="";
  private articleService!: ArticleService;

 
  
  created() {
    this.articleService = new ArticleService; 
    this.getArticlesData(); // NEW - call getEventData() when the instance is created
  }

  public async getArticlesData() {
    this.articleService.getArticles()
      .then(
        ((articles: any) => {
          this.$set(this, "articles", articles);
        }).bind(this)
      );
    }
  
}
</script>
<style lang="scss" scoped>
.events {
  margin-top: 100px;
  text-align: center;
}
</style>