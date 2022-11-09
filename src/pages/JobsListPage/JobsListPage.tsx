import { JobsList } from "../../components/JobsList/JobsList";

export interface IJobsListPage {}

export const JobsListPage: React.FC<IJobsListPage> = (props) => {
  return (
    <div>
      <JobsList />
    </div>
  );
};
