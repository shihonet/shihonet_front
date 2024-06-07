<template>
  <div id="About">
    <FadeInOnScroll>
      <div class="mt-10 mb-10 mx-8">
        <TitlePart :title="title" />
      </div>

      <div class="mx-8 mb-12 font-bold text-site-color">
        #shihonet（しほねっと）は、
        <br />日向坂46 一期生 加藤史帆さんを応援する
        <br />非公式ファンサイトです。
      </div>

      <div class="mx-8 mb-12">
        <h1>◆運用理念</h1>
        <h2>1. 加藤史帆さんの魅力を発信したい！</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;2024年1月3日に日向坂46公式YouTubeチャンネル「日向坂ちゃんねる」にて公開された
          「【謹賀新年】メンバーそれぞれの2024年の抱負を発表します！【Let's Be
          Happy!】」にて、加藤史帆さんは今年2024年の目標をこのように公言されています。
        </p>
        <div class="flex my-5">
          <div class="w-5">
            <div class="w-1 mx-auto h-full rounded-lg bg-gray-200"></div>
          </div>
          <p class="w-full ml-2">
            今後の自分のためにも、日向坂46と言うグループをもっと引っ張っていくためにも、お芝居、美容、モデル、ラジオ、歌、
            いろんなことに挑戦していきたい！
          </p>
        </div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;日向坂46公式メッセージアプリ始め、多くの媒体で、本人は自分の活動の幅を広げたい、
          いろんなことに挑戦していきたいと、発信してくださっています。
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;ファンという立場ではあるものの、加藤史帆さんがどんなことに興味関心があったり、
          どんなお仕事をされてたりするのかを世間にもっと発信していくことをしたい。それによってファンが増えたり、
          誰かが彼女の魅力に気づいてくれたりするかもしれない。そう思いました。
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;魅力的な彼女をもっと多くの方に知っていただくことができるように、ファンとして出来る限り発信して
          いきたいと考え、 当サイトを開設いたしました。
        </p>
      </div>
    </FadeInOnScroll>
    <FadeInOnScroll>
      <div class="mx-8 mb-20">
        <h2>2. 加藤史帆さんとの想い出の宝庫に。</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;当初は、推しメンの活動を記録として残し続けたいという思いがあり、個人的にデータを残しておこうと考えておりました。
          しかし、同推しの方々にとってもあれば嬉しいのかもしれないと思いました。
        <br />
        <br />
          &nbsp;&nbsp;&nbsp;&nbsp;そこで、アイドル加藤史帆さんとの思い出を一つのサイトにまとめて、いつでも振り返ることができるようにしたい
          という想いから開設いたしました。特にブログは更新されてから読む機会はあまり無いので、より引き出しやすい形で傍に置いておくことで、
          時間があるときに見返して「こんな時期もあったなぁ」「この好きな画像ってこのブログだったんだ」などと気軽に振り返ることができるのでは
          ないかと考え、公開することにいたしました。（卒業後は権利的に公開できない可能性が考えられます…）
        </p>
      </div>
    </FadeInOnScroll>

    <FadeInOnScroll>
      <div class="mx-8 mb-20">
        <h1>◆運用方針</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;当サイトは、加藤史帆さんのファンサイトとして末永く彼女を応援するために運用してまいります。
          加藤史帆さんが芸能活動を行っている限り、最大限の運用に尽力してまいります。
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;しかし、あくまで非公式のサイトです。運用者も、加藤史帆さんを大好きに想っている普通のオタクです。
          彼女との直接的な関わりはミーグリのみですし、公式的権限は一切ございません。予めご了承ください。
        </p>
      </div>
    </FadeInOnScroll>

    <FadeInOnScroll>
      <div class="mx-8 mb-20">
        <h1>◆運用者について</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;開発、運用は、ともに
          <a
            href="https://x.com/shihonet0202"
            target="_blank"
            class="font-medium text-blue-500 underline"
          >
            @shihonet0202
          </a>
          が行っております。ご連絡はDMまでお願いいたします。
        </p>
      </div>
    </FadeInOnScroll>

    <FadeInOnScroll>
      <div class="mx-8 mb-20">
        <h1>◆おねがい</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;当サイトの運用理念（本ページ上部）にご理解いただける方のご意見は柔軟に取り入れていきたいと考えております。
          「こんなコンテンツや機能が欲しい！」などございましたら、ぜひお気軽にご要望頂けますと幸いです。
          <br />
          <br />
          <br />
          加藤史帆ちゃん推しの方。
          <br />
          ぜひ、一緒に加藤史帆ちゃんに「大好き」を届けましょう！
        </p>
      </div>
    </FadeInOnScroll>
  </div>
</template>

<script lang="ts">
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import { defineComponent } from "vue";
import TitlePart from "@/views/components/common/TitlePart.vue";

export default defineComponent({
  components: { TitlePart, FadeInOnScroll },
  setup() {
    return {
      title: "about #shihonet",
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#About {
  p {
    font-size: 16px;
    font-weight: normal;
  }

  h1 {
    font-size: 20px;
    color: #6197ff;
    font-weight: bold;
    margin-bottom: 20px;
  }

  h2 {
    color: #ff7676;
    font-weight: bold;
  }
}
</style>
