const INITIAL_STATE = {
    allItems : []
};

export const ItemReducer = (state=INITIAL_STATE,action) =>{
    if(action.type === 'ADD'){
        let tempItems = state.allItems;
        tempItems.push(action.payload);
        return {...state,allItems : tempItems};
    }
}