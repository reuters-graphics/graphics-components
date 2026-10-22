import { fileURLToPath } from 'node:url';
import * as sass from 'sass';
import { describe, expect, it } from 'vitest';

const scssDirectory = fileURLToPath(new URL('../../../', import.meta.url));

describe('static margin mixins', () => {
  it('resolves the InfoBox heading margin levels to their token values', () => {
    const { css } = sass.compileString(
      `@use 'mixins' as mixins;

      .infobox-heading {
        @include mixins.mt(6);
        @include mixins.mb(1.5);
      }`,
      { loadPaths: [scssDirectory] }
    );

    expect(css).toContain('margin-block-start: 1.5rem;');
    expect(css).toContain('margin-block-end: 0.375rem;');
  });
});
