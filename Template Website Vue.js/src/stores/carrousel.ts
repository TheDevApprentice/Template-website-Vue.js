import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import image3 from '../assets/slide1.jpg';
import image4 from '../assets/slide2.jpg';
import image5 from '../assets/slide3.jpg';
import image6 from '../assets/slide4.jpg';

interface Image {
  src: string;
}

interface CarouselState {
  currentIndexJob: Ref<number>;
  intervalJob: Ref<number>;
  intervalIdJob: Ref<NodeJS.Timeout | null>;
  imagesJob: Ref<Image[]>;
}

export const useCarouselStore = defineStore('carousel',  () => {
  const currentIndexJob: Ref<number> = ref(0);
  const intervalJob: Ref<number> = ref(6500);
  const intervalIdJob: Ref<NodeJS.Timeout | null> = ref(null);
  
  const imagesJob: Ref<Image[]> = ref([
    { src: image3, text: "addad" },
    { src: image4, text: "addad" },
    { src: image5, text: "addad" },
    { src: image6, text: "addad" },
  ]);

  const state: CarouselState = {
    currentIndexJob,
    intervalJob,
    intervalIdJob,
    imagesJob
  };

  const startCarouselJob = () => {
    state.intervalIdJob.value = setInterval(changeImageJob, state.intervalJob.value);
  };

  const stopCarouselJob = () => {
    if (state.intervalIdJob.value) {
      clearInterval(state.intervalIdJob.value);
    }
  };

  const changeImageJob: () => void = () => {
    state.currentIndexJob.value = (state.currentIndexJob.value + 1) % state.imagesJob.value.length;
  };

  return {
    ...state,
    imagesJob,
    startCarouselJob,
    stopCarouselJob
  };
});
