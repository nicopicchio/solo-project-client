function JobListItem({ job, completeJobHandler }) {
	return (
		<li key={`jobs-accepted-${job.uid}`}>
			<div className='job-accepted-container'>
				<div className='job-accepted-image-container'>
					<img
						className='fugitive-avatar fugitive-avatar-thumb'
						src={job.images[0].thumb}
						alt='fugitive snapshot'
						width='80px'
						height='80px'
					/>
				</div>
				<div className='job-accepted-data-container'>
					<a
						className='name-job-accepted-completed'
						target='_blank'
						rel='noreferrer'
						href={job.url}>
						{job.name}
					</a>
				</div>
				<div className='job-accepted-btn-container'>
					<button onClick={() => completeJobHandler(job)} className='done-btn'>
						{job.rewardAmount}
					</button>
				</div>
			</div>
		</li>
	);
}

export default JobListItem
