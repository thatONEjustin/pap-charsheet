<script lang="ts">
export let editing = false;

export let value = ($$restProps.value) ? $$restProps.value : '';

const { name, type, id, label, required, containerClass, rows, placeholder } = $$restProps;

function handleClick(event: Event) {
  editing = ! editing
}
</script>

<div class={containerClass}>
  <label for={name}>{label}</label>

  {#if !editing && value}
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href=# on:click|preventDefault={handleClick}>{value}</a>
  {/if}

  {#if type != 'textarea'}
  <input {name} {type} {id} {value} {placeholder} {required} class={(editing || value == '') ? '' : 'hidden'}/>
  {/if}

  {#if type == 'textarea'}
  <textarea {name} {id} {rows} {placeholder} {required} class={(editing || value == '') ? '' : 'hidden'}>{value}</textarea>
  {/if}
</div>

<style lang="postcss">
  div {
    @apply
      flex
      flex-col
      my-3;
  }

  div > label {
    @apply 
      pb-1
      mb-3;
      /* 
      border-b
      border-slate-400 */
  }

  div > a {
    @apply
      py-3
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
