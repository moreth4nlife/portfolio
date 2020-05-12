<script>
  import { goto } from "@sapper/app";
  import { fade } from "svelte/transition";
  import Typewriter from "svelte-typewriter";
  import { Footer } from "../layout/modules";
</script>

<style>

</style>

<svelte:head>
  <title>About | Marcos Alves</title>
</svelte:head>

<div class="content-wrapper">
  <div in:fade>
    <span class="pc-user">
      mbpMA:~
      <span class="blue">marcosalves$</span>
    </span>
    <Typewriter interval={75} cursor="blue">
      <h3>
        Hello. My name is Marcos Alves and I'm a front-end developer based in
        Porto, Portugal.
      </h3>
    </Typewriter>
  </div>
</div>

<Footer page={'work'} />
