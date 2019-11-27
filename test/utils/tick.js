import { tick as svelteTick } from 'svelte';
import { isSvelteVersion } from '@utils/version';

export async function tick() {
  if (isSvelteVersion('3.0.0', '>=')) {
    await svelteTick();
  }
}
