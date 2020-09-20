import { writable } from 'svelte-local-storage-store';

const defCriteria = { id: 1, text: 'Puntuación', criteria: 'rating' };

export const sortCriteria = writable('sortCriteria', defCriteria);
export const totalVpns = writable('total', 0);
