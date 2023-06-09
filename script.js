<style>
  .Hotspot{
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: none;
    background-color: blue;
    box-sizing: border-box;
    pointer-events: none;
  }

  .Hotspot[slot="hotspot-hand"]{
    --min-hotspot-opacity: 0;
    background-color: red;
  }

  .Hotspot[slot="hotspot-foot"]:not([data-visible]) {
    background-color: transparent;
    border: 3px solid blue;
  }

  .annotation{
    background-color: #888888;
    position: absolute;
    transform: translate(10px, 10px);
    border-radius: 10px;
    padding: 10px;
  }
  /* This keeps child nodes hidden while the element loads */
  :not(:defined) > * {
    display: none;
  }
</style>
