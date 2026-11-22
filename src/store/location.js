import { locations } from '#constants';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

// Pick the first actual location entry as the default
const DEFAULT_LOCATION = Object.values(locations).find(
  (location) => location.id && location.name && location.icon
);

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) =>
      set((state) => {
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);

export default useLocationStore;
