<script lang="ts">
  import src from "$lib/images/logo.png"
</script>
<div class="tw-container tw-mx-auto tw-py-6 tw-flex tw-justify-between tw-items-center">
  <a href="/">
    <img {src} alt="lu tan" class="tw-h-32">
  </a>
  <ul class="lg:tw-pr-10 menu tw-text-2xl tw-flex tw-items-center tw-space-x-10">
    <li class="menu-item">
      <a href="/about">About Us</a>
    </li>
    <li class="menu-item">
      <a href="/room">Room</a>
    </li>
    <li class="menu-item">
      <a href="/gallery">Gallery</a>
    </li>
    <li class="menu-item">
      <a href="/contact">Contact</a>
    </li>
  </ul>
</div>
<style lang="scss">
  .menu {
    &-item {
      position: relative;
     &::after {
      content: '';
      width: 0%;
      height: 3px;
      background-color: #7926c2;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      transition: width 0.2s linear;
     }
     &:hover {
        &::after{
          width: 100%;
          transition: width 0.2s linear;
        }
      }
    }
    &-active {
      
    }
  }
</style>