<script>
  import { goto } from "@sapper/app";
  import { afterUpdate } from "svelte";
  import { fade } from "svelte/transition";
  import Typewriter from "svelte-typewriter";
  import { Footer } from "../layout/modules";

  let visible = true;

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
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
  }
  .cv-wrapper div h3,
  h4 {
    font-weight: 700;
  }
  .cv-wrapper h3 {
    font-size: 1.2rem;
  }
  .stack-fields {
    columns: 2;
  }
  .stack-fields {
    margin-top: 35px !important;
  }

  .stack-fields li {
    margin: 0;
    padding: 0 0 5px 0 !important;
  }
  ul li {
    margin: 15px 0;
  }
</style>

<svelte:head>
  <title>Work | Marcos Alves</title>
</svelte:head>

<div class="content-wrapper">
  {#if visible}
    <div in:fade>
      <span class="pc-user">
        mbpMA:~
        <span class="blue">marcosalves$</span>
      </span>
      <Typewriter interval={75} cursor="blue">
        <h3>open cv.pdf</h3>
      </Typewriter>
    </div>
  {:else}
    <section class="list-block" in:fade={{ duration: 1000 }}>
      <div class="cv-wrapper">
        <h3>Experience</h3>
        <ul>
          <li>
            <h4>Front-end Developer</h4>
            Losch Digital Lab
            <br />
            Jun 2019 - Present
          </li>
          <li>
            <h4>Front-end Developer</h4>
            Bodum
            <br />
            Aug 2018 - Jun 2019
          </li>
          <li>
            <h4>Web Designer</h4>
            MeshPorto
            <br />
            Jan 2018 - Jun 2018
          </li>
        </ul>
      </div>
      <div>
        <h3>Education</h3>
        <ul>
          <li>
            <h4>Bachelors Degree</h4>
            Digital Communication and Multimedia
            <br />
            Instituto Universitário da Maia
          </li>
          <li>
            <h4>High School Degree</h4>
            Multimedia
            <br />
            Instituto das Artes e da Imagem
          </li>
        </ul>
      </div>
      <div>
        <h3>Stack</h3>
        <ul class=" stack-fields">
          <h4>{''}</h4>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Svelte / Sapper</li>
          <li>Git</li>
          <li>JSON</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </section>
  {/if}
</div>

<Footer page={'contact'} />
