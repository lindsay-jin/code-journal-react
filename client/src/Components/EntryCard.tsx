import { type Entry } from '../lib/data';
import { FaPencil } from 'react-icons/fa6';

type EntryCardProps = {
  entry: Entry;
};
export function EntryCard({ entry }: EntryCardProps) {
  return (
    <li className="d-flex">
      <div className="column-half">
        <img className="form-image" src={entry.photoUrl} alt={entry.title} />
      </div>
      <div className="column-half">
        <div className="d-flex justify-between">
          <div>
            <p>{entry.title}</p>
          </div>
          <div>
            <FaPencil />
          </div>
        </div>
        <div className="">
          <p>{entry.notes}</p>
        </div>
      </div>
    </li>
  );
}
