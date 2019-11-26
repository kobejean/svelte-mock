<script>
  import Paragraph from './Paragraph.svelte'
	export let message = 'World';
</script>

<div>
  <Paragraph text="Hello { message }" />
</div>
