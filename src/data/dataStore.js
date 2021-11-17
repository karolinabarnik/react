export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export const infoData = {
  title: 'All the most important information',
  description: 'Donec ut ante at augue egestas volutpat nec vel velit. Nulla fringilla, quam sed porttitor posuere, velit ipsum malesuada sapien, vel pulvinar nisl enim non odio. Integer non erat in justo mattis gravida. Sed non ultrices nisi. In nec risus sagittis, auctor velit vitae, dapibus metus. Quisque tincidunt tortor felis, sit amet tempus lectus vulputate nec. Etiam id tincidunt dui, ac varius lorem. Maecenas eget condimentum eros. Fusce facilisis sem non turpis faucibus dignissim. Etiam fermentum, massa quis feugiat molestie, sapien enim rhoncus nisi, vel suscipit est nulla eu nisl. Vivamus id purus ac nisi sagittis volutpat et nec nulla.',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

export const faqData = {
  title: 'Frequently asked questions',
  description: 'In eleifend, lectus nec porttitor ultrices, dui sapien eleifend mi, quis blandit felis augue ac quam. Sed id ligula tempor, ultrices nibh sed, fringilla elit. Mauris pellentesque id ligula vel egestas. Phasellus ultrices commodo ipsum id sagittis. Aenean massa libero, tincidunt ac blandit vitae, convallis ac purus. Proin leo ex, vestibulum ut vulputate vel, tempor quis ex. Ut pulvinar, lorem eget tristique tincidunt, sapien odio eleifend velit, ac tincidunt mauris metus ut justo. Curabitur massa elit, ullamcorper eget vulputate non, pellentesque at enim.',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

export default initialStoreData;
