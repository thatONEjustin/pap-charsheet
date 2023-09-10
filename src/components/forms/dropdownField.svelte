<script lang="ts">

  export let options: Array = ['Test', 'Default']
  export let value = ($$restProps.value) ? options.find((item: String) => item == $$restProps.value) : options[0]

  const { name, type, id, label, required, containerClass } = $$restProps
  

  let active = false

  function showList(event: Event) {
    active = ! active
  }

  function select(option: String) {
    value = option
    active = false
  }
</script>

<div class={containerClass}>
  <label for={name}>{label}</label>

  <div class="DropdownContainer">
    <div class="cursor-pointer" on:click={showList}>{(value == '') ? 'Default' : value}</div>

    <div class:hidden={!active} class="Dropdown">
      {#each options as option}
      <div class="Dropdown-option" on:click={select(option)}>{option}</div>
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