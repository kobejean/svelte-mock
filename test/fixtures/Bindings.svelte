<div>
  <Fullname bind:firstname bind:lastname />
  <Fullname firstname='Rick' lastname='Flaherty' />
</div>

<script>
  import Fullname from './Fullname.svelte'

  export default {
    components: { Fullname },
    data() {
      return {
        firstname: 'Jean',
        lastname: 'Flaherty'
      }
    }
  }
</script>
