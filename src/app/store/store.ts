import { create } from 'zustand';

// Define the Zustand store
const useStore = create((set) => ({
    rank: 1,
    percentage: 30,
    score: 10,
    setInfo: (newInfo: any) =>
        set((state: any) => ({
            ...state, // Preserve the rest of the state
            ...newInfo, // Update with the new values
        })),
}));

export default useStore;
