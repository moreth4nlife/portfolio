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
  h2 {
    color: #333;
    font-size: 1.5rem;
    font-weight: bolder;
  }
  .link {
    margin: 0 0.5rem;
    color: #333;
    font-size: 1rem;
    text-transform: capitalize;
    transition: all 0.5s ease;
    text-decoration: none;
  }
  .link:first-child {
    margin: 0 0.5rem 0 0;
  }
  .link:not(:first-child) {
    margin: 0 0.5rem;
  }
  .link:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
  }
  .email {
    font-weight: bolder;
    text-transform: none;
  }
  @media screen and (min-width: 768px) {
    .form {
      width: 50%;
    }
  }
  @media screen and (max-width: 667px) {
    h2 {
      font-size: 1.25rem;
    }
    .social {
      display: flex;
      flex-direction: column;
    }
    .link,
    .link:not(:first-child) {
      margin: 0;
    }
  }
</style>

<svelte:head>
  <title>Contact | Marcos Alves</title>
</svelte:head>

<div class="content-wrapper">
  <div in:fade>
    <h2>If you're interested in getting to know me you can find me @</h2>

    <div class="social">
      <span class="link email">marcosalves.work@gmail.com</span>
      <a href="https://github.com/moreth4nlife" class="link">GitHub</a>
      <a href="https://www.linkedin.com/in/marcosalvesdesign/" class="link">
        LinkedIn
      </a>
    </div>

    <!-- <div class="form">
      <Form {data} on:send={event => save(event)} />
    </div> -->
  </div>
</div>

<Footer />
