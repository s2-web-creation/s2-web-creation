<template>
  <footer id="footer">
    <!-- <ul class="footerLinks">
      <li class="item">
        <a href="https://github.com/s2-web-creation/s2-web-creation" target="_blank">GitHub</a>
      </li>
      <li class="item">
        <a href="https://qiita.com/seven_sound" target="_blank">Qiita</a>
      </li>
      <li class="item">
        <a href="https://twitter.com/7sounD_" target="_blank">Twitter</a>
      </li>
    </ul> -->
    <p class="footerCopyright">© 2020 S2 Web Creation</p>
  </footer>
</template>

<style lang="scss">
#footer {
  width: 100%;
  background-color: $black;
  color: $white;
  .footerLinks {
    text-align: right;
    .item {
      margin: 1rem 1rem 0 0;
      display: inline-block;
      text-decoration: underline;
    }
  }
  .footerCopyright {
    text-align: center;
    padding: 1rem;
    font-size: 12px;
    color: $pale-white;
  }
}
</style>
