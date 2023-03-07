import {createStore} from 'redux';
import {ItemReducer} from './reducer/ItemReducer';

const ItemStore = createStore(ItemReducer);
ItemStore.subscribe(state=>{
    console.log(`State Updated`);
})
export default ItemStore;