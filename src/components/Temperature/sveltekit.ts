/**
 * SvelteKit integration for the temperature toolkit.
 *
 * A `handle` hook that injects the pre-paint bootstrap into every rendered
 * page's `<head>`, so an app gets flash-free unit rendering by adding one line
 * to `hooks.server.ts` — no `app.html` edits and no hand-copied script to drift.
 * It runs at prerender time too, so it works with the static adapter.
 */
import type { Handle } from '@sveltejs/kit';
import { type BootstrapOptions, buildBootstrapScript } from './bootstrap';

const HEAD_CLOSE = '</head>';

/**
 * Create a SvelteKit `handle` that injects the unit bootstrap `<script>` at the
 * end of `<head>` — a synchronous head script runs before the app's deferred
 * module/hydration scripts, so it still executes pre-paint, while keeping
 * `<meta charset>` first. Compose it with other hooks using `sequence()`.
 *
 * ```ts
 * // src/hooks.server.ts
 * import { sequence } from '@sveltejs/kit/hooks';
 * import { createUnitBootstrapHandle } from '@reuters-graphics/graphics-components';
 *
 * export const handle = sequence(createUnitBootstrapHandle());
 * ```
 */
export function createUnitBootstrapHandle(
  options: BootstrapOptions = {}
): Handle {
  // Guard against a `</script>` sequence terminating the inline tag early —
  // cheap insurance for future edits to the script body.
  const body = buildBootstrapScript(options).replace(/<\/(script)/gi, '<\\/$1');
  const tag = `<script>${body}</script>`;

  return ({ event, resolve }) =>
    resolve(event, {
      // Inject before the first </head>. A function replacer keeps the script
      // body literal ($ in its regexes is not treated as a replacement pattern)
      // and only the first match is replaced, so it injects once even across
      // streamed chunks.
      transformPageChunk: ({ html }) =>
        html.includes(HEAD_CLOSE) ?
          html.replace(HEAD_CLOSE, () => tag + HEAD_CLOSE)
        : html,
    });
}
