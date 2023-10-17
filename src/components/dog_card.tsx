interface dogCardProps {
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
}

const DogCard : React.FC<dogCardProps> = (props) => {
    return (
        <div className="card">
            <h3 className="card__text card__header">{props.name}</h3>
            <p className="card__text">Dog Species: {props.species}</p>
            <p className="card__text">Dog Favourite Foods: {props.favFoods.join(', ')}</p>
            <p className="card__text">Dog Birth Year: {props.birthYear}</p>
        </div>
    );
}  

export default DogCard;