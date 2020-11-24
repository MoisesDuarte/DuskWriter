<template>
  <main>
    <header>
      <span>DuskWriter</span>
      <button class="transparent">+ Add Story</button>
    </header>

    <StoryList :stories="stories" />

    <p class="no-more">This is all for now</p>
    <img class="bottom-left" src="@/assets/svg/sunset_illustration.svg" alt="">
  </main>
</template>

<script>
import StoryList from '@/components/StoryList';

export default {
  name: 'Stories',
  components: {
    StoryList,
  },
  data() {
    return {
      stories: [
        { 
          id: 1,
          title: 'Story One',
          date: '12/05/2020',
          words: 2567,
          characters: 4614,
          reading_time: '23 minutes',
        },
        { 
          id: 2,
          title: 'Story Two',
          date: '12/07/2018',
          words: 5454,
          characters: 6871,
          reading_time: '32 minutes',
        },
        { 
          id: 3,
          title: 'Story Three',
          date: '12/05/2020',
          words: 6545,
          characters: 24554,
          reading_time: '1 hour',
        },
      ],
    }
  },
}
</script>

<style scoped>
main {
  position: relative;
  height: 100%;
}

img.bottom-left {
  position: absolute;
  left: 0;
  bottom: 0;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Wendy One', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 1rem;
}

header > span {
  color: var(--color-primary)
}

p.no-more {
  color: var(--color-primary);
  font-family: 'Wendy One', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
}
</style>