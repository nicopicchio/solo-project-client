import '../FugitiveCard/FugitiveCard.css';

function FugitiveCardJobs({ jobsAccepted }) {
	return (
		<>
			{jobsAccepted.map((fugitive) => {
				return (
					<li key={`jobs-accepted-${fugitive.uid}`}>
						<div className='job-accepted-container'>
							<div className='job-accepted-image-container'>
								<img
									className='fugitive-avatar fugitive-avatar-thumb'
									src={fugitive.images[0].thumb}
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
									href={fugitive.url}>
									{fugitive.name}
								</a>
							</div>
							<div className='job-accepted-btn-container'>
								<button className='done-btn'>{fugitive.rewardAmount}</button>
							</div>
						</div>
					</li>
				);
			})}
		</>
	);
}

export default FugitiveCardJobs;
