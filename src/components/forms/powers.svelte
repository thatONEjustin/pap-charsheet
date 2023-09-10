<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();

  import InputField from "./inputField.svelte";
  import DropdownField from "./dropdownField.svelte";

  const required = false; 

  let index  = 0
  let powers = [index]

  function addNew(event) {
    index++
    powers[index] = index
  }

  let collapse = false
  let accordion = ''

  function showHide(event) {
    collapse = ! collapse

    if(collapse) {
      accordion = 'hide'
      return;
    }

    accordion = ''
  }

  const powerSources = ['Innate', 'Magic', 'Psychic', 'Super', 'Tech', 'Trained']

</script>

<div class="PowersContainer">
  <h3 on:click={showHide}>Powers</h3>
  <div class="accordion {accordion}">
    {#each powers as index}
    <div class="border-b border-b-slate-500 pb-2 mb-4">
      <div class="grid grid-cols-12 gap-x-4">
        <InputField 
          {required} 
          type="text" 
          label="Power Name" 
          name="power_{index}_name" 
          id="power_{index}_name"
          containerClass="col-span-7" />

        <DropdownField
          {required} 
          type="text" 
          label="Source" 
          name="power_{index}_source" 
          id="power_{index}_source"
          options={powerSources}
          containerClass="col-span-3"
          />
          
        <InputField 
          {required} 
          type="number" 
          label="Rank" 
          name="power_{index}_rank" 
          id="power_{index}_rank"
          containerClass="col-span-2"
          />
      </div>
      <InputField 
        {required} 
        type="textarea" 
        label="Power Description"
        placeholder="What your power looks like in game" 
        value="This is a test of the value of a textarea field."
        name="power_{index}_desc" 
        id="power_{index}_desc" />

      <InputField 
        {required} 
        type="textarea" 
        label="Rules" 
        name="power_{index}_rules" 
        placeholder="short summary of the base rules for your power" 
        rows="6"
        id="power_{index}_rules" />

      <InputField 
        {required} 
        type="text" 
        label="Rulebook Page" 
        name="power_{index}_phbPg" 
        id="power_{index}_phbPg"
        containerClass="w-1/5" />
    </div>
    {/each}

    <button 
      on:click|preventDefault={addNew}
      on:click={() => dispatch('saveform')}
      class="px-3 py-2 bg-blue-600 text-white rounded-md ml-auto">
      Add New
    </button>
  </div>
</div>

<style lang="postcss">
  h3 {
    @apply cursor-pointer;
  }

  .PowersContainer {
    @apply 
      border 
      p-4
      rounded-md;
  }

  .accordion {
    @apply
      transition-all
      ease-in-out
      max-h-max
      flex
      flex-col;

    &.hide {
      @apply 
        h-0
        max-h-0;

      > input {
        @apply hidden;
      }
    }
  }
</style>