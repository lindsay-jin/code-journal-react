import { Link } from 'react-router-dom';
import { EntryCard } from '../Components/EntryCard.tsx';
import { readEntries, type Entry } from '../lib/data.ts';
import { useCallback, useEffect, useState } from 'react';

export function View() {
  const [itemArr, setItemArr] = useState<Entry[]>();

  const getArray = useCallback(() => {
    return readEntries();
  }, []);

  useEffect(() => {
    setItemArr(getArray);
  }, [getArray]);

  if (!itemArr) {
    return (
      <div>
        <p>Error!</p>
      </div>
    );
  }

  console.log(readEntries());

  return (
    <div className="container" data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <Link to="/create">
              <p id="formLink" className="white-text form-link">
                NEW
              </p>
            </Link>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul" id="entryUl">
            {itemArr.map((entry) => (
              <EntryCard key={entry.entryId} entry={entry} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
