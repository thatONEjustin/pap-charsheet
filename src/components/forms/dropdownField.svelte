<script>

  export let options = ['Test', 'Default']
  export let value = ($$restProps.value) ? options.find((item) => item == $$restProps.value) : options[0]

  const { name, type, id, label, required, containerClass } = $$restProps
  

  let active = false

  function showList(event) {
    active = ! active
  }

  function select(option) {
    value = option
    active = false
    return
  }
</script>

<div class={containerClass}>
  <label for={name}>{label}</label>

  <div class="DropdownContainer">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href=# class="cursor-pointer" on:click|preventDefault={showList}>{(value == '') ? 'Default' : value}</a>

    <div class:hidden={!active} class="Dropdown">
      {#each options as option}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href=# class="Dropdown-option" on:click|preventDefault={select(option)}>{option}</a>
      {/each}
    </div>
  </div>

  <input {name} type="hidden" {value} class="hidden" />
</div>

<style lang="postcss">
  .DropdownContainer {
    @apply 
      border 
      border-slate-600 
      rounded-md 
      p-3 
      relative;
  }
  .Dropdown {
    @apply 
      absolute 
      bg-white 
      rounded-md 
      border 
      border-slate-400 
      min-w-max;

    &-option {
      @apply
        px-3 
        py-2 
        cursor-pointer
        ;
    }
  }
</style>