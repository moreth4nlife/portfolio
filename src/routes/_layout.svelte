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
  @media screen and (max-width: 667px) {
    main {
      min-height: 100vh;
      height: 100%;
    }
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
