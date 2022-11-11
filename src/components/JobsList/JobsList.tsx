import React from "react";

export interface IJobsList {}
interface IListItem {}
export const JobsList: React.FC<IJobsList> = (props) => {
  return (
    <ul>
      <ListItem />
    </ul>
  );
};

const ListItem: React.FC<IListItem> = (props) => {
  return (
    // max-w-sm
    <li className="mx-2.5 rounded-lg bg-zinc-200 min-h-listItem px-4 w-listItem">
      <p>Date</p>
      <div className="flex gap-x-5 items-start">
        <div className="w-smAva h-smAva sm:w-largeAva sm:h-largeAva truncate rounded-full">
          <img
            className="	w-smAva h-smAva sm:w-largeAva sm:h-largeAva"
            src="https://static-cse.canva.com/blob/847064/29.jpg"
            alt="Foto"
            width="10px"
          />
        </div>

        <div>
          <p>title</p>
          <p>disc</p>
          <p>adress</p>
        </div>
      </div>
    </li>
  );
};
