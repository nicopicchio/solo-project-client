import '../FugitiveCard/FugitiveCard.css';
import JobCompletedListItem from '../JobList/JobCompletedListItem';

function JobCompletedList({ jobsCompleted }) {
	return (
		<>
			{jobsCompleted.map((job) => {
				return <JobCompletedListItem key={job.uid} job={job} />;
			})}
		</>
	);
}

export default JobCompletedList
