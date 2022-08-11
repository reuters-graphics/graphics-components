<div>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</div>

<style lang="scss">
  @import '../../../scss/_colors.scss';

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner-container {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    color: var(--nav-primary, $tr-dark-grey);
  }

  .spinner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: currentColor;
    animation: spinner 0.6s linear infinite;
    box-sizing: border-box;

    &::before {
      content: '';
      position: absolute;
      display: block;
      left: -4px;
      top: -4px;
      width: 100%;
      height: 100%;
      border: 4px solid currentColor;
      box-sizing: content-box;
      border-radius: 50%;
      opacity: 0.25;
    }
  }
</style>
