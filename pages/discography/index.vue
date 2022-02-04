<template>
  <main class="discograpy">
    <page-title title="discograpy" />
    <div class="page-body">
      <ul class="tune-list">
        <li v-for="tuneItem in tuneList" :key="tuneItem.index" class="tune-list__item">
          <h2 class="tune-list__item__title">{{ tuneItem.title }}</h2>
          <ul class="tune-list__item__info">
            <li v-for="infoItem in tuneItem.infoList" :key="infoItem.index" class="tune-list__item__info__item">
              <dl class="tune-list__item__info__item__inner">
                <dt class="tune-list__item__info__item__inner__title">{{ infoItem.title }}</dt>
                <dd class="tune-list__item__info__item__inner__content">{{ infoItem.content }}</dd>
              </dl>
            </li>
          </ul>
          <button v-if="tuneItem.hasLyrics" class="tune-list__item__modal-btn help_link__button" @click="changeLyric(tuneItem.lyrics), openModal()">
            歌詞を見る
          </button>
        </li>
      </ul>
    </div>
    <Modal v-if="modalFlag" @close-modal="closeModal" >
      <div style="white-space:pre-wrap;">{{ lyrics }}</div>
    </Modal>
    <breadcrumb :breadcrumbs="breadcrumbs" />
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'DISCOGRAPHY',
      meta: [
        { hid: 'keyword', name: 'keyword', content: 'OVERFLOW, オフロウ, アイドル, ディスコグラフィー' },
        { hid: 'description', name: 'description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。こちらはディスコグラフィーページです。OVERFLOWの楽曲に関する情報をお届けしています。' },
        { hid: 'og:url', property: 'og:url', content: 'http://overflowhp.com/discography/' },
        { hid: 'og:title', property: 'og:title', content: 'DISCOGRAPHY｜OVERFLOWオフィシャルサイト' },
        { hid: 'og:description', property: 'og:description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。こちらはディスコグラフィーページです。のOVERFLOWの楽曲に関する情報をお届けしています。' }
      ]
    }
  },
  data () {
    return {
      modalFlag: false,
      lyrics: '',
      breadcrumbs: [
        {
          name: 'home',
          path: '/'
        },
        {
          name: 'discograpy',
          path: ''
        }
      ],
      tuneList: [
        {
          index: 1,
          title: 'Overture',
          hasLyrics: false,
          infoList: [
            {
              index: 1,
              title: 'compose',
              content: '渡邉俊彦'
            },
            {
              index: 2,
              title: 'arrangement',
              content: '渡邉俊彦'
            },
            {
              index: 3,
              title: 'mastering engineer',
              content: '三好翔太'
            },
            {

              index: 4,
              title: 'compose',
              content: '渡邉俊彦'
            }
          ]
        },
        {
          index: 2,
          title: '君だけのスピカ',
          hasLyrics: true,
          lyrics: '遠く離れたあなたの声が聞きたくて\nそんな悩みは　ワガママかな？\n伝えて　私は\nあなただけのスピカ\n\n窓の外に広がる空に\nいくつも隠れている\n小さな光\n\nずっと憧れてたから\n自分らしくいられる\nみんなのことを\n\n既読のまま\n返事を待ってる時間\n気持ちだけが\n空回りしていくよ\n忙しい？　わかってる\nだけど好きだ\n\n遠く離れたあなたの声が聞きたくて\n光とどけて　この長い夜を超えよう\nいちばん（いちばん）\n輝いていると　言ってほしかった\n\n言葉じゃなくちゃ\nわからない私だからさ\nそんな悩みは　ワガママかな？\n伝えて　私は\nあなただけのスピカ\n\n後になれば　些細なできごと\nわかっているけど　切ない\n\n次の話題わたしが考えなくちゃ\n待っていても恋は進まないから\nこんなにも　辛いのに\nやっぱ好きだ\n\nあなたの側で輝いている誰かより\n私に何ができるか迷ってしまうよ\n心は（心は）\n目には見えないし　いつも不安でさ\n\n時々みせる無邪気すぎる笑顔だけが\n星空の中ある目印\nいちばん輝く　理想の私\n\n何度も繰り返す昼と夜の続き\n眩しい街からは星もみえない\nそれでも届く日を信じて\n輝き続ける\n\n遠く離れて過ごす君の住む場所まで\n光とどけて　この長い夜を超えよう\nいちばん（いちばん）\n輝いていると　言ってほしかった\n\n言葉じゃなくちゃ\nわからない私だからさ\nそんな悩みは　ワガママかな？\nどんな（どんな）ことが（ことが）\n待ってる（この星空に）\nいちばん光る\nあなただけのスピカ',
          infoList: [
            {
              index: 1,
              title: 'lyrics',
              content: '中原徹也'
            },
            {
              index: 2,
              title: 'compose',
              content: '早川博隆、渡邉俊彦'
            },
            {
              index: 3,
              title: 'arrangement',
              content: '渡邉俊彦'
            },
            {
              index: 4,
              title: 'violin',
              content: '半田彬倫'
            },
            {
              index: 5,
              title: 'piano',
              content: '半田彬倫'
            },
            {
              index: 6,
              title: 'guitar',
              content: '浅田大貴'
            },
            {
              index: 7,
              title: 'bass',
              content: 'HIROTOMO'
            },
            {
              index: 8,
              title: 'recording & mixing engineer',
              content: '絢瀬つばさ'
            }
          ]
        },
        {
          index: 3,
          title: '刹那の涙',
          hasLyrics: true,
          lyrics: '誰にでもあるよ　隠したいこと\n胸の奥のほう　ひとつやふたつ\n\n誰にも言わない　みんなそう言って\nいつの間にか　知られていくね\n\nなぜか初恋は（みんな）\n叶わないらしい（なんで？）\nそんなの納得できない（そうでしょ）\n追いかけてみたい（きっと）\nあのころの夢を（ずっと）\nそんな弱気な私にはさよなら\n（Goodbye me）\n\nまたたく間に世界は\n変わっていくパノラマ\nおいてかないでと願う\n\n誰もいない砂浜\n風が背中を押す\n波が聞いてくれる\n刹那に涙\n\nどこでもいい　ここじゃないどこかへ\n季節を追いかけ迷う街並み\n\n私だけひとり\n進めていない\n他人事みたいに思ってた\n\nイヤホンをすれば（ずっと）\n誰かの声にも（そっと）\n心は　圏外になるし（聞こえない）\nみんなみたいには（まだ）\n良いコになれない（やだ）\nわがままではダメと　わかってるけど\n（Goodbye me）\n\n幸せはいつだって\n手のひらのガラス玉\n優しく握りしめてた\n\n失くしてからはじめて\n大切だと気づく\n君がいない　余白\nさよなら涙\n\nGoodbye me\nまたたく間に世界は\n変わっていくパノラマ\nおいてかないでと願う（願う）\n\n誰もいない砂浜\n風が背中を押す\n波の（波の）音に（音に）消えてく\n刹那の涙',
          infoList: [
            {
              index: 1,
              title: 'lyrics',
              content: '中原徹也'
            },
            {
              index: 2,
              title: 'compose',
              content: '渡邉俊彦'
            },
            {
              index: 3,
              title: 'arrangement',
              content: '渡邉俊彦'
            },
            {
              index: 4,
              title: 'violin',
              content: '半田彬倫'
            },
            {
              index: 5,
              title: 'piano',
              content: '半田彬倫'
            },
            {
              index: 6,
              title: 'recording & mixing engineer',
              content: '絢瀬つばさ'
            }
          ]
        },
        {
          index: 4,
          title: 'フリージア',
          hasLyrics: true,
          lyrics: 'ねえ春の暮れが\n暖かいんだね\nこんな一人でいるのが\n静かで冷たいとは\n知らなかった\nぽつり囁くコトバは\n\n街路灯に照らした\n昔好きだった花だ\n\nもういないんだったね\nもういないんだあの日のTiny...\n好きな人と私は\n夏が来るね\n春が過ぎ去って行くんだねRainy...\n青い春と咲かないフリージア\n\nねえアスファルトに\n立つ陽炎\nこんな道すら愛しく\n恋しくなるなんてさ\n知らなかった\nぽつりつぶやくメロディ\n\nいつだってそばにいた\n昔好きだった歌だ\n\nもう少しだったね\nもう少しで届きそうなWindy...\nとても掴みたいもの\n夏が来たら\n少し背伸びをするんだねCorny...\n青い春と儚いフリージア\n\nきっと明日は\n雨も上がるから\n胸いっぱいに今を歌うよ\n\nもういないんだったね\nもういないんだあの日のTiny...\n好きな花と私は\n夏が来るね\n春が過ぎ去って行くんだねSunny\n青い春と咲かないフリージア',
          infoList: [
            {
              index: 1,
              title: '作曲',
              content: '浅田大貴'
            },
            {
              index: 2,
              title: '編曲',
              content: '浅田大貴'
            },
            {
              index: 3,
              title: 'guitar',
              content: '浅田大貴'
            },
            {
              index: 4,
              title: 'bass',
              content: '浅田大貴'
            },
            {
              index: 5,
              title: 'recording & mixing engineer',
              content: '絢瀬つばさ'
            }
          ]
        }
      ]
    }
  },
  methods: {
    openModal () {
      this.modalFlag = true
    },
    closeModal () {
      this.modalFlag = false
    },
    changeLyric (lyrics) {
      this.lyrics = lyrics
    }
  }
}
</script>

<style lang="scss" scoped>
.page-body {
  margin-top: 4rem;
  max-width: 68rem;
}

.tune-list {
  padding: 0 1.5rem;
}

.tune-list__item {
  &+& {
    margin-top: 4rem;
  }
}

.tune-list__item__title {
  font-size: 2rem;

  &::before {
    content: '○';
    margin-right: 0.6rem;
  }
}

.tune-list__item__info {
  margin-top: 1rem;
  font-size: 1.6rem;

  &__item {
    display: flex;

    &::before {
      content: '・';
    }
  }
}

.tune-list__item__info__item__inner {
  display: flex;
  flex-wrap: wrap;

  &__title {
    font-size: 1.4rem;
    text-transform: capitalize;
  }

  &__title::after {
    content: '：';
    margin-right: 0.4rem;
  }

  &__content {
    font-size: 1.4rem;
  }
}

.tune-list__item__modal-btn {
  display: block;
  margin: 2rem auto auto auto;
}

@media screen and (min-width: 769px) {
  .tune-list {
    padding: 0;
  }
  .tune-list__item__info {
    display: flex;
    flex-wrap: wrap;

    &__item {
      margin-top: 0.4rem;
      margin-right: 2rem;
    }
  }
}
</style>
