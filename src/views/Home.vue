<template>
  <main class="home">
    <img src="@/assets/svg/home_illustration.svg" alt="">
    <section>
      <h1>Through dusk till dawn,<br>writing away</h1>
      <p>
        When the sun goes to sleep, it's time<br> 
        to write. <b>DuskWriter</b> let you focus on<br>
        your ideas, while the light of the day<br>
        fades away.
      </p>
      <button class="filled" @click="goToStories">Let's Write!</button>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToStories() {
      this.$router.push({ name: 'Stories' });
    },
  },
}
</script>

<style scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 10px;
}

section {
  padding-bottom: 2rem;
}

section > h1 {
  color: var(--color-primary);
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0;
}

section > p {
  color: var(--text-black);
  font-size: 1.125rem;
  margin-top: 16px;
  margin-bottom: 32px;
}

b {
  color: var(--color-primary);
  font-weight: 900;
}
</style>
