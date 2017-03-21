import _ from 'lodash'

const initialState = {
  cats: [ { name: 'Mr Cat-boto', img: 'https://cdn.costumewall.com/wp-content/uploads/2015/09/cute-cat-costumes-30.jpg' },
    { name: 'Chairman Meow', img: 'https://i.ytimg.com/vi/prALrHUJ8Ns/hqdefault.jpg' },
    { name: 'Buzz Meowyear', img: 'http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg' },
    { name: 'Lord Pawsly', img: 'http://static.fjcdn.com/pictures/Monocle_97f89a_115713.jpg' },
    { name: 'Boris', img: 'https://i.imgur.com/OXLdHaCl.jpg?1' },
    { name: 'Honeycomb', img: 'https://www.funnypica.com/wp-content/uploads/2015/05/TOP-30-Cute-Cats-Cute-Cat-1-570x356.jpg'}
  ],
  currentCat: { name: 'Mr Cat-boto', img: 'https://cdn.costumewall.com/wp-content/uploads/2015/09/cute-cat-costumes-30.jpg' }
}

export default function cats(state = initialState, action) {
  const randomCat = () => {
    return state.cats[_.random(state.cats.length)]
  }
  switch (action.type) {
    case 'cats/RANDOM_CAT':
      return { ...state, currentCat: randomCat() }
    default:
      return state
  }
}
