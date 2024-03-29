import { FormEvent, useState } from 'react';
import { addEntry, type UnsavedEntry } from '../lib/data';
import { Link } from 'react-router-dom';

export function CreateEdit() {
  const [titleInput, setTitleInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [textInput, setTextInput] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const object: UnsavedEntry = {
      title: titleInput,
      photoUrl: urlInput,
      notes: textInput,
    };
    addEntry(object);
  }

  return (
    <div className="container" data-view="entry-form">
      <div className="row">
        <div className="column-full d-flex justify-between">
          <h1 id="formH1">New Entry</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit} id="entryForm">
        <div className="row margin-bottom-1">
          <div className="column-half">
            <img
              className="input-b-radius form-image"
              id="formImage"
              src={urlInput}
              alt={titleInput}
            />
          </div>
          <div className="column-half">
            <label className="margin-bottom-1 d-block" htmlFor="title">
              Title
            </label>
            <input
              onChange={(e) => setTitleInput(e.target.value)}
              value={titleInput}
              required
              className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="formTitle"
              name="formTitle"
            />
            <label className="margin-bottom-1 d-block" htmlFor="photoUrk">
              Photo URL
            </label>
            <input
              onChange={(e) => setUrlInput(e.target.value)}
              value={urlInput}
              required
              className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="formURL"
              name="formURL"
            />
          </div>
        </div>
        <div className="row margin-bottom-1">
          <div className="column-full">
            <label className="margin-bottom-1 d-block" htmlFor="formNotes">
              Notes
            </label>
            <textarea
              onChange={(e) => setTextInput(e.target.value)}
              value={textInput}
              required
              className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
              name="formNotes"
              id="formNotes"
              cols={30}
              rows={10}></textarea>
          </div>
        </div>
        <div className="row">
          <div className="column-full d-flex justify-between">
            <button
              className="invisible delete-entry-button"
              type="button"
              id="deleteEntry">
              Delete Entry
            </button>
            <Link to="/">
              <button
                type="submit"
                className="input-b-radius text-padding purple-background white-text">
                SAVE
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
