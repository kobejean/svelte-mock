<script>
  import Fullname from './Fullname.svelte'
  import Paragraph from './Paragraph.svelte'
  export let message = 'World';
  export let firstname = 'Jean';
  export let lastname = 'Flaherty';
</script>

<div>
  <Fullname {firstname} {lastname} />
  <Paragraph text="Hello { message }" />
  {#if message}
    <Paragraph text="Goodbye { message }" />
  {/if}
</div>
