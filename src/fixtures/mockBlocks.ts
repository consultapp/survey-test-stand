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
        to: 10,
        step: 5,
        value: 0,
        labels: [
          {
            value: 0,
            label: 'Матовая',
          },
          {
            value: 10,
            label: 'Блестящая',
          },
        ],
      },
    ],
    blockSequence: 0,
  },
  {
    id: '0193cf95-47fe-7a5a-8510-763f591f4e70',
    block: '0193b214-2c9e-7530-b99a-1e5220268a7e',
    type: 'number',
    name: 'num q',
    helper_text: '==',
    sequence: 2,
    variants: [
      {
        label: 'v1',
      },
      {
        label: 'v2',
      },
      {
        label: 'v3',
      },
    ],
    checksum: 97,
    blockSequence: 0,
  },

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
        step: 1,
        value: 3,
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
  },
  // {
  //   id: '0193b127-6bc7-7a2c-b520-51f45251460b',
  //   name: 'Установите соответствие между характеристиками и органоидами клетки инфузории, обозначенными цифрами на схеме: к каждой позиции, данной в первом столбце, подберите соответствующую позицию из второго столбца.',
  //   type: 'slider',
  //   block: '00000',
  //   sequence: 8,
  //   variants: [
  //     {
  //       to: 3,
  //       from: 1,
  //       step: 1,
  //       value: 1,
  //       labels: [
  //         {
  //           label: 'Хроматин',
  //           value: 1,
  //         },
  //         {
  //           label: 'Желудок',
  //           value: 3,
  //         },
  //       ],
  //     },
  //   ],
  //   helper_text:
  //     'ХАРАКТЕРИСТИКИ\nА)  Содержит хроматин\nБ)  Сливается с лизосомами\nВ)  Отвечает за поступление пищи в клетку\nГ)  Регулирует осмотическое давление\nД)  Регулирует ток жидкости в клетке\nЕ)  Участвует в расщеплении пищи',
  //   blockSequence: 0,
  // },
  // {
  //   id: '0193b122-3688-7a2c-ac86-e889cd2585b2',
  //   name: 'Сколько молекул ДНК содержится в трёх бивалентах, образованных тремя парами гомологичных хромосом? ',
  //   type: 'slider',
  //   block: '00000',
  //   sequence: 6,
  //   variants: [
  //     {
  //       to: 50,
  //       from: 10,
  //       step: 5,
  //       value: 20,
  //       labels: [
  //         {
  //           label: 'Мало',
  //           value: 10,
  //         },
  //         {
  //           label: 'Много',
  //           value: 50,
  //         },
  //       ],
  //     },
  //   ],
  //   helper_text: 'В ответе запишите только число.',
  //   blockSequence: 0,
  // },
  // {
  //   id: '0193b125-3984-7a2c-959e-b4b1a5c53a20',
  //   name: 'Сколько молекул ДНК содержится в трёх бивалентах, образованных тремя парами гомологичных хромосом?',
  //   type: 'slider',
  //   block: '00000',
  //   sequence: 5,
  //   variants: [
  //     {
  //       to: 5,
  //       from: 1,
  //       step: 1,
  //       value: 1,
  //       labels: [
  //         {
  //           label: 'Мало',
  //           value: 1,
  //         },
  //         {
  //           label: 'Много',
  //           value: 5,
  //         },
  //       ],
  //     },
  //   ],
  //   helper_text: 'В ответе запишите только число.',
  //   blockSequence: 0,
  // },
  // {
  //   id: '0193b123-8ddb-7a2c-83fd-a9db8eadd879',
  //   name: 'В семье, где родители хорошо слышали, и один из них имел светлые глаза, а другой карие, родился один ребенок глухой с карими глазами, а второй  — хорошо слышал и имел светлые глаза. Какова вероятность дальнейшего появления глухих детей с карими глазами в семье, если известно, что ген карих глаз доминирует над светлыми, глухота  — признак рецессивный, и обе пары генов находятся в разных хромосомах?',
  //   type: 'slider',
  //   block: '00000',
  //   sequence: 2,
  //   variants: [
  //     {
  //       to: 3,
  //       from: 1,
  //       step: 1,
  //       value: 2,
  //       labels: [
  //         {
  //           label: 'Светлые',
  //           value: 1,
  //         },
  //         {
  //           label: 'Карие',
  //           value: 2,
  //         },
  //         {
  //           label: 'Тёмные',
  //           value: 3,
  //         },
  //       ],
  //     },
  //   ],
  //   helper_text:
  //     'Ответ запишите в виде числа, показывающего искомую вероятность в процентах. Знак % не используйте.',
  //   blockSequence: 0,
  // },
  // {
  //   id: '0193b124-7ca2-750a-bf42-c8b3c0c3a88e',
  //   name: 'Экспериментатор произвёл закладку клубней картофеля на зиму. Как изменились масса клубней и количество крахмала?',
  //   type: 'slider',
  //   block: '00000',
  //   sequence: 9,
  //   variants: [
  //     {
  //       to: 3,
  //       from: 1,
  //       step: 1,
  //       value: 1,
  //       labels: [
  //         {
  //           label: 'Уменьшилась',
  //           value: 1,
  //         },
  //         {
  //           label: 'Не изменилась',
  //           value: 2,
  //         },
  //         {
  //           label: 'Увеличилась',
  //           value: 3,
  //         },
  //       ],
  //     },
  //   ],
  //   helper_text:
  //     'Для каждой величины определите соответствующий характер её изменения.',
  //   blockSequence: 0,
  // },
  // {
  //   id: '0193b126-7613-7a2c-88a2-09078950d5d8',
  //   name: 'В канун Нового года Дед Мороз решил отправить Снегурочку развозить подарки. На его карте изображена схема дорог между населёнными пунктами.  В помощь Снегурочке Дед Мороз составил таблицу расстояний между точками на карте, но в спешке перед праздником забыл подписать буквенные обозначения городов.',
  //   type: 'slider',
  //   block: '00000',
  //   sequence: 1,
  //   variants: [
  //     {
  //       to: 4,
  //       from: 1,
  //       step: 1,
  //       value: 1,
  //       labels: [
  //         {
  //           label: '10 рублей',
  //           value: 1,
  //         },
  //         {
  //           label: '1000 рублей',
  //           value: 4,
  //         },
  //       ],
  //     },
  //   ],
  //   helper_text: 'Сколько стоит бутылка водки?',
  //   blockSequence: 0,
  // },
  // {
  //   id: '0193b128-b2ec-750a-afac-5400027fc6fa',
  //   name: 'Каким номером на рисунке обозначена структура паразита, представляющая собой членик с оплодотворёнными яйцами?',
  //   type: 'slider',
  //   block: '00000',
  //   sequence: 4,
  //   variants: [
  //     {
  //       to: 20,
  //       from: 1,
  //       step: 1,
  //       value: 1,
  //       labels: [],
  //     },
  //   ],
  //   helper_text: 'Выберите число на шкале',
  //   blockSequence: 0,
  // },
  // {
  //   id: '0193b128-4345-7720-be9d-d9a14a0a680c',
  //   name: 'Установите последовательность процессов при биосинтезе белка в клетке.',
  //   type: 'slider',
  //   block: '00000',
  //   sequence: 7,
  //   variants: [
  //     {
  //       to: 6,
  //       from: 1,
  //       step: 1,
  //       value: 1,
  //       labels: [],
  //     },
  //   ],
  //   helper_text:
  //     '1.  Образование пептидной связи между аминокислотами.\n2.  Взаимодействие кодона иРНК и антикодона тРНК.\n3)  Выход тРНК из рибосомы.\n4.  Соединение иРНК с рибосомой.\n5.  Выход иРНК из ядра в цитоплазму.\n6.  Синтез иРНК.',
  //   blockSequence: 0,
  // },
  // {
  //   id: '0193b127-dc3a-7a2c-93f9-a13d56d7bcc1',
  //   name: 'Все перечисленные ниже понятия и процессы, кроме трёх, используют для описания световой стадии фотосинтеза в клетке растения. Определите три понятия, «выпадающих» из общего списка, и запишите в таблицу цифры, под которыми они указаны.',
  //   type: 'slider',
  //   block: '00000',
  //   sequence: 3,
  //   variants: [
  //     {
  //       to: 5,
  //       from: 1,
  //       step: 1,
  //       value: 1,
  //       labels: [],
  //     },
  //   ],
  //   helper_text:
  //     '1.  Перемещение электронов.\n2.  Фотолиз воды.\n3.  Окисление НАДФ·Н.\n4.  Восстановление углерода водородом.\n5.  Фотофосфорилирование.\n6.  Окислительное фосфорилирование.',
  //   blockSequence: 0,
  // },
  {
    id: '4',
    block: 'block_1',
    type: 'checkbox',
    name: 'Выберите один или несколько вариантов',
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
      {
        label: 'Вариант 3',
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
    sequence: 5,
  },

  {
    id: '6',
    block: 'block_1',
    type: 'text',
    name: 'Какой-то текст',
    helper_text: '',
    variants: [{ text: '' }],
    blockSequence: 0,
    sequence: 6,
  },
]
