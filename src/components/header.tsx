interface HeaderProps{
	catsCount : number;
	dogsCount : number;
}

const Header: React.FC<HeaderProps> = (props) => (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			There are currently {props.catsCount} Cats in this Cat App
			There are currently {props.dogsCount} Dogs in this Dog App
		</h2>
	</header>
);

export default Header;
