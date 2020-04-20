<template>
<div class="event-card">
    <div class="card large">
      <div class="card-image">
          <figure class="image">
              <img :src="article.image.url" alt="Image">
          </figure>
      </div>
      <div class="card-content">
      <div class="media">
          <div class="media-left">
              <figure class="image is-96x96">
                  <img :src="article.image.url" alt="Image">
              </figure>
          </div>
          <div class="media-content">
              <p class="title is-4 no-padding">Mralaa</p>
              <p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
              <p class="subtitle is-6">Lead Developer</p>
          </div>
      </div>
        <h2 class="is-size-4 has-text-weight-bold">{{ article.titre }}</h2>
        <small class="event-date">{{ article.creationdate | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</small>
          <div class="content">
              {{ article.description }}
          </div>
        <a class="button is-dark"><strong>Read More+</strong></a>
      </div>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    props: {
    article: {
      type: Object
    }
    }
})
export default class ArticleCard extends Vue{
 
}
</script>
<style lang="scss" scoped>
.event-date {
  background-color: #151515;
  color: #fff;
  font-size: 0.75em;
  padding: 2px 10px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>