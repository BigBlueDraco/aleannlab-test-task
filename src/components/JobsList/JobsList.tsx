import React from "react";
import { convertMs } from "../../utils/timeConverter";
interface ITimeTypes {
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
}

export interface IJobsList {}

export const JobsList: React.FC<IJobsList> = (props) => {
  return (
    <ul>
      <ListItem />
    </ul>
  );
};

interface IListItem {
  title?: string;
  image?: string;
  disc?: string;
  address?: string;
  date?: string;
}
const ListItem: React.FC<IListItem> = ({
  image,
  title,
  disc,
  address,
  date = "2012-05-04T01:38:26.141Z",
}) => {
  const getHowMuchTimeAgo = () => {
    const { year, month, day, hour, minute, second }: ITimeTypes = convertMs(
      Date.now() - Date.parse(date)
    );
    if (year) {
      return `${year} years ago`;
    }
    if (month) {
      return `${month} day ago`;
    }
    if (day) {
      return `${day} hour ago`;
    }
    if (hour) {
      return `${minute} minute ago`;
    }
    if (second) {
      return `${second} second ago`;
    }
    return "now";
  };
  return (
    <li className="mx-2.5 rounded-lg bg-zinc-200 min-h-listItem px-4 w-listItem">
      <p>{"Posted " + getHowMuchTimeAgo()}</p>
      <div className="flex gap-x-5 items-start">
        <div className="w-smAva h-smAva sm:w-largeAva sm:h-largeAva truncate rounded-full">
          <img
            className="	w-smAva h-smAva sm:w-largeAva sm:h-largeAva"
            src={image || "https://static-cse.canva.com/blob/847064/29.jpg"}
            alt="Foto"
            width="10px"
          />
        </div>

        <div>
          <p>{title}</p>
          <p>{disc}</p>
          <p>{address}</p>
        </div>
      </div>
    </li>
  );
};
