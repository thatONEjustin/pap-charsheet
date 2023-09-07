<script lang="ts">
  import InputField from './inputField.svelte';

  const form = document.querySelector('form');

  function validate(event: Event) {
    console.log(FormData(form))
  }
</script>

<form on:submit|preventDefault={validate}>
  <fieldset>
        
      <InputField type="text" label="Player Name" name="player_name" id="player_name" />

      <InputField type="text" label="Character Name" name="character_name" id="character_name" />

      <div class="grid grid-cols-2 gap-x-2">
        <InputField type="text" label="Grouped Field" name="gf_1" id="gf_1" />
        <InputField type="text" label="Grouped Field 2" name="gf_2" id="gf_2" />
      </div>
  </fieldset>
</form>

<style>
  form {
    /* width: auto;
    max-width: 680px;
    margin: 0 auto; */
    @apply
      w-auto
      max-w-xl
      mx-auto;
  }

  fieldset {
    @apply
      flex
      flex-col;
  }
</style>