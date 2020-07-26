<script>
  import { goto } from "@sapper/app";
  import { fly, fade } from "svelte/transition";

  export let page;

  const links = ["home", "about", "work", "projects", "contact"];
</script>

<style>
  footer {
    position: absolute;
    bottom: 0;
    padding: 1.5rem 0;
    width: calc(100% - 4rem);
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .index-number {
    font-size: 1rem;
    font-weight: 400;
  }
  .link {
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: capitalize;
    transition: all 0.5s ease;
  }
  .link:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
  }
  .page-link {
    margin: 3rem 0;
    font-size: 18px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    .link {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 667px) {
    footer {
      position: relative;
      padding: 0 0 1rem 0;
      width: 100%;
    }
    footer .navigation {
      flex-direction: column;
      align-items: flex-start;
    }
    footer nav {
      margin: 0 0 1rem 0;
    }
  }
  .py-1:first-child {
    padding: 0 1rem 0 0;
  }
</style>

<footer>
  {#if page}
    <div
      class="link page-link"
      on:click={() => goto(`/${page}`)}
      in:fly={{ y: 200, duration: 1200 }}>
      {page} &rarr;
    </div>
  {/if}

  <div
    class="flex space-between navigation"
    in:fly={{ y: 200, duration: 1000 }}>
    <nav>
      {#each links as link, index}
        {#if index !== 0}
          <div class="py-1" on:click={() => goto(`/${link}`)}>
            <span class="index-number">{`0${index}`}</span>
            <span class="link">{link}</span>
          </div>
        {/if}
      {/each}
    </nav>
    <div>© {new Date().getFullYear()}</div>
  </div>

</footer>
