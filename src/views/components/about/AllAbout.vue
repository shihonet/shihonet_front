<template>
  <div id="About">
    <FadeInOnScroll>
      <div class="mt-10 mb-10 mx-6">
        <TitlePart :title="title" />
      </div>

      <div class="mx-6">
        <p>#shihonet（しほねっと）は、</p>
        <p>日向坂46 一期生 加藤史帆さんを応援する非公式ファンサイトです。</p>
        <br />
        <br />
      </div>
    </FadeInOnScroll>

    <FadeInOnScroll>
      <div class="mx-6">
        <h1>◆運用理念</h1>
        <h2>1. 加藤史帆さんとの想い出の宝庫に。</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;2024年1月3日に日向坂46公式YouTubeチャンネル「日向坂ちゃんねる」にて公開された
          「【謹賀新年】メンバーそれぞれの2024年の抱負を発表します！【Let's Be
          Happy!】」にて、加藤史帆さんは今年2024年の目標をこのように公言されています。
        </p>
        <br />
        <p>--------------</p>
        <p>
          今後の自分のためにも、日向坂46と言うグループをもっと引っ張っていくためにも、お芝居、美容、モデル、ラジオ、歌、
          いろんなことに挑戦していきたい！
        </p>
        <p>--------------</p>
        <br />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;ファンという立場ではあるものの、加藤史帆さんがどんなことに興味関心があったり、
          どんなお仕事をされてたりするのかを世間にもっと発信していくことをしたい。それによってファンが増えたり、
          誰かが彼女の魅力に気づいてくれたりするかもしれない。そう思いました。
        </p>
        <br />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;魅力的な彼女をもっと多くの方に知っていただくことができるように、ファンとして精一杯発信していきたいと考え、
          当サイトを開設いたしました。
        </p>
        <br />
        <br />
        <h2>2. 加藤史帆さんとの想い出の宝庫に。</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;アイドル加藤史帆さんとの思い出を一つのサイトにまとめて、いつでも振り返ることができるようにしたいという
          想いから開設いたしました。特にブログは更新されてから読む機会はあまり無いので、より引き出しやすい形で傍に置いておくことで、
          時間があるときに見返して「こんな時期もあったなぁ」「この好きな画像ってこのブログだったんだ」などと気軽に振り返ることができるのでは
          ないかと考え、まとめております。（卒業後は権利的に公開できない可能性が考えられます）
        </p>
        <br />
        <br />
      </div>
    </FadeInOnScroll>

    <FadeInOnScroll>
      <div class="mx-6">
        <h1>◆運用方針</h1>
        <br />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;当サイトは、加藤史帆さんのファンサイトとして末永く彼女を応援するために運用してまいります。
          加藤史帆さんが芸能活動を行っている限り、最大限の運用に尽力してまいります。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;しかし、あくまで非公式のサイトですので、彼女との直接的な接点もございませんし、全く権限はございません。
          運用者も、加藤史帆さんを大好きに想っている普通のオタクです。予めご了承ください。
        </p>
        <br />
        <br />
      </div>
    </FadeInOnScroll>

    <FadeInOnScroll>
      <div class="mx-6">
        <h1>◆運用者について</h1>
        <br />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;開発、運用は、ともに @cool_champon
          が行っております。基本的なご連絡は @shihonet よりお願いいたします。
          とりわけ急ぎや大切なご連絡は @cool_champon
          までコンタクトを取って頂いても構いません。
        </p>
        <br />
        <br />
      </div>
    </FadeInOnScroll>

    <FadeInOnScroll>
      <div class="mx-6">
        <h1>◆おねがい</h1>
        <br />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;当サイトの運用理念（本ページ上部）にご理解いただける方のご意見は柔軟に取り入れていきたいと考えております。
          「こんなコンテンツや機能が欲しい！」などございましたら、ぜひお気軽に
          @shihonet までご要望頂けますと幸いです。
        </p>
        <br />
        <br />
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
  data() {
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
  }

  h2 {
    color: #ff7676;
    font-weight: bold;
  }
}
</style>
