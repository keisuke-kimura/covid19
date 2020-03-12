<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      企業の皆様・はたらく皆様へ
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <TextCard :title="item.title" :link="item.link" :body="item.body" />
    </div>
  </div>
</template>
<script lang="ts">
import TextCard from '@/components/TextCard.vue'
export default {
  components: {
    TextCard
  },
  data() {
    return {
      items: [
        {
          title: '中小企業者支援について',
          link: 'https://www.pref.chiba.lg.jp/keishi/ncov/ncov-index.html',
          body:
            '相談窓口・支援策について'
        },
        {
          title:
            '農林漁業者向けの支援',
          link: 'https://www.pref.chiba.lg.jp/nousui/nousaigaisien/n_coronavirus_agri.html',
          body:
            '新型コロナウイルス感染症の影響により、農林漁業経営の維持が困難な農林漁業者を対象に、一時的な影響に対し、緊急的に対応するために必要な長期資金を日本政策金融公庫が融資しています。'
        },
        {
          title: '介護サービス事業者向け',
          link:
            'https://www.pref.chiba.lg.jp/hoken/tetsuzuki/kaigo/ncov-index.html',
          body:
            ''
        },
        {
          title: '社会福祉事業者向け',
          link:
            'https://www.pref.chiba.lg.jp/kenshidou/shafuku-hojin/ncov-index.html',
          body:
            ''
        }
      ]
    }
  },
  head() {
    return {
      title: '企業の皆様・はたらく皆様へ'
    }
  }
}
</script>
<style lang="scss">
.Worker {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
a {
  @include text-link();
}
</style>
