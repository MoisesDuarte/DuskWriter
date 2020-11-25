<template>
  <main>
    <header>
      <span>DuskWriter</span>
      <button class="transparent" @click="addStory">+ Add Story</button>
    </header>

    <StoryList :stories="stories" />

    <p class="no-more">This is all for now</p>
    <img class="bottom-left" src="@/assets/svg/sunset_illustration.svg" alt="">
  </main>
</template>

<script>
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import StoryList from '@/components/StoryList';

export default {
  name: 'Stories',
  components: {
    StoryList,
  },
  data() {
    return {
      stories: [],
    }
  },
  methods: {
    async addStory() {
      const newStory = {
        title: 'Title',
        date: Date.now(),
        words: 0,
        characters: 0,
        reading_time: '0 minutes',
      };

      this.stories.push(newStory);

      await Storage.set({
        key: 'stories',
        value: JSON.stringify(this.stories)
      });
    },
    async getStories() {
      const storage = await Storage.get({ key: 'stories' });  
      this.stories = storage.value !== null ? JSON.parse(storage.value) : [];
    }
  },
  mounted() {
    this.getStories();
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