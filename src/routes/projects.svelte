<script>
  import { goto } from "@sapper/app";
  import { afterUpdate } from "svelte";
  import { fade } from "svelte/transition";
  import Typewriter from "svelte-typewriter";
  import { Footer } from "../layout/modules";
  import data from "./_data/projects";

  const projects = data;
  let visible = false;

  afterUpdate(() => {
    setTimeout(() => {
      visible = false;
    }, 1500);
  });
</script>

<style>
  .list-block {
    margin: 25px 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 15px;
  }
  .project-wrapper {
    min-height: 400px;
    border-radius: 15px;
    border: 1px solid #333;
  }
  .card-media:hover img {
    cursor: pointer;
    opacity: 0.7;
  }
  .card-media {
    padding: 0;
    border-radius: 15px 15px 0 0;
    height: fit-content;
    min-height: 180px;
  }
  .card-media img {
    width: 100%;
    height: 100%;
    border-radius: 15px 15px 0 0;
    object-fit: contain;
    transition: opacity 0.25s ease-in-out;
  }
  .card-body {
    padding: 1.5rem;
  }
  .project-title {
    font-size: 24px;
    font-weight: bold;
  }
  .link {
    padding: 3px 0;
    border-bottom: 0.5px solid #333;
    transition: opacity 0.25s ease-in-out;
  }
  .link:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  @media screen and (max-width: 667px) {
    .list-block {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<svelte:head>
  <title>Projects | Marcos Alves</title>
</svelte:head>

<div class="content-wrapper">
  {#if visible}
    <div in:fade>
      <span class="pc-user">
        mbpMA:~
        <span class="blue">marcosalves$</span>
      </span>
      <Typewriter interval={75} cursor="blue">
        <h3>cd projects</h3>
      </Typewriter>
    </div>
  {:else}
    <section class="list-block" in:fade={{ duration: 1000 }}>
      {#each projects as project}
        <div class="project-wrapper">
          <div
            class="card-media"
            on:click={() => {
              window.open(project.url, '_blank');
            }}>
            <img
              src={`images/${project.image}`}
              alt={`${project.title} title`} />
          </div>
          <div class="card-body">
            <span class="project-title">{project.title}</span>
            <p class="project-description">{project.description}</p>

            <span
              class="link"
              on:click={() => {
                window.open(project.repoLink, '_blank');
              }}>
              Github Repo &rarr;
            </span>
          </div>
        </div>
      {/each}
    </section>
  {/if}
</div>

<Footer page={'contact'} />
