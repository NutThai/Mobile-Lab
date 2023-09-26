import { MEALS } from "../../data/dummy-data"
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            let index = state.favoriteMeals.findIndex(val => val.id == action.mealId)
            let updateFav
            if (index == -1) {
                newFav = state.meals.find(meal => meal.id == action.mealId)
                updateFav = [...state.favoriteMeals, newFav]
            }
            else {
                updateFav = [...state.favoriteMeals];
                updateFav.splice(index, 1);
            }
            return { ...state, favoriteMeals: updateFav }
        default:
            return state
    }
}
export default mealsReducer;