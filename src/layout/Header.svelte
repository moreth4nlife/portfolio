<script>
  import { goto } from "@sapper/app";
  import { fade } from "svelte/transition";
</script>

<style>
  .logo {
    width: 80px;
    height: 80px;
    background-color: var(--text-color);
    mask: url("/images/favicon.svg") no-repeat center;
    mask-size: cover;
    -webkit-mask: url("/images/favicon.svg") no-repeat center;
    -webkit-mask-size: cover;
    animation: fadeIn 1s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
  .logo:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<div class="logo" on:click={() => goto('/')} in:fade />
