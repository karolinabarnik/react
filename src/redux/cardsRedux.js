import shortid from 'shortid';

export const getCardsForColumn = ({cards, searchString}, columnId) => cards.filter(card => new RegExp(searchString, 'i').test(card.title) && card.columnId == columnId);

const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// action types
export const ADD_CARD = createActionName('ADD_CARD');


export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}