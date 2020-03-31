<template>
  <div>
    <titleLogo titleText="Works"></titleLogo>
    <ul class="workList mt-6">
      <li class="card" v-for="works in works" :key="works.name">
        <img class="cardImage" :src='"~/assets/images/works/" + works.name + ".jpg"' :alt="works.title" />
        <div class="cardText">
          <h2 class="workTitle">{{ works.title }}</h2>
          <p class="workDetail" v-html="works.detail"></p>
          <p class="date">date:<span class="dateTag">{{ works.date }}</span></p>
          <p class="link"><a :href="works.url" target="_blank">visit site ></a></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleLogo from '~/components/TitleLogo.vue'

export default Vue.extend({
  components: {
    TitleLogo
  },
  asyncData () {
    return {
      works: require(`~/assets/json/works.json`)
    }
  }
})
</script>

<style lang="scss">
.workList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .card {
    @apply rounded overflow-hidden shadow-lg mb-6 bg-white ;
    flex-basis: 100%;
    @include mq-up(lg) {
      flex-basis: calc(100%/2 - 1rem);
      max-width: calc(100%/2 - 1rem);
    }
    @include mq-up(xl) {
      flex-basis: calc(100%/3 - 1rem);
      max-width: calc(100%/3 - 1rem);
    }
    .cardText {
      padding: 1rem;
      .workTitle {
        font-weight: bold;
      }
      .workDetail {
        margin-top: .75rem;
        font-size: .75em;
      }
      .date {
        display: inline-block;
        margin-top: .75em;
        font-size: .75em;
        .dateTag {
          padding: 0 .5em;
          margin-left: .5em;
          background-color: $black;
          color: $white;
          border-radius: 1rem;
        }
      }
      .link {
        text-decoration: underline;
        font-size: .875em;
        text-align: right;
        & a:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
