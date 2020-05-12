<script>
  let data = {};
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
    color: black;
    opacity: 0.5;
  }
  .submit {
    padding: 0.75rem;
    border: 1px solid black;
    width: 120px;
    background: linear-gradient(to right, black 50%, white 50%);
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
    color: black;
    transition: all 0.5s ease-in-out;
    display: block;
  }
  .text:hover {
    color: white;
  }
</style>

<div class="form-wrapper">
  <form name="contact" method="POST" data-netlify="true">
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

    <button class="submit" type="submit">
      <span class="text">Send &rarr;</span>
    </button>
  </form>
</div>
