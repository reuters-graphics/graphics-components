<!-- @component `InsetMapFeature`

A child of `InsetMap` that contributes one place to a composed inset — pass a
`geometry` shape imported directly (e.g. from
`@reuters-graphics/graphics-atlas-client`). Whether it renders as a filled
shape or a stroked border line is inferred from the geometry: polygons fill,
lines stroke (filtered to `disputed` segments, since a border-lines dataset
ships every segment with that flag).
-->
<script lang="ts">
  import { getContext, onMount } from 'svelte';
  import type { Topology } from 'topojson-specification';
  import {
    topologyToFeatures,
    type InsetMapContext,
    type InsetMapLabelOffset,
  } from './InsetMap.svelte';

  interface Props {
    /** A locally-imported TopoJSON topology, e.g. from `@reuters-graphics/graphics-atlas-client/topojson/...`. */
    geometry: Topology;
    /** Label rendered at the center of this feature's largest shape. Ignored for border lines. */
    label?: string;
    /** Fine-tune this feature's label position as `[top, right, bottom, left]` px. Defaults to `[0, 0, 0, 0]`. */
    labelOffset?: InsetMapLabelOffset;
  }

  let { geometry, label, labelOffset }: Props = $props();

  const ctx = getContext<InsetMapContext>('inset-map');
  if (!ctx) {
    throw new Error(
      'InsetMapFeature must be used inside an InsetMap component'
    );
  }

  const id = $props.id();

  onMount(() => {
    return () => ctx.unregisterChild(id);
  });

  $effect(() => {
    ctx.setChildFeature(id, {
      features: topologyToFeatures(geometry),
      label,
      labelOffset,
    });
  });
</script>
