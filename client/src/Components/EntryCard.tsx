import { type Entry } from '../lib/data';
import { FaPencil } from 'react-icons/fa6';

type EntryCardProps = {
  entry: Entry;
};
export function EntryCard({ entry }: EntryCardProps) {
  return (
    <li className="d-flex">
      <div>
        <img src={entry.photoUrl} alt={entry.title} />
      </div>
      <div>
        <div>
          <p>{entry.title}</p>
          <FaPencil />
        </div>
        <div>
          <p>{entry.notes}</p>
        </div>
      </div>
    </li>
  );
}
