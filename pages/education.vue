<template>
  <div class="Education">
    <h2 class="Education-Heading">
      教育に関する情報について
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
          title: '学習支援について',
          link: 'https://www.pref.chiba.lg.jp/kyouiku/shidou/press/2019/gakushien.html',
          body:
            '千葉県教育委員会では、新型コロナウイルス感染症対策のための臨時休業期間における児童生徒の学習支援方策の一つとして、学習教材である小学生向けの「ちばっ子チャレンジ100」、中学生向けの「ちばのやる気学習ガイド」、小学生及び中学生向けの「家庭学習のすすめ」を公表しています。臨時休業期間中の自宅等の学習に、ぜひ、ご活用ください。'
        },
        {
          title:
            '県立高等学校及び県立中学校の臨時休業について',
          link: 'https://www.pref.chiba.lg.jp/kyouiku/shidou/press/2019/nenndomaturinnjikyuugyou.html',
          body:
            '県立高等学校及び県立中学校における新型コロナウイルス感染症に伴う令和元年度学年末休業までの臨時休業についてお知らせします。'
        },
        {
          title: '特別支援学校の臨時休業について',
          link:
            'https://www.pref.chiba.lg.jp/hoken/tetsuzuki/kaigo/ncov-index.html',
          body:
            '県立特別支援学校における新型コロナウイルス感染症に伴う令和元年度学年末休業までの臨時休業についてお知らせします。'
        }
      ]
    }
  },
  head() {
    return {
      title: '教育に関する情報について'
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
