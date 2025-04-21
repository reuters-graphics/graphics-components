import type p from 'pym.js';

type PymChild = { child: p.Child | null };

export const pym = $state<PymChild>({ child: null });
