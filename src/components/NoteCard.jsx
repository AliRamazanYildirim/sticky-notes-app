import Trash from "../icons/Trash";
import useNotesStore from "../store/useNotesStore";

const NoteCard = () => {
    const notes = useNotesStore((state) => state.notes);
    
    return (
        <>
            {notes.map((note) => (
                <div key={note.$id} className="card" style={{ backgroundColor: note.colors.colorBody, left: `${note.position.x}px`, top: `${note.position.y}px` }}>
                    <div className="card-header" style={{ backgroundColor: note.colors.colorHeader }}>
                        <Trash />
                    </div>
                    <div className="card-body">
                        <textarea style={{ color: note.colors.colorText }} defaultValue={note.body}></textarea>
                    </div>
                </div>
            ))}
        </>
    );
};

export default NoteCard;