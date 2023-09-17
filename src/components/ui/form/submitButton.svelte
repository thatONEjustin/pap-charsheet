<script>
  
  const { name, type, id, containerClass } = $$restProps;
  
</script>

<div class={containerClass}>
  <button type={(type) ? type : 'submit'} name={name ? name : 'submit'} id={id ? id : 'submit_btn'}>
    <slot />
  </button>
</div>

<style lang="postcss">
  button {
    @apply
      border
      bg-green-600
      border-green-900
      text-white
      rounded-md
      px-3
      py-2;
    
    &:hover {
      @apply
        bg-orange-400;
    }
  }
</style>