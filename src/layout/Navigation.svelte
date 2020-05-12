<script>
  import { goto } from "@sapper/app";
  import { fly, fade } from "svelte/transition";

  const links = ["home", "about", "work", "contact"];
</script>

<style>
  nav {
    position: absolute;
    padding: 2rem;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
  }
  .index-number {
    font-size: 1rem;
    font-weight: bold;
  }
  .link {
    margin: 0 0.5rem;
    color: #333;
    font-size: 4rem;
    font-weight: bolder;
    text-transform: capitalize;
    transition: all 0.5s ease;
  }
  .link:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 768px) {
    .link {
      font-size: 3rem;
    }
  }
</style>

<nav in:fly={{ z: 200, duration: 1000 }} out:fade>
  {#each links as link, index}
    {#if index !== 0}
      <div on:click={() => goto(`/${link}`)}>
        <span class="index-number">{`0${index}`}</span>
        <span class="link">{link}</span>
      </div>
    {/if}
  {/each}
</nav>
