<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  margin: 0vw 12vw -5vw 5vw;
  position: relative;
  top: -42vh;
  width: 100%;
  height: auto;
  left: -6rem;
}

.details {
  display: flex;
  flex: 1; 
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 0rem;
  position: absolute;
  top: 3rem;
  left: -2.6rem;
  width: 20vw;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 100%;
  height: 32px;

  color: #638DE9;
}
.heading{
  color: #638DE9;
}
h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: black;
  width: 100%;
  
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
