import '../FugitiveCard/FugitiveCard.css';
import JobListItem from '../JobList/JobListItem'

function JobsList({ jobsAccepted, completeJobHandler }) {
	return (
		<>
			{jobsAccepted.map((job) => {
				return (
					<JobListItem key={job.uid} job={job} completeJobHandler={completeJobHandler}/>
				);
			})}
		</>
	);
}

export default JobsList;
