import pym from 'pym.js';

type PymChildState = { pymChild: pym.Child | null };

export const pymChildState: PymChildState = $state({ pymChild: null });
