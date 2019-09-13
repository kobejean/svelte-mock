<div>
    <Slot on:click="console.log('click')" on:custom="console.log('custom')" />
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

<script>
    import Fullname from './Fullname.svelte'
    import Slot from './Slot.svelte'
    import NamedSlot from './NamedSlot.svelte'
    export default {
        components: { Fullname, Slot, NamedSlot },
        data() {
            return {
                firstname: 'Jean',
                lastname: 'Flaherty'
            }
        }
    }
</script>
