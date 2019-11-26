<script>
  import Fullname from './Fullname.svelte'
	export let firstname = 'Jean';
	export let lastname = 'Flaherty';
</script>

<div>
  <Fullname bind:firstname bind:lastname />
  <Fullname firstname='Rick' lastname='Flaherty' />
</div>
