import React from 'react'


export default function Results(props) {
	return (

			//04: plug each prop into it's appropriate table cell (<td>)
			<tr>
				<td>
					<button>
						<a href={props.item.previewUrl} target="_blank">Play</a>
					</button>
				</td>
				<td>{props.item.trackName}</td>
				<td>{props.item.artistName}</td>
				<td>{props.item.collectionName}</td>
				<td><img alt="Album Cover"/></td>
				<td></td>
				<td>$</td>
				<td>$</td>
			</tr>
	)
}