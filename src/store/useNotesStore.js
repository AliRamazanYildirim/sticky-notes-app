import { create } from "zustand";
import { fakeData } from "../assets/fakeData";

const useNotesStore = create((set) => ({
    notes: fakeData.map(note => ({
        ...note,
        body: JSON.parse(note.body),
        position: JSON.parse(note.position),
        colors: JSON.parse(note.colors)
    })), //Beginne mit dem Parsen von FakeData
    
    setNotes: (updateFn) => set((state) => ({ notes: updateFn(state.notes || []) })),
    
    addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
    
    removeNote: (id) => set((state) => ({ notes: state.notes.filter((note) => note.$id !== id) })),
    
    updateNotePosition: (id, deltaX, deltaY) => set((state) => ({
        notes: state.notes.map(note => 
            note.$id === id
                ? { ...note, position: { x: note.position.x + deltaX, y: note.position.y + deltaY } }
                : note
        )
    })),
    
    textAreaRefs: {},
    cardRefs: {},
    draggingId: null,
    mouseStartPos: { x: 0, y: 0 },
    
    setDraggingId: (id) => set(() => ({ draggingId: id })),
    setMouseStartPos: (pos) => set(() => ({ mouseStartPos: pos })),
}));

export default useNotesStore;
