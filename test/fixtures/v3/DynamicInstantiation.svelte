<script>
  import Paragraph from './Paragraph.svelte';
  export let message = '42';
  export let component = Paragraph;
</script>

<svelte:component this="{ component }" text="The meaning of life is { message }" />
