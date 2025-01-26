import { create } from "zustand";

const useNotesStore = create((set) => ({
    notes: [], //Anmerkungen starten (leer oder falsch mit Fakedata)
    setNotes: (newNotes) => set({ notes: newNotes }),
    addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
    removeNote: (id) =>
        set((state) => ({ notes: state.notes.filter((note) => note.$id !== id) })),
}));

export default useNotesStore;
