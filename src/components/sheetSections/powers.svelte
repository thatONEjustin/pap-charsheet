<script lang="ts">
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

import InputField from "../ui/form/inputField.svelte";
import DropdownField from "../ui/form/dropdownField.svelte";

import Accordion from '../ui/accordion.svelte';

import { userData } from '../../js/stores';

import type { Superpower } from '../../js/types';

const required = false; 

/* if($userData.powers[0] == null) {
  $userData.powers.push({
    name: '',
    source: '',
    rank: 0,
    description: '',
    page: 0,
    hero_point_cost: 0,
  })
} */

let iterator = 0;

const powerSources = ['Innate', 'Magic', 'Psychic', 'Super', 'Tech', 'Trained']
const power_inputs = ['name', 'source', 'rank', 'desc', 'cost', 'rules', 'page'];

function addNew() {
  // let input_str = `power_` + iterator + `_`;

  const form = document.querySelector('form')!
  const data = new FormData(form)

  let tmp:Superpower = {}
  
  for(var input_field of data) {
    let [field_id, field_value] = input_field
    const field_type = (document.getElementById(field_id) as HTMLInputElement).type

    let clean_value: any;

    if(field_type == 'number') {
      clean_value = Number(field_value)
    }

    if(field_type == 'text' || field_type == 'textarea' || field_type == 'hidden') {
      clean_value = String(field_value)
    }

    // console.log(label.replace(`power_`, `power_${iterator}_`))
    (tmp[field_id.replace(`power_`, ``)] as any) = clean_value
    
  }
  
  $userData.powers[iterator] = tmp
  iterator++

  console.log(`after: ${iterator}`)
  console.log($userData.powers)

  clean_editor()
}

function clean_editor():void {
  const form = document.querySelector('form')!
  const data = new FormData(form)

  for(var input_field of data) {
    let [field_id, field_value] = input_field
    let el = document.getElementById(field_id) as HTMLInputElement

    el.value = ''
  }
}

</script>

<Accordion containerClass="p-4">
  <svelte:fragment slot="content">

    {#each $userData.powers as {name, source, rank, desc, cost, rules, page}, index}
    <div class="border-b border-b-slate-500 pb-2 mb-4">
      <div class="grid grid-cols-12 gap-x-4">
        <InputField 
          {required} 
          type="text"
          label="Power Name"
          value={name}
          name="power_{index}_name" 
          id="power_{index}_name"
          containerClass="col-span-7" />

        <DropdownField
          {required} 
          label="Source" 
          value={source}
          name="power_{index}_source" 
          id="power_{index}_source"
          options={powerSources}
          containerClass="col-span-3"
          />
          
        <InputField 
          {required} 
          type="number" 
          label="Rank" 
          value={rank}
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
        value={desc}
        id="power_{index}_desc" />

      <InputField 
        {required} 
        type="textarea" 
        label="Rules" 
        value={rules}
        name="power_{index}_rules" 
        placeholder="short summary of the base rules for your power" 
        rows="6"
        id="power_{index}_rules" />


      <div class="flex flex-row justify-between">
        <InputField 
          {required} 
          type="number" 
          label="Cost" 
          value={cost}
          name="power_cost" 
          id="power_cost"
          containerClass="w-1/5"  />

        <InputField 
          {required} 
          type="number" 
          label="Page #" 
          value={page}
          name="power_page" 
          id="power_page"
          containerClass="w-1/5"  />
      </div>
    </div>
    {/each}
    <div class="border-b border-b-slate-500 pb-2 mb-4">
      <div class="grid grid-cols-12 gap-x-4">
        <InputField 
          {required} 
          type="text"
          label="Power Name"
          name="power_name" 
          id="power_name"
          containerClass="col-span-7" />

        <DropdownField
          {required} 
          label="Source" 
          name="power_source" 
          id="power_source"
          options={powerSources}
          containerClass="col-span-3"
          />
          
        <InputField 
          {required} 
          type="number" 
          label="Rank" 
          name="power_rank" 
          id="power_rank"
          containerClass="col-span-2"
          />
      </div>
      <InputField 
        {required} 
        type="textarea" 
        label="Power Description"
        placeholder="What your power looks like in game" 
        name="power_desc" 
        id="power_desc" />

      <InputField 
        {required} 
        type="textarea" 
        label="Rules" 
        name="power_rules" 
        placeholder="short summary of the base rules for your power" 
        rows="6"
        id="power_rules" />

      <div class="flex flex-row justify-between">
        <InputField 
          {required} 
          type="number" 
          label="Cost" 
          name="power_cost" 
          id="power_cost"
          containerClass="w-1/5"  />

        <InputField 
          {required} 
          type="number" 
          label="Page #" 
          name="power_page" 
          id="power_page"
          containerClass="w-1/5"  />
      </div>
    </div>
    <!-- on:click|preventDefault={addNew} -->
    <button
      on:click|preventDefault={addNew}
      class="px-3 py-2 bg-blue-600 text-white rounded-md ml-auto">
      Add New
    </button>
  </svelte:fragment>
</Accordion>
