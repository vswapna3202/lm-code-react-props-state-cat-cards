import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import CatCard from './components/cat_card';

function App() {

	// JavaScript/TypeScript code can be inserted here!
	const [ cats, setCats ] = useState<Array<Cat>>(
		[
			{
					 name: 'Little Miss Purrfect',
					 species: 'Cat',
					 favFoods: ['wet food', 'dry food'],
					 birthYear: 2016,
				 },
				 {
					 name: 'Mr Gwumpy',
					 species: 'Cat',
					 favFoods: ['caviar'],
					 birthYear: 2016,
				 },
				 {
					 name: 'Dopey',
					 species: 'Cat',
					 favFoods: ['bugs'],
					 birthYear: 2018,
				 },
				 {
					 name: 'Jumpy',
					 species: 'Scaredy Cat',
					 favFoods: ['not cucumbers!'],
					 birthYear: 2008,
				 },
				 {
					 name: 'Meowsalot',
					 species: 'Cat',
					 favFoods: ['tuna', 'catnip', 'celery'],
					 birthYear: 2012,
				 },
				 {
					 name: 'Cindy Clawford',
					 species: 'Cat',
					 favFoods: ['mice'],
					 birthYear: 2012,
				 },
				 {
					 name: 'Katy Purry',
					 species: 'Cat',
					 favFoods: ['cigarettes', 'coffee'],
					 birthYear: 2015,
				 },
				 {
					 name: 'Dr. Von Belly-Rub',
					 species: 'Cat',
					 favFoods: ['salt'],
					 birthYear: 2020,
				 },
				 {
					 name: 'Blobby',
					 species: 'Bird?',
					 favFoods: ['your soul'],
					 birthYear: 2020,
				 },
				 {
					 name: 'El Taco',
					 species: 'Cat',
					 favFoods: ['tequila', 'bar snax'],
					 birthYear: 1995,
				 },
				 {
					 name: 'Nibbles',
					 species: 'Hungry Cat',
					 favFoods: ['blankets', 'feet', 'tinsel'],
					 birthYear: 2003,
				 },
				 {
					 name: 'BoopySnoot',
					 species: 'Tiny Cat',
					 favFoods: ['milk'],
					 birthYear: 2021,
				 },
				 {
					name: "Captain Catface",
					species: "Sea Cattain",
					favFoods: ["fish, rum"],
					birthYear: 2016,
				  }
		 ]
	);
	/*console.log("Our pretties 😻: ", cats);*/
	const catsCount = cats.length;
	return (
		<>
			<Navbar />
			<Header catsCount={catsCount}/>

			<main>
				<div className='cards__wrapper'>		  
						{cats.map((cat, index) => (
							<CatCard 
								name={cat.name}
								species={cat.species}
								favFoods={cat.favFoods}
								birthYear={cat.birthYear}
								catIndex={index}
							/> 
						))}						
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
