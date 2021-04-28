import React from 'react'


const Treatment = ({items, title}) => {

	console.log(items)
	return (
		<div>
			<div>
				<div/>
				<div>
					<hr/>
					<h3>{title}</h3>
					<ul>
						{items.map(item => (
							<li key={item.title}>
								<p>
									{item.title}
									<span>{item.price}</span>
									<span>{item.time}</span>
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Treatment