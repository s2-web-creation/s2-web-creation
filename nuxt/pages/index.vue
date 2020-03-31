<template>
  <div>
    <titleLogo titleText="Welcome to S2 Web Creation!"></titleLogo>
    <section class="rounded overflow-hidden shadow-lg bg-white mt-8 p-2">
      <h2 class="sectionTitle">&quot;Speedy &amp; Simplify&quot;</h2>
      <p class="mt-4">
        はじめまして、七音です。<br />
        七音と書いてNaotoと読みます。<br />
        <span>&quot;Speedy &amp; Simplify&quot;</span>をモットーに、<br />
        「コミュニケーション主動で初動から認識の齟齬を極力削り」<br />
        「なるべく分かりやすく問題提起・方針設定し、一気にゴールを目指す」<br />
        スタイルでやっています。
      </p>

      <h3 class="mt-8 font-bold">【フロントエンド開発経験言語】</h3>
      <dl class="skillList">
        <dt class="skillTitle">HTML</dt>
        <dd class="skills"><span class="skillTag">Haml</span><span class="skillTag">erb</span><span class="skillTag">Smarty tpl</span></dd>
        <dt class="skillTitle">CSS</dt>
        <dd class="skills"><span class="skillTag">SCSS</span><span class="skillTag">Bulma</span><span class="skillTag">Tailwind</span></dd>
        <dt class="skillTitle">JS</dt>
        <dd class="skills"><span class="skillTag">Next.js + React.js</span><span class="skillTag">Nuxt.js + Vue.js</span><span class="skillTag">TypeScript</span><span class="skillTag">jQuery</span></dd>
        <dt class="skillTitle">Other</dt>
        <dd class="skills"><span class="skillTag">YAML</span><span class="skillTag">Node.js</span></dd>
      </dl>

      <h3 class="mt-8 font-bold">【開発環境など（※自身は非開発）】</h3>
      <dl class="skillList">
        <dt class="skillTitle">Server</dt>
        <dd class="skills"><span class="skillTag">RoR</span><span class="skillTag">PHP</span><span class="skillTag">Smarty</span></dd>
        <dt class="skillTitle">Other</dt>
        <dd class="skills"><span class="skillTag">Babel</span><span class="skillTag">gulp</span><span class="skillTag">CircleCI</span><span class="skillTag">AWS</span></dd>
        <dt class="skillTitle">Tools</dt>
        <dd class="skills"><span class="skillTag">GitHub</span><span class="skillTag">Slack</span><span class="skillTag">Photoshop</span><span class="skillTag">Sketch</span></dd>
      </dl>

      <p class="mt-16 text-sm">
        大学～正社員では主に組込・ファームウェア周りのエンジニアとして活動。<br />
        その後、イメージ・設計・実装をより直感的に表現できるWebの世界、<br />
        とりわけフロントエンドに興味を示し、フリーランスとして転身。<br /><br />

        HTML/CSSの範囲が得意分野。<br />
        レスポンシブ対応はもちろんのこと、<br />
        Haml,erbなど多様化するテンプレートエンジンも（ググったり先人に聞きつつ）それなりにこなす。<br />
        必要に応じて各種JS領域も対応。<br /><br />

        ゼロから自力で生み出すセンスは高いとは言えない分、<br />
        デザインさえあれば適切に再現する「よしなに力」は高い。<br /><br />

        おかげさまで、<br />
        『依頼してから完成までが早くて助かる』<br />
        『見えていなかった部分も気付くことができてよかった』<br />
        など、有り難いお言葉をたびたび頂いております。
      </p>
    </section>
    <div class="stickyLink">
      <button class="bg-blue-400 hover:bg-blue-300 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <a href="/works">Works &gt;</a>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleLogo from '~/components/TitleLogo.vue'

export default Vue.extend({
  components: {
    TitleLogo
  }
})
</script>

<style lang="scss">
.sectionTitle {
  font-size: 1.5em;
  font-weight: bold;
}

.skillList {
  display: flex;
  flex-wrap: wrap;
  margin-top: .5em;
  .skillTitle {
    flex-basis: 4.5rem;
    padding-right: .5rem;
  }
  .skills {
    flex-basis: calc(100% - 4.5rem);
    display: flex;
    flex-wrap: wrap;
    .skillTag {
      @apply bg-yellow-300 p-1 pl-6 mr-2 mb-2 rounded-l-full text-sm font-bold ;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: .8em;
        height: .8em;
        top: 50%;
        left: .5em;
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: $white;
      }
    }
  }
}

.stickyLink {
  position: sticky;
  bottom: 0;
  padding: 1rem;
  text-align: right;
}
</style>
