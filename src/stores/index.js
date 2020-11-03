import { writable } from 'svelte-local-storage-store';

export const sortCriteria = writable('sortCriteria', null);
export const direction = writable('decrease', true);
export const view = writable('tableView', 'table');
