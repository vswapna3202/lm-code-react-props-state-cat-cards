import Dog from '../data/dog'

interface dogCardProps {
    dogObject: Dog;
}

const DogCard : React.FC<dogCardProps> = (props) => {
    return (
        <div className="card">
            <h3 className="card__text card__header">{props.dogObject.name}</h3>
            <p className="card__text">Dog Species: {props.dogObject.species}</p>
            <p className="card__text">Dog Favourite Foods: {props.dogObject.favFoods.join(', ')}</p>
            <p className="card__text">Dog Birth Year: {props.dogObject.birthYear}</p>
        </div>
    );
}  

export default DogCard;