<script lang="ts">
  import InputField from "./inputField.svelte";
</script>

<div class="PlayerInfo">
  <h3>Player Info</h3>

  <InputField type="text" label="Player Name" name="player_name" id="player_name" />

  <InputField type="text" label="Character Name" name="character_name" id="character_name" />
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
      border 
      p-4
      rounded-md
      mb-4;
  }
</style>