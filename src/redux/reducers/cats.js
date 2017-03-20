import _ from 'lodash'

/* eslint-disable no-shadow */
const initialState = { cats: [
    {name: 'Dune', img: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'},
    {name: 'Chairman Meow', img: 'https://i.ytimg.com/vi/prALrHUJ8Ns/hqdefault.jpg'},
    {name: 'Buzz Meowyear', img: 'http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg'},
    {name: 'Lord Pawsly', img: 'http://static.fjcdn.com/pictures/Monocle_97f89a_115713.jpg'},
    {name: 'Boris', img: 'https://i.imgur.com/OXLdHaCl.jpg?1'}
  ],
  cat: { name: 'Dune', img: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg' }
}

export default function cats(state = initialState, action) {
  const randomCat = () =>{
    return state.cats[_.random(0, state.cats.length -1)]
  }

  switch (action.type) {
    case 'cats/RANDOM_CAT':
      return { ...state, cat: randomCat() }
    default:
      return state
  }
}
