<script lang="ts">
  import InputField from "../ui/form/inputField.svelte";
  import Accordion from "../ui/accordion.svelte";
</script>

<div class="PlayerInfo">
  <h3>Player Info</h3>

  <InputField 
    type="text" 
    label="Player Name" 
    name="player_name" 
    id="player_name" />

  <div class="grid grid-cols-2 gap-x-4">
    <InputField 
      type="text" 
      label="Character Name" 
      name="character_name" 
      id="character_name" />

    <InputField 
      type="text" 
      label="Superhero Alias" 
      name="character_alias" 
      id="character_alias" />
  </div>

  <Accordion containerClass="mt-8" collapsed="true">
    <h4 slot="title">Backstory</h4>

    <svelte:fragment slot="content">
      <InputField
        type="textarea"
        label=""
        rows="10"
        name="backstory"
        id="backstory" />
    </svelte:fragment>
  </Accordion>
</div>

<style>
  h3 {
    @apply
      border-b
      border-slate-200
      pb-2
      mb-6;
  }
  .PlayerInfo {
    @apply 
      p-4
      rounded-md
      mb-4;
  }
</style>