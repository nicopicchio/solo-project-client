import '../FugitiveCard/FugitiveCard.css';

function FugitiveCard({ fugitivesList, addJobHandler }) {
	return (
		<>
			{fugitivesList.map((fugitive) => {
				return (
					<div key={`fugitives-list-${fugitive.uid}`} className='fugitive-card'>
						<div className='profile-picture-container'>
							<img
								className='fugitive-avatar'
								src={fugitive.images[0].original}
								alt='fugitive avatar'
								width='100px'
								height='100px'
							/>
						</div>
						<div className='profile-name-container'>
							<a
								className='fugitive-name-link'
								target='_blank'
								rel='noreferrer'
								href={fugitive.url}>
								{fugitive.name}
							</a>
						</div>
						<div className='profile-warning-container'>
							{fugitive.warning ? (
								<h4 className='fugitive-warning'>{fugitive.warning}</h4>
							) : (
								<h4 className='fugitive-warning'>NO WARNING ISSUED</h4>
							)}
						</div>
						<div className='profile-reward-text-container'>
							<p className='fugitive-reward-text'>{fugitive.reward}</p>
						</div>
						<div className='profile-reward-amount-container'>
							<h2 className='profile-reward-amount-text'>Reward</h2>
							<h2 className='profile-reward-amount-text'>
								{fugitive.rewardAmount}
							</h2>
						</div>
						<div className='profile-btn-container'>
							{!fugitive.job && (
								<button
									onClick={() => addJobHandler(fugitive)}
									className='fugitive-accept-job-btn'>
									Accept Job
								</button>
							)}
						</div>
					</div>
				);
			})}
		</>
	);
}

export default FugitiveCard;
