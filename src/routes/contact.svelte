<script>
  import { goto } from "@sapper/app";
  import { fade } from "svelte/transition";
  import Typewriter from "svelte-typewriter";
  import { Footer } from "../layout/modules";
  import { Form } from "../components/components";

  let data = {};

  function save(event) {
    data = event.detail;
  }
</script>

<style>
  h1 {
    color: #333;
    font-size: 4rem;
    font-weight: bolder;
  }
  @media screen and (min-width: 768px) {
    .form {
      width: 50%;
    }
  }
</style>

<svelte:head>
  <title>Contact | Marcos Alves</title>
</svelte:head>

<div class="content-wrapper">
  <div in:fade>
    <h1>Say hello</h1>
    <div class="form">
      <Form {data} on:send={event => save(event)} />
    </div>
  </div>
</div>

<Footer />
