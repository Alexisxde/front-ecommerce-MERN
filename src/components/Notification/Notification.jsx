import './Notification.css'

export default function Notification({
	type,
	message = 'Falta el mensaje',
	loading = false
}) {
	return (
		<>
			{loading ? (
				<div className='loading'></div>
			) : (
				<div className={`notification ${type}`}>
					<div className='notification__body'>{message}</div>
				</div>
			)}
		</>
	)
}
