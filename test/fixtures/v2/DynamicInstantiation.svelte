<svelte:component this="{ component }" text="The meaning of life is { message }" />

<script>
  import Paragraph from './Paragraph.svelte'
  export default {
    data() {
      return {
        message: '42',
        component: Paragraph,
      }
    }
  }
</script>
