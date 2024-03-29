import { Link } from 'react-router-dom';
import { EntryCard } from '../Components/EntryCard.tsx';
import {type Entry } from '../lib/data.ts';

type Props = {
  entries: Entry[];
};
export function View({entries}: Props) {
  return (
   <div className="container" data-view="entries">
        <div className="row">
          <div className="column-full d-flex justify-between align-center">
            <h1>Entries</h1>
            <h3>
              <Link to="/create-edit">
                <a id="formLink" className="white-text form-link" href="#">NEW</a>
              </Link>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="column-full">
            <ul className="entry-ul" id="entryUl">
              {entries.map((entry)=> <EntryCard  key={entry.entryId} />)}
            </ul>
          </div>
        </div>
      </div>
  );
}
