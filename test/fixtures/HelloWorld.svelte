<div>
  <Paragraph text="Hello { message }" />
</div>

<script>
  import Paragraph from './Paragraph.svelte'
  export default {
    components: { Paragraph },
    data() {
      return {
        message: 'World'
      }
    }
  }
</script>
