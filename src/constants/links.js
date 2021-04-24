import React from 'react'
// import { Link } from 'gatsby'

const data = [
	{
		id: 1,
		text: "about"
	},
	{
		id: 2,
		text: "treatments"
	},
	{
		id: 3,
		text: "opening times"
	},
	{
		id: 4,
		text: "location"
	},
	{
		id: 5,
		text: "contact"
	}
]

export default ({styleClass}) => {
	const tempLinks = data.map(link => {
		return (
			<li key={link.id}>
				<a>{link.text}</a>
			</li>
		)
	})
	return (
		<ul className={`page-links ${styleClass ? styleClass : ""}`}>
			{tempLinks}
		</ul>
	)
}
