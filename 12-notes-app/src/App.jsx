import React, { useState } from "react";

const App = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [notesDetail, setNotesDetail] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = [...notes];
    newNote.push({ noteTitle, notesDetail });
    setNotes(newNote);
    console.log(newNote);

    setNoteTitle("");
    setNotesDetail("");
  };

  const deleteNote = (index) => {
    console.log(index);
    const copyNote = [...notes];
    copyNote.splice(index, 1);
    setNotes(copyNote);
  };

  return (
    <div div className="lg:flex w-full h-screen bg-black text-white ">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex items-start  lg:w-1/2 flex-col p-10 gap-5"
      >
        <h1 className="text-xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={noteTitle}
          onChange={(e) => {
            // console.log(e.target.value);
            setNoteTitle(e.target.value);
          }}
          className="px-5 py-2 border-2 border-gray-600 rounded w-full outline-none"
        />
        <textarea
          type="text"
          name=""
          id=""
          placeholder="Enter Detail"
          value={notesDetail}
          onChange={(e) => {
            // console.log(e.target.value);
            setNotesDetail(e.target.value);
          }}
          className="px-5 py-2 border-2 border-gray-600 rounded w-full h-20 outline-none"
        />
        <button className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full outline-none">
          Add Note
        </button>
        {/* <img
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt=""
          className="rotate-y-180 h-50"
        /> */}
      </form>
      <div className=" p-10 lg:w-1/2 lg:border-l-2">
        <h1 className="text-xl font-bold">Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          {notes.map((note, index) => (
            <div
              key={index}
              className="h-52 w-40 rounded-2xl bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2jD4jHXqii8nhc6QYUx7CM23J4mLa4ssYw&s')] px-5 py-8"
            >
              <div>
                <h2 className="text-lg text-black font-bold">
                  {note.noteTitle}
                </h2>
                <p className="text-gray-500">{note.notesDetail}</p>
              </div>
              <button
                className="bg-red-700"
                onClick={() => {
                  deleteNote(index);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
