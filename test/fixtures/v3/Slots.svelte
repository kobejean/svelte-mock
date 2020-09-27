<script>
  import Fullname from './Fullname.svelte'
  import Slot from './Slot.svelte'
  import NamedSlot from './NamedSlot.svelte'
  export let firstname1 = 'Jean';
  export let lastname1 = 'Flaherty';
  export let firstname2 = '仁';
  export let lastname2 = 'フラハティ';
  export let component = NamedSlot;
</script>

<div>
    <Slot/>
    <Slot>
        <Fullname firstname={firstname1} lastname={lastname1} />
    </Slot>
    <NamedSlot/>
    <NamedSlot>
        <span slot="first">
            <Fullname firstname={firstname2} lastname={lastname2} />
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
