<template>
  <header id="header">
    <div class="headerLogo">
      <a href="/"><img src="~/assets/images/logo_s2wc.png" alt="S2WC Logo" /></a>
    </div>
    <div id="header-nav-wrapper">
      <input id="header-nav-switch" type="checkbox" />
      <label id="header-nav-icon" for="header-nav-switch"><span></span></label>
      <label id="header-nav-bg" for="header-nav-switch"></label>
      <div id="header-nav-content">
        <label id="header-nav-close" for="header-nav-switch"></label>
        <ul class="list">
          <li class="item"><a class="link" href="/">Home</a></li>
          <li class="item"><a class="link" href="/works">Works</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
#header {
  position: fixed;
  width: 100%;
  height: $header-height;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $white;
  border-bottom: 1px solid $bg-color;
  z-index: 100;
  .headerLogo {
    width: 120px;
    margin: .5rem;
  }
  #header-nav-switch {
    display: none;
    &:checked {
      & ~ #header-nav-bg {
        display: block;
        opacity: .5;
      }
      & ~ #header-nav-content {
        transform: translateX(0);
      }
    }
  }
  #header-nav-icon {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 1rem;
    vertical-align: middle;
    span {
      &, &::before, &::after {
        content: "";
        display: block;
        position: absolute;
        width: 30px;
        height: 4px;
        top: 13px;
        background-color: $black;
        border-radius: 2px;
        cursor: pointer;
      }
      &::before {
        top: -9px;
      }
      &::after {
        top: 9px;
      }
    }
  }
  #header-nav-bg {
    display: none;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 0;
  }
  #header-nav-content {
    overflow: auto;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1001;
    width: 90%;
    max-width: 200px;
    background-color: $white;
    border-radius: 0 0 0 .5rem;
    transition: .2s ease-in-out;
    transform: translateX(105%);
    .item {
      padding: .5rem 1rem;
      &:not(:last-of-type) {
        border-bottom: 1px solid $border-color;
      }
      .link {
        position: relative;
        display: inline-block;
        width: 100%;
        font-size: 1.25em;
        &::after {
          content: ">";
          display: block;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
