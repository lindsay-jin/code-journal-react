//import { type Entry } from "../lib/data";
import { FaPencil } from "react-icons/fa6";

// type Props={
//   entry: Entry;
// }
export function EntryCard() {
  return (
    <li className="d-flex">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div>
          <p>name</p>
          <FaPencil />
        </div>
        <div>
          <p>description</p>
        </div>
      </div>
    </li>
  );
}
