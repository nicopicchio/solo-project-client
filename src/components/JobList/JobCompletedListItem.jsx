import '../FugitiveCard/FugitiveCard.css';

function JobListItem({ job }) {
	return (
		<li key={`jobs-completed-${job.uid}`}>
			<div className='job-completed-container'>
				<div className='job-completed-data-container'>
					<a
						className='name-job-completed'
						target='_blank'
						rel='noreferrer'
						href={job.url}>
						{job.name}
					</a>
				</div>
				<div className='job-completed-btn-container'>
					<p className='job-completed-reward-amount'>{job.rewardAmount}</p>
				</div>
			</div>
		</li>
	);
}

export default JobListItem;
