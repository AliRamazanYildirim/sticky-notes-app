import useNotesStore from "../store/useNotesStore";
import NoteCard from "../components/NoteCard";

const NotesPage = () => {
    const notes = useNotesStore((state) => state.notes); //Zustand'dan notes al

    return (
        <div>
            {notes.map((note) => (
                <NoteCard note={note} key={note.$id} />
            ))}
        </div>
    );
};

export default NotesPage;
