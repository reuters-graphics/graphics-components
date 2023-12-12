The `ReferralBlock` component creates a set of referral links from recent dotcom stories using the [recent stories by section API](https://www.reuters.com/pf/api/v3/content/fetch/recent-stories-by-sections-v1?query=%7B%22section_ids%22%3A%22%2Fworld%2F%22%2C%22size%22%3A20%2C%22website%22%3A%22reuters%22%7D) or the [articles by collection API](https://www.reuters.com/pf/api/v3/content/fetch/articles-by-collection-alias-or-id-v1?query=%7B%22collection_alias%22%3A%22x-trump%22%2C%22size%22%3A20%2C%22website%22%3A%22reuters%22%7D).

> The `section` or `collection` prop determines which section or collection stories are from.
>
> You can get the section ID from the section page on dotcom. For example, the section ID for World - Europe stories at `www.reuters.com/world/europe/` would be `/world/europe/`. (The leading and trailing slashes are required!)
>
> You should get a collection alias from the dotcom team.

```svelte
<script>
  import { ReferralBlock } from '@reuters-graphics/graphics-components';
</script>

<ReferralBlock section="/lifestyle/sports/" />
```
