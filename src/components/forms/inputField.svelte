<script lang="ts">
  // logic goes here
  export let editable = false;

  export let value = $$restProps.value;

  let fieldLabel = $$props.label;
  
  /** @param {MouseEvent} event */
  function handleClick(event: Event) {
    editable = ! editable;
  }
</script>

<div>
  <label for={$$props.name}>{$$props.label}</label>
  {#if !editable && value }
  <a href=# on:click={handleClick}>{value}</a>
  {/if}
  {#if editable || value == undefined }
  <input {...$$restProps} />
  {/if}
</div>

<style>
  /* styles go here */
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: auto;
  }

  div input {
    width: initial;
  }
</style>
