export const mockBlocks: IQuestions = [
  {
    id: 'ПЕРВЫЙ СЛАЙДЕР',
    block: '0193b214-2c9e-7530-b99a-1e5220268a7e',
    type: 'slider',
    name: '(ПЕРВЫЙ СЛАЙДЕР) Блеск ',
    helper_text: 'Оцените блеск продукта',
    sequence: 1,
    variants: [
      {
        id: '1001',
        from: 1,
        to: 15,
        step: 0.5,
        value: undefined,
        labels: [
          {
            value: 0,
            label: 'BAD MARK - should not be displayed',
          },
          {
            value: 1,
            label: 'Матовая очень много текста еще зачем-то тут написали',
          },
          {
            value: 2.5,
            label: 'Матовая очень много текста еще зачем-то тут написали',
          },
          {
            value: 7,
            label: 'Матовая очень много текста еще зачем-то тут написали1',
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
    id: 'ВТОРОЙ СЛАЙДЕР',
    name: '(ВТОРОЙ СЛАЙДЕР) Экспериментатор произвёл закладку клубней картофеля на зиму. Как изменились масса клубней и количество крахмала? ',
    type: 'slider',
    block: '00000',
    sequence: 2,
    variants: [
      {
        id: '1002',
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
            value: 3.5,
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
    visibilityFilter: {
      parentId: 'ПЕРВЫЙ СЛАЙДЕР',
      type: 'range',
      range: { from: 4, to: 5 },
    },
  },

  {
    id: '4',
    block: 'block_1',
    type: 'checkbox',
    name: 'Выберите один или несколько вариантов',
    helper_text: '',
    variants: [
      {
        id: '1003',
        label: 'никакие из представленных вариантов1',
        value: false,
        isExclusive: true,
      },
      {
        id: '1004',
        label: 'никакие из представленных вариантов2',
        value: false,
        isExclusive: true,
      },
      {
        id: '1005',
        label: 'никакие из представленных вариантов3',
        value: false,
        isExclusive: true,
      },
      {
        id: '1006',
        label:
          'Loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        value: false,
      },
      {
        id: '1007',
        label: 'Вариант 2',
        value: false,
      },
      {
        id: '1008',
        label: 'Вариант 3',
        value: false,
      },
      {
        id: '1009',
        label: 'Вариант 4',
        value: false,
      },
      {
        id: '1010',
        label: 'Вариант 5',
        value: false,
      },
      {
        id: '1011',
        label: 'Вариант 6',
        value: false,
      },
      {
        id: '1012',
        label: 'Вариант 8',
        value: false,
      },
      {
        id: '1013',
        label: 'Разработанннннннннннннннное молоко',
        value: false,
      },
      {
        id: '1014',
        label: 'Вариант 10',
        value: false,
      },
      {
        id: '1015',
        label: 'Вариант 11',
        value: false,
      },
      {
        id: '1016',
        label: 'Вариант 12',
        value: false,
      },
      {
        id: '1017',
        label: 'Вариант 13',
        value: false,
      },
      {
        id: '1018',
        label: 'Вариант 310',
        value: false,
      },
      {
        id: '1019',
        label: 'Вариант 311',
        value: false,
      },
      {
        id: '1020',
        label: 'Вариант Вариант Вариант 312',
        value: false,
      },
      {
        id: '1021',
        label: 'Вариант 313',
        value: false,
      },
    ],
    blockSequence: 0,
    sequence: 7,
  },
  {
    id: '5',
    block: 'block_1',
    type: 'radio',
    name: 'Выберите один вариант ответа',
    helper_text: '',
    variants: [
      {
        id: '1022',
        label:
          'Loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        value: false,
      },
      {
        id: '1023',
        label: 'Вариант 2',
        value: false,
      },
      {
        id: '1024',
        label: 'Вариант 3',
        value: false,
      },
      {
        id: '1025',
        label: 'Вариант 4',
        value: false,
      },
      {
        id: '1026',
        label: 'Вариант 5',
        value: false,
      },
      {
        id: '1027',
        label: 'Вариант 6',
        value: false,
      },
      {
        id: '1028',
        label: 'Вариант 8',
        value: false,
      },
      {
        id: '1029',
        label: 'Разработанннннннннннннннное молоко',
        value: false,
      },
      {
        id: '1030',
        label: 'Вариант 10',
        value: false,
      },
      {
        id: '1031',
        label: 'Вариант 11',
        value: false,
      },
      {
        id: '1032',
        label: 'Вариант 12',
        value: false,
      },
      {
        id: '1033',
        label: 'Вариант 13',
        value: false,
      },
      {
        id: '1034',
        label: 'Вариант 310',
        value: false,
      },
      {
        id: '1035',
        label: 'Вариант 311',
        value: false,
      },
      {
        id: '1036',
        label: 'Вариант Вариант Вариант 312',
        value: false,
      },
      {
        id: '1037',
        label: 'Вариант 313',
        value: false,
      },
    ],
    blockSequence: 0,
    sequence: 8,
  },

  {
    id: '6',
    block: 'block_1',
    type: 'text',
    name: 'Какой-то текст (ВИДЕН ЕСЛИ ПЕРВЫЙ СЛАЙДЕР БОЛЬШЕ 2 И МЕНЬШЕ 5.5)',
    helper_text: '',
    variants: [{ id: '1038', text: '' }],
    blockSequence: 0,
    sequence: 5,
    visibilityFilter: {
      parentId: 'ПЕРВЫЙ СЛАЙДЕР',
      type: 'range',
      range: { from: 2, to: 5.5 },
    },
  },
  {
    id: '7',
    isRequired: true,
    block: 'block_1',
    type: 'text',
    name: 'Какой-то текст (ВИДЕН ЕСЛИ ВТОРОЙ СЛАЙДЕР БОЛЬШЕ 4 И МЕНЬШЕ 5)',
    helper_text: '',
    variants: [{ id: '1039', text: '' }],
    blockSequence: 0,
    sequence: 5,
    visibilityFilter: {
      parentId: 'ВТОРОЙ СЛАЙДЕР',
      type: 'range',
      range: { from: 4, to: 5 },
    },
  },
]
