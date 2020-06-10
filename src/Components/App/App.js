import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import './App.css';

const App = () => {
    const API_ID = '9e3163c4';
    const API_KEY = '98010d2d06396a5ff6c48c3495b2b490';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    const urlReq = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

    useEffect(() => {
        getRecipes();
        console.log('asd');
    }, [query]);

    async function getRecipes() {
        const response = await fetch(urlReq);
        const data = await response.json();
        setRecipes(data.hits);
    }

    function updateSearch(e) {
        setSearch(e.target.value);
    }

    function getSearch(e) {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className="App">
            <form className="search-form" onSubmit={getSearch}>
                <input type="text" className="search-bar" value={search} onChange={updateSearch} />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map((recipe) => (
                    <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} key={recipe.recipe.label} />
                ))}
            </div>
        </div>
    );
};

export default App;
