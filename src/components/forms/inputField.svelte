<script lang="ts">
  // logic goes here
  export let editable = false;

  export let value = ($$restProps.value) ? $$restProps.value : '';

  const { name, type, id, label, containerClass } = $$restProps;
  
  function handleClick(event: Event) {
    editable = ! editable;
  }
</script>

<div class={containerClass}>
  <label for={name}>{label}</label>

  {#if !editable && value}
    <a href=# on:click={handleClick}>{value}</a>
  {/if}

  {#if editable || value == ''}
    <input {name} {type} {id} {value}/>
  {/if}
</div>

<style>
  /* styles go here */
  div {
    @apply
      flex
      flex-col
      mb-3;
  }

  div > a {
    @apply
      p-3;
  }

  div input {
    @apply 
      w-full
      border
      border-black
      rounded-md
      p-3;
  }
</style>
