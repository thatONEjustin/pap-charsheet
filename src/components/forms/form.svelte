<script lang="ts">
  import InputField from './inputField.svelte';

  function validate(event: Event) {
    console.log(FormData(event.currentTarget))
  }
</script>

<form on:submit|preventDefault={validate}>
  <fieldset>
        
      <InputField type="text" label="Player Name" name="player_name" id="player_name" />

      <InputField type="text" label="Character Name" name="character_name" id="character_name" />
  </fieldset>
</form>

<style>
  form {
    width: auto;
    max-width: 680px;
    margin: 0 auto;
  }

  fieldset {
    display: flex;
    flex-direction: column;
  }
</style>