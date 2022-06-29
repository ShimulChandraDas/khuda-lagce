import React, { useState } from 'react';

const FoodSearch = () => {
    // const [food, setFood] = useState("");


    // const searchFood = (e) => {
    //     e.preventDefault();
    //     const foods = e.target.value
    //     //console.log('food search');
    //     // const search = e.target.value;
    //     // console.log(search);
    //     console.log('foods', foods);
    // }

    const [food, setFood] = useState('');
    const handleChange = event => {
        setFood(event.target.value);
    };


    const searchFood = event => {
        event.preventDefault();

        // 👇️ value of input field
        console.log('handleClick 👉️', food);
    };
    return (
        <div>
            <h1 className='text-center text-5xl font-bold '>What do you want to eat today?</h1>
            <div class="form-control w-full mx-auto pt-10">
                <div class="input-group justify-center content-center  ">
                    <input type="text"
                        id="message"
                        name="message"
                        onChange={handleChange}
                        value={food}
                        autoComplete="off"
                        placeholder="Search Your food"
                        class="input "
                    />
                    <button
                        onClick={searchFood}
                        class="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodSearch;