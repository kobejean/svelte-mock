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

    <svelte:component this="{ component }" >
        <span slot="third">
            Dynamic Third
        </span>
    </svelte:component>
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
                lastname: 'Flaherty',
                component: NamedSlot
            }
        }
    }
</script>
