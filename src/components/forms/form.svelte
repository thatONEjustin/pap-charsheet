<script>
  import SubmitButton from './submitButton.svelte'

  import PlayerInfo from './playerInfo.svelte'
  import Powers from './powers.svelte'

  const form = document.querySelector('form')

  function validate(event) {
    console.log('validate', form)
    if(event == null || event.currentTarget == null) return

    let data = new FormData(event.currentTarget)
    console.log(data)

    for(var value of data) {
      console.log('value')
      console.log(value)
    }
  }

  function test(event) {
    console.log(event)
  }
</script>

<form on:submit|preventDefault={validate} on:saveform={test}>
  <fieldset>

    <PlayerInfo />

    <Powers />

  </fieldset>

  <SubmitButton>
    Next
  </SubmitButton>
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

    > *:last-child {
      @apply mb-0;
    }
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