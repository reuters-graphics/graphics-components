<!--
@component
MatchCardTeam

One team column (flag + responsive name) inside a `MatchCard`. Decoupled:
the responsive display name is derived from the `Contestant` view-model
(`code` / `shortName` / `name`) passed as a prop, and the current viewport
width comes from the football context (`windowWidth`, prop-overridable).
The `Flag` resolves its own slug/link via the football context (or the
`getTeam` / `linkBase` / `embed` prop overrides threaded through here).
-->

<script lang="ts">
  import type { Contestant } from '../../types';
  import {
    getFootballContext,
    resolveService,
    FOOTBALL_CONTEXT_DEFAULTS,
    type FootballContext,
  } from '../../context';
  import Flag from '../../elements/Flag/Flag.svelte';

  type Props = {
    team: Contestant | undefined;
    side: 'home' | 'away';
    flagLink?: boolean;
    fallback?: string;
    loading?: boolean;
    /** Override the ambient `getTeam` (else read from context). */
    getTeam?: FootballContext['getTeam'];
    /** Override the ambient `linkBase` (else read from context). */
    linkBase?: string;
    /** Override the ambient `embed` flag (else read from context). */
    embed?: boolean;
    /** Override the ambient `windowWidth` (else read from context). */
    windowWidth?: number;
  };

  let {
    team,
    side,
    flagLink = false,
    fallback = '',
    loading = false,
    getTeam,
    linkBase,
    embed,
    windowWidth: windowWidthProp,
  }: Props = $props();

  const ctx = getFootballContext();
  const windowWidth = $derived(
    resolveService(
      'windowWidth',
      windowWidthProp,
      ctx,
      FOOTBALL_CONTEXT_DEFAULTS.windowWidth
    )
  );

  // Choose the appropriate label for the current viewport. All candidate
  // names travel on the `Contestant` view-model — no `getTeam` lookup here.
  const label = $derived.by(() => {
    if (!team) return fallback;
    if (windowWidth < 360) return team.code || fallback;
    if (windowWidth < 600) return team.shortName || fallback;
    return team.name || fallback;
  });
</script>

<div class="team {side}-team">
  <div class="flag-container relative" class:loading>
    <Flag
      link={flagLink}
      width="4rem"
      country={team?.name ?? ''}
      {getTeam}
      {linkBase}
      {embed}
    />
  </div>
  <span class="team-name">{label}</span>
</div>
