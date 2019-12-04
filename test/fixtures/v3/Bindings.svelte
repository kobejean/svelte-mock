<script>
  import Fullname from './Fullname.svelte'
  let firstname = 'Jean';
  let lastname = 'Flaherty';
</script>

<div>
  <Fullname bind:firstname bind:lastname />
  <Fullname firstname='Rick' lastname='Flaherty' />
</div>
