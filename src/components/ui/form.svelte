<script>
import { createEventDispatcher } from 'svelte';

import TabContent from '../ui/tabs.svelte';
import SubmitButton from './form/submitButton.svelte';

import PlayerInfo from '../sheetSections/playerInfo.svelte';
import Powers from '../sheetSections/powers.svelte';


import { userData } from '../../js/stores';

const dispatch = createEventDispatcher();

const tabs = [
  {
    label: "Info",
    index: 1,
    component: PlayerInfo
  },
  {
    label: "Powers",
    index: 2,
    component: Powers
  },
]

function validate(event) {
  /* $userData.player = { data: new FormData(event.currentTarget) }

  for(var value of $userData.character.data) {
    console.log(value)
  } */
  console.log('validate')
  console.log(event.detail.data)
  
  for(var value of event.detail.data) {
    console.log(value)
  } 
}

function submitForm() {
  dispatch('savesheet', {
    data: new FormData(document.querySelector('form'))
  })
}


</script>

<form on:submit|preventDefault>
  <fieldset>
    <TabContent {tabs} on:savesheet={validate} />
  </fieldset>

  <!-- <SubmitButton>
    Next
  </SubmitButton> -->
</form>

<style lang="postcss">
  form {
    @apply
      w-auto
      max-w-xl
      mx-auto;
  }

  fieldset {
    @apply
      flex
      flex-col
      my-6;
  }

  :global(h1) {
    @apply text-4xl;
  }

  :global(h2) {
    @apply text-3xl;
  }

  :global(h3) {
    @apply text-2xl;
  }

  :global(h4) {
    @apply text-xl;
  }

  :global(h5) {
    @apply text-lg;
  }
</style>