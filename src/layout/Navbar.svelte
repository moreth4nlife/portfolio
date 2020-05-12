<script>
  import { onMount } from "svelte";

  let isMenuOpen = false;

  onMount(async () => {});

  const handleClick = () => {
    isMenuOpen = true;
    console.log("cenas");
  };
</script>

<style>
  * {
    transition: all 0.5s ease-in-out;
  }
  .navbar {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1em 2em;
  }
  .toggle-menu:hover {
    cursor: pointer;
  }
  .bar {
    margin: 5px 0;
    max-width: 20px;
    height: 1px;
    background-color: #c57c59;
    transition: all 0.5s ease;
  }
  .bar-01 {
    width: 20px;
  }
  .overlay-menu {
    z-index: 99;
    width: 100vw;
    height: 80vh;
    visibility: hidden;
    opacity: 0;
    background: blue;
    transition: all 0.5s ease-in-out;
  }
  .overlay-menu.visible {
    visibility: visible;

    opacity: 1;
  }
</style>

<section class="navbar">
  <div class="toggle-menu" on:click={handleClick}>
    <div class="bar bar-01" />
    <div class="bar bar-02" />
  </div>
</section>

{#if isMenuOpen}
  <section class="overlay-menu visible">
    <h1>cenas</h1>
  </section>
{/if}
