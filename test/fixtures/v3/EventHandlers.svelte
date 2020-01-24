<script>
  import Paragraph from './Paragraph.svelte'
  export let message = 'Hi'
  export const secondClick = () => message = 'Click Event Second'
  export const thirdCustom = () => message = 'Custom Event Third'
  export const thirdRandom = () => message = 'Random Event Third'
  export const fourthRandom = () => message = 'Focus Event Fourth'
  export let component = Paragraph;
</script>

<div>
    { message }
    <Paragraph text="First" />
    <Paragraph text="Second" on:click={secondClick} />
    <Paragraph text="Third"  on:custom={thirdCustom} on:random={thirdRandom} />
    <svelte:component this="{ component }" text="Fourth" on:focus={fourthRandom} />
</div>
