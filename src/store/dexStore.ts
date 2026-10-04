import {create} from 'zustand';

interface DexState {
    captured: Set<number>;
    shinyCaptured: Set<number>;

    toggleCaptured: (id: number) => void;
    toggleShinyCaptured: (id: number) => void;

    isCaptured: (id: number) => boolean;
    isShinyCaptured: (id: number) => boolean;

    getCapturedCount: () => number;
    getShinyCapturedCount: () => number;

}

export const useDexStore = create<DexState>((set, get) => ({
    captured: new Set<number>(),
    shinyCaptured: new Set<number>(),

    toggleCaptured: (id) => {
        set((state) => {
            const captured = new Set(state.captured);

            if (captured.has(id)) {
                captured.delete(id);
            } else {
                captured.add(id);
            }

            return {
                captured,
            };
        });
    },

    toggleShinyCaptured: (id) => {
        set((state) => {
            const shinyCaptured = new Set(state.shinyCaptured);

            if (shinyCaptured.has(id)) {
                shinyCaptured.delete(id);
            } else {
                shinyCaptured.add(id);
            }

            return {
                shinyCaptured,
            };
        });
    },

    isCaptured: (id) => {
        return get().captured.has(id);
    },

    isShinyCaptured: (id) => {
        return get().shinyCaptured.has(id);
    },

    getCapturedCount: () => {
        return get().captured.size;
    },

    getShinyCapturedCount: () => {
        return get().shinyCaptured.size;
    },
}));