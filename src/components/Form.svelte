<script>
  import { afterUpdate, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let data = {};

  function dispatchData() {
    dispatch("send", data);
  }
</script>

<style>
  .form-wrapper {
    display: flex;
    flex-direction: column;
  }
  .form-group {
    margin: 15px 0;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
  }
  input,
  textarea {
    padding: 1rem;
    background: #fafafa;
    border: none;
  }
  textarea {
    resize: none;
  }
  input,
  textarea:focus {
    box-shadow: none;
    outline: none;
  }
  label {
    font-size: 14px;
    color: #333;
    opacity: 0.5;
  }
  .submit {
    padding: 0.75rem;
    border: 1px solid #333;
    width: 120px;
    background: linear-gradient(to right, #333 50%, white 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.4s ease-in-out;
    box-shadow: none;
    outline: none;
    font-size: 14px;
  }
  .submit:hover {
    background-position: left bottom;
  }
  .submit:hover .text {
    color: white;
  }
  .text {
    color: #333;
    transition: all 0.5s ease-in-out;
    display: block;
  }
  .text:hover {
    color: white;
  }
</style>

<div class="form-wrapper">
  <div class="form-group">
    <label for={data.name}>Name</label>
    <input type="text" bind:value={data.name} required />
  </div>
  <div class="form-group">
    <label for={data.email}>Email</label>
    <input type="email" bind:value={data.email} required />
  </div>
  <div class="form-group">
    <label for={data.subject}>Subject</label>
    <input type="text" bind:value={data.subject} required />
  </div>
  <div class="form-group">
    <label for={data.message}>Message</label>
    <textarea rows={5} bind:value={data.message} required />
  </div>

  <button class="submit" on:click={dispatchData}>
    <span class="text">Send &rarr;</span>
  </button>
</div>
