import React from "react";
import Navbar from "./navbar";
import Jumbotron from './jumbotron';
import Card from './card';


const cards = [
	{
		'image': 'https://images.unsplash.com/photo-1735243365709-672e47a68be6',
		'title': 'Test 1',
		'description': 'This is a test'
	},
	{
		'image': 'https://images.unsplash.com/photo-1740137660675-fc92e4273fc1',
		'title': 'Test 2',
		'description': 'This is a test'
	},
	{
		'image': 'https://images.unsplash.com/photo-1739036679577-05f49ff85bb0',
		'title': 'Test 3',
		'description': 'This is a test'
	},
	{
		'image': 'https://images.unsplash.com/photo-1738253145927-c385871168d8',
		'title': 'Test 3',
		'description': 'This is a test'
	}
]

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className='row d-flex justify-content-between'>
					{cards.map((card, index) => {
						return (<Card title={card.title} image={card.image} description={card.description}/>)
					})}
				</div>
			</div>
		</>
	);
};

export default Home;