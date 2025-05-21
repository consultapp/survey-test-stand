export const mockBlocks: IQuestions = [
  {
    id: '0193bcde-c5a9-751a-9058-b4bf907b090d',
    block: '0193b214-2c9e-7530-b99a-1e5220268a7e',
    type: 'slider',
    name: 'Блеск',
    helper_text: 'Оцените блеск продукта',
    sequence: 1,
    variants: [
      {
        from: 0,
        to: 15,
        step: 0.5,
        value: undefined,
        labels: [
          {
            value: 0,
            label: 'Матовая очень много текста еще зачем-то тут написали',
          },
          {
            value: 15,
            label: 'Блестящая',
          },
        ],
      },
    ],
    blockSequence: 0,
    isRequired: true,
  },
  // {
  //   id: '0193cf95-47fe-7a5a-8510-763f591f4e70',
  //   block: '0193b214-2c9e-7530-b99a-1e5220268a7e',
  //   type: 'number',
  //   name: 'num q',
  //   helper_text: '==',
  //   sequence: 2,
  //   variants: [
  //     {
  //       label: 'v1',
  //     },
  //     {
  //       label: 'v2',
  //     },
  //     {
  //       label: 'v3',
  //     },
  //   ],
  //   checksum: 97,
  //   blockSequence: 0,
  // },

  {
    id: '0193b121-5dca-7a2c-b55e-6b128f799a77',
    name: 'Экспериментатор произвёл закладку клубней картофеля на зиму. Как изменились масса клубней и количество крахмала? ',
    type: 'slider',
    block: '00000',
    sequence: 2,
    variants: [
      {
        to: 5,
        from: 1,
        step: 0.5,
        value: undefined,
        labels: [
          {
            label: 'Отвратительно',
            value: 1,
          },
          {
            label: 'Средне',
            value: 3,
          },
          {
            label: 'Прекрасно',
            value: 5,
          },
        ],
      },
    ],
    helper_text:
      'Для каждой величины определите соответствующий характер её изменения.',
    blockSequence: 0,
    isRequired: true,
  },

  {
    isRequired: true,
    id: '4',
    block: 'block_1',
    type: 'checkbox',
    name: 'Выберите один или несколько вариантов',
    helper_text: '',
    variants: [
      {
        label:
          'Loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        value: false,
      },
      {
        label: 'Вариант 2',
        value: false,
      },
      {
        label: 'Вариант 3',
        value: false,
      },
      {
        label: 'Вариант 4',
        value: false,
      },
      {
        label: 'Вариант 5',
        value: false,
      },
      {
        label: 'Вариант 6',
        value: false,
      },
      {
        label: 'Вариант 8',
        value: false,
      },
      {
        label: 'Разработанннннннннннннннное молоко',
        value: false,
      },
      {
        label: 'Вариант 10',
        value: false,
      },
      {
        label: 'Вариант 11',
        value: false,
      },
      {
        label: 'Вариант 12',
        value: false,
      },
      {
        label: 'Вариант 13',
        value: false,
      },
      {
        label: 'Вариант 310',
        value: false,
      },
      {
        label: 'Вариант 311',
        value: false,
      },
      {
        label: 'Вариант Вариант Вариант 312',
        value: false,
      },
      {
        label: 'Вариант 313',
        value: false,
      },
    ],
    blockSequence: 0,
    sequence: 4,
  },
  {
    id: '5',
    block: 'block_1',
    type: 'radio',
    name: 'Выберите один вариант ответа',
    helper_text: '',
    variants: [
      {
        label: 'Вариант 1',
        value: false,
      },
      {
        label: 'Вариант 2',
        value: false,
      },
    ],
    blockSequence: 0,
    sequence: 6,
  },

  {
    id: '6',
    block: 'block_1',
    type: 'text',
    name: 'Какой-то текст',
    helper_text: '',
    variants: [{ text: 'абвгде' }],
    blockSequence: 0,
    sequence: 5,
  },
]
