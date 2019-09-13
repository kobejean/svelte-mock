<p class="message">
  { firstname } { lastname }
</p>
<script>
  /* istanbul ignore file */
  export default {
    data() {
      return {
        firstname: 'Jean',
        lastname: 'Flaherty'
      }
    }
  }
</script>

<style>
  .message {
    font-weight: bold;
  }
</style>
