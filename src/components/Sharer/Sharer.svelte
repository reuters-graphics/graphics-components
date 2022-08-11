<script>
import Fa from 'svelte-fa/src/fa.svelte';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { throttle } from 'lodash-es';
import handleTweet from './utils/twitter';
import handlePost from './utils/facebook';
import UAParser from 'ua-parser-js';
import { onMount } from 'svelte';

const uaParser = new UAParser();

const getMetaContent = (property) => {
  const el = document.querySelector(`meta[property="${property}"]`);
  if (el) return el.getAttribute('content');
  return '';
};
const handleShare = async function() {
  if (showSecondaryDialogue) {
    showSecondaryDialogue = false;
    return;
  }
  if (
    navigator &&
    navigator.share &&
    uaParser.getBrowser().name !== 'Safari'
  ) {
    try {
      await navigator.share({
        title: getMetaContent('og:title'),
        text: getMetaContent('og:description'),
        url: window.location.href,
      });
    } catch (err) {
      console.log('Share error', err);
    }
  // Otherwise copy URL to a clipboard
  } else {
    showSecondaryDialogue = true;
  }
};
let lastScroll = 0;
let showShare = false;
let showSecondaryDialogue = false;
function handleScroll() {
  if (lastScroll > window.scrollY) {
    if (!showShare) {
      showShare = true;
    }
  } else {
    if (showShare) {
      if (showSecondaryDialogue) {
        showSecondaryDialogue = false;
      } else {
        showShare = false;
      }
    }
  }
  lastScroll = window.scrollY;
}
onMount(() => {
  window.addEventListener('scroll', throttle(handleScroll, 250));
});
</script>


<div class="sharetool" class:active={showShare}>
  <div class="drawer" class:active={showSecondaryDialogue }>
    <button
      on:click={handleShare}
      title="Share this!"
      disabled={showSecondaryDialogue}
      class='box-shadow-low'
    >
      <div><Fa fw icon={faShareAlt} /></div>
    </button>
    <button on:click={handleTweet} title="Twitter">
      <div><Fa fw icon={faTwitter} /></div>
    </button>
    <button on:click={handlePost} title="Facebook">
      <div><Fa fw icon={faFacebookF} /></div>
    </button>
  </div>
</div>


<style lang="scss">
.sharetool.active {
  bottom: 10px;
}
.sharetool {
  position: fixed;
  bottom: -5rem;
  right: 10px;
  transition: all 0.2s;
  z-index: 9999;
  
}
.sharetool button {
  background: #333;
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  font-size: 1.25rem;
  text-align: center;
  height: 2.25rem;
  width: 2.25rem;
  outline: none !important;
  transition: color 0.2s;
  cursor: pointer;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.sharetool button:active {
  transform: translate(1px, 1px);
}
.sharetool button:disabled {
  background: white;
  color: #ddd;
  cursor: default;
  box-shadow: none;
  pointer-events: none;
}
.drawer {
  width: calc(2.25rem + 4px);
  overflow-x: hidden;
  transition: width 0.2s;
  white-space: nowrap;
  padding: 2px;
}
.drawer.active {
  width: calc(7.25rem + 4px);
}
@media only screen and (max-width: 600px) {
  .sharetool button {
    font-size: 1.75rem;
    height: 3rem;
    width: 3rem;
  }
  .drawer {
    width: calc(3rem + 4px);
  }
  .drawer.active {
    width: calc(9.5rem + 4px);
  }
}
</style>