<script>
  import { Header } from "../layout/modules";

  let dark = false;
</script>

<style>
  main {
    position: relative;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    height: 100vh;
  }
  .toggle-dark {
    position: relative;
    display: block;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: url("/images/sun.svg") no-repeat center, white;
    background-size: 18px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.08);
    transition: all 1s ease-in-out;
  }
  .dark {
    background: url("/images/moon.svg") no-repeat center, white;
    background-size: 18px;
    transition: all 1s ease-in-out;
  }
</style>

<input id="dark-mode-toggle" type="checkbox" />

<main>
  <section class="flex space-between header-wrapper">
    <Header />
    <label
      for="dark-mode-toggle"
      class="toggle-dark"
      class:dark
      on:click={() => (dark = !dark)} />
  </section>
  <slot />
</main>
