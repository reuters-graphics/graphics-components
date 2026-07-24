<!--
@component
Standings

A group-stage standings table: rank, team (flag + name) and the usual
played / won / drawn / lost / goals-for / goals-against / goal-difference /
points columns.

Fully decoupled — the rows arrive pre-derived via the `rows` prop (typed as
`StandingRow[]` from the namespace view-model types; the consuming app passes
values produced by the opta-football-data selectors). The team flag is the
already-ported `Flag` element, which resolves its team + link via the football
context (or the `getTeam` / `linkBase` / `embed` props forwarded here for
standalone/Storybook use).

```svelte
<Standings groupName="Group A" {rows} link />
```
-->

<script lang="ts">
  import Flag from '../../elements/Flag/Flag.svelte';
  import type { FootballContext } from '../../context';
  import type { StandingRow } from '../../types';

  type Props = {
    /** Pre-derived, ranked standings rows for a single group. */
    rows: StandingRow[];
    /** Heading rendered above the table (e.g. `'Group A'`). Optional. */
    groupName?: string;
    /** Link each team's flag to its team page. */
    link?: boolean;
    /** Override the ambient `getTeam` service (forwarded to Flag). */
    getTeam?: FootballContext['getTeam'];
    /** Override the ambient `linkBase` (forwarded to Flag). */
    linkBase?: string;
    /** Override the ambient `embed` flag (forwarded to Flag). */
    embed?: boolean;
  };

  let {
    rows = [],
    groupName,
    link = false,
    getTeam,
    linkBase,
    embed,
  }: Props = $props();

  /** Opta code for the flag lookup — permissive rows may carry `code`. */
  const teamCode = (row: StandingRow): string =>
    (row as { code?: string }).code ?? row.teamId;

  const dash = (n: number | undefined): string =>
    n === undefined || n === null ? '–' : `${n}`;

  /** Signed goal difference for display, e.g. `+3`, `0`, `-1`. */
  const signedGD = (n: number | undefined): string => {
    if (n === undefined || n === null) return '–';
    return n > 0 ? `+${n}` : `${n}`;
  };
</script>

{#if rows.length > 0}
  <div class="standings">
    {#if groupName}
      <h3 class="group-name h4 fmt-0 fmb-2">{groupName}</h3>
    {/if}
    <table>
      <thead>
        <tr>
          <th class="rank" scope="col"><abbr title="Rank">#</abbr></th>
          <th class="team" scope="col">Team</th>
          <th scope="col"><abbr title="Played">P</abbr></th>
          <th scope="col"><abbr title="Won">W</abbr></th>
          <th scope="col"><abbr title="Drawn">D</abbr></th>
          <th scope="col"><abbr title="Lost">L</abbr></th>
          <th scope="col"><abbr title="Goals for">GF</abbr></th>
          <th scope="col"><abbr title="Goals against">GA</abbr></th>
          <th scope="col"><abbr title="Goal difference">GD</abbr></th>
          <th class="points" scope="col"><abbr title="Points">Pts</abbr></th>
        </tr>
      </thead>
      <tbody>
        {#each rows as row, i (row.teamId)}
          <tr>
            <td class="rank">{row.rank ?? i + 1}</td>
            <td class="team">
              <span class="team-cell">
                <Flag
                  country={teamCode(row)}
                  circle
                  {link}
                  width="1.25rem"
                  {getTeam}
                  {linkBase}
                  {embed}
                />
                <span class="team-name">{row.teamName ?? teamCode(row)}</span>
              </span>
            </td>
            <td>{dash(row.played)}</td>
            <td>{dash(row.won)}</td>
            <td>{dash(row.drawn)}</td>
            <td>{dash(row.lost)}</td>
            <td>{dash(row.goalsFor)}</td>
            <td>{dash(row.goalsAgainst)}</td>
            <td>{signedGD(row.goalDifference)}</td>
            <td class="points">{dash(row.points)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  .standings {
    width: max-content;
    max-width: 100%;
    margin-inline: auto;
  }

  .group-name {
    text-align: center;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    @include mixins.font-sans;
    @include mixins.text-sm;
    background-color: var(--theme-colour-muted-grey);
    border-radius: var(--theme-style-border-radius);
    overflow: hidden;
  }

  th,
  td {
    padding: 0.4rem 0.5rem;
    text-align: center;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  thead th {
    @include mixins.font-semibold;
    color: var(--theme-colour-text-secondary);
    border-bottom: 2px solid var(--theme-colour-tan-grey);
  }

  abbr {
    text-decoration: none;
    cursor: help;
  }

  tbody tr {
    border-bottom: 1px solid var(--theme-colour-tan-grey);

    &:last-child {
      border-bottom: none;
    }
  }

  .rank {
    color: var(--theme-colour-text-secondary);
    width: 1.5rem;
  }

  .team {
    text-align: left;

    .team-cell {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .team-name {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .points {
    @include mixins.font-bold;
  }
</style>
