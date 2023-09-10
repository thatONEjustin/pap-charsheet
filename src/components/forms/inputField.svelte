<script lang="ts">
  export let editing = false;

  export let value = ($$restProps.value) ? $$restProps.value : '';

  const { name, type, id, label, required, containerClass } = $$restProps;
  
  function handleClick(event: Event) {
    editing = ! editing
  }
</script>

<div class={containerClass}>
  <label for={name}>{label}</label>

  {#if !editing && value}
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={handleClick}>{value}</a>
  {/if}

  {#if type != 'textarea'}
  <input {name} {type} {id} {value} {required} class={(editing || value == '') ? '' : 'hidden'}/>
  {/if}

  {#if type == 'textarea'}
  <textarea {name} {id} {required} class={(editing || value == '') ? '' : 'hidden'}>{value}</textarea>
  {/if}
</div>

<style lang="postcss">
  div {
    @apply
      flex
      flex-col
      mb-3;
  }

  div > a {
    @apply
      p-3
      cursor-pointer;
  }

  div input,
  div textarea {
    @apply 
      w-full
      border
      border-black
      rounded-md
      p-3;
  }
</style>
