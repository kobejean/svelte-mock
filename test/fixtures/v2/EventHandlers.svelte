<div>
    {message}
    <Paragraph text="First" />
    <Paragraph text="Second" on:click="this.set({ message: 'Click Event Second' })" />
    <Paragraph text="Third"  on:custom="this.set({ message: 'Custom Event Third' })" on:random="this.set({ message: 'Random Event Third' })" />
    <svelte:component this="{ component }" text="Fourth" on:focus="this.set({ message: 'Focus Event Fourth' })" />
</div>

<script>
    import Paragraph from './Paragraph.svelte'
    /* istanbul ignore file */
    export default {
        components: { Paragraph },
        data() {
            return {
                message: 'Hi',
                component: Paragraph
            }
        }
    }
</script>
