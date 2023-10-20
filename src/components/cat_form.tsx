import { useState } from 'react';
import Cat from '../data/cat';

interface CatFormProps {
    onAddCat: (newCat : Cat) => void;
}

const CatForm : React.FC<CatFormProps> = ({onAddCat}) => {
    const[formData, setFormData] = useState({
        name: '',
        species: '',
        favFoods: [] as string[],
        birthYear: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;        
        if(name === 'favFoods'){
            setFormData({
            ...formData,
            [name]: value.split(',').map(food => food.trim()),
            }); 
        }else{
            setFormData({
            ...formData,
            [name]: value,
            });
        }        
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddCat(formData);
        setFormData({
            name: '', 
            species: '', 
            favFoods: [] as string[], 
            birthYear: 0,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
          <div className="card">    
            <p className="card__text">Add New Cat</p>
            <div className="card__text__card__header">
                <label className="card__text" htmlFor="name">Cat Name:</label>
                <input type="text" id="name" name="name" value={formData.name}
                    onChange={handleChange}
                    required />
            </div>
            <div>
                <label className="card__text" htmlFor="species">Species:</label>
                <input type="text" id="species" name="species" value={formData.species}
                    onChange={handleChange}
                    required />
            </div>
            <div>
                <label className="card__text" htmlFor="favFoods">Favourite Foods:</label>
                <input type="text" id="favFoods" name="favFoods" value={formData.favFoods.join(', ')}
                    onChange={handleChange}
                    required />
            </div>
            <div>
                <label className="card__text" htmlFor="birthYear">Birth Year:</label>
                <input type="text" id="birthYear" name="birthYear" value={formData.birthYear}
                    onChange={handleChange}
                    required />
            </div>
            <button type="submit">Submit</button>
          </div>    
        </form>
    )
}    

export default CatForm;