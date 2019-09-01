<div>
  <Fullname {firstname} {lastname} />
  <Paragraph text="Hello { message }" />
  <Paragraph text="Goodbye { message }" />
</div>

<script>
  import Fullname from './Fullname.svelte'
  import Paragraph from './Paragraph.svelte'
  export default {
    components: { Fullname, Paragraph },
    data() {
      return {
        message: 'World',
        firstname: 'Jean',
        lastname: 'Flaherty'
      }
    }
  }
</script>
