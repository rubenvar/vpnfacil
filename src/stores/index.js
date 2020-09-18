import { writable } from 'svelte-local-storage-store';

const defCriteria = { id: 1, text: 'Alfabético', criteria: 'name' };

export const sortCriteria = writable('sortCriteria', defCriteria);

// if (typeof window !== 'undefined') {
//   sortCriteria = writable('sortCriteria', 1);
// } else {
//   sortCriteria = writable(null);
// }
