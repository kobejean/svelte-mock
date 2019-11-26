<script>
  import Fullname from './Fullname.svelte'
  import Slot from './Slot.svelte'
  import NamedSlot from './NamedSlot.svelte'
	export let firstname = 'Jean';
	export let lastname = 'Flaherty';
</script>

<div>
    <Slot/>
    <Slot>
        <Fullname {firstname} {lastname} />
    </Slot>
    <NamedSlot/>
    <NamedSlot>
        <span slot="first">
            <Fullname {firstname} {lastname} />
        </span>
    </NamedSlot>
    <NamedSlot>
        <span slot="first">
            First
        </span>
        <span slot="second">
            Second
        </span>
    </NamedSlot>
</div>
