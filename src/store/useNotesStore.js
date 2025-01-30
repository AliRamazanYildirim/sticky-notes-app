import { create } from "zustand";
import { fakeData } from "../assets/fakeData";

const useNotesStore = create((set) => ({
    notes: fakeData.map(note => ({
        ...note,
        body: JSON.parse(note.body),
        position: JSON.parse(note.position),
        colors: JSON.parse(note.colors)
    })), //Beginne mit dem Parsen von FakeData
    setNotes: (newNotes) => set({ notes: newNotes }),
    addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
    removeNote: (id) =>
        set((state) => ({ notes: state.notes.filter((note) => note.$id !== id) })),
}));

export default useNotesStore;