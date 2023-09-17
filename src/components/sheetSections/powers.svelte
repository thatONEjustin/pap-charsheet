<script lang="ts">
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

import InputField from "../ui/form/inputField.svelte";
import DropdownField from "../ui/form/dropdownField.svelte";

import Accordion from '../ui/accordion.svelte';

import { userData } from '../../js/stores';

const required = false; 

if($userData.powers[0] == null) {
  $userData.powers.push({
    name: '',
    source: '',
    rank: 0,
    description: '',
    page: 0,
    hero_point_cost: 0,
  })
}

const powerSources = ['Innate', 'Magic', 'Psychic', 'Super', 'Tech', 'Trained']

function addNew() {

}
</script>

<Accordion containerClass="p-4">
  <svelte:fragment slot="content">
    {#if !$userData.powers}
    <div class="border-b border-b-slate-500 pb-2 mb-4">
      <div class="grid grid-cols-12 gap-x-4">
        <InputField 
          {required} 
          type="text"
          label="Power Name"
          name="power_0_name" 
          id="power_0_name"
          containerClass="col-span-7" />

        <DropdownField
          {required} 
          label="Source" 
          name="power_0_source" 
          id="power_0_source"
          options={powerSources}
          containerClass="col-span-3"
          />
          
        <InputField 
          {required} 
          type="number" 
          label="Rank" 
          name="power_0_rank" 
          id="power_0_rank"
          containerClass="col-span-2"
          />
      </div>
      <InputField 
        {required} 
        type="textarea" 
        label="Power Description"
        placeholder="What your power looks like in game" 
        name="power_0_desc" 
        id="power_0_desc" />

      <InputField 
        {required} 
        type="textarea" 
        label="Rules" 
        name="power_0_rules" 
        placeholder="short summary of the base rules for your power" 
        rows="6"
        id="power_0_rules" />

      <InputField 
        {required} 
        type="text" 
        label="Rulebook Page" 
        name="power_0_phbPg" 
        id="power_0_phbPg"
        containerClass="w-1/5" />
    </div>
    {/if}
    <!-- {#each $userData.powers as power, index}
    <div class="border-b border-b-slate-500 pb-2 mb-4">
      <div class="grid grid-cols-12 gap-x-4">
        <InputField 
          {required} 
          type="text"
          label="Power Name"
          value={$userData.powers[index].name}
          name="power_{index}_name" 
          id="power_{index}_name"
          containerClass="col-span-7" />

        <DropdownField
          {required} 
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
    {/each} -->

    
    <!-- on:click|preventDefault={addNew} -->
    <button
      on:click|preventDefault={addNew}
      class="px-3 py-2 bg-blue-600 text-white rounded-md ml-auto">
      Add New
    </button>
  </svelte:fragment>
</Accordion>
