export const mockBlocks = [
  {
    id: '0193a238-85cc-7657-b72e-671119ff2d84',
    name: 'первый блок',
    helper_text: 'первый блок первый блок',
    sequence: 1,
    questions: [
      {
        id: '0193a238-8673-7657-8a93-ea0831ffeb36',
        name: 'первый вопрос',
        type: 'slider',
        block: '0193a238-85cc-7657-b72e-671119ff2d84',
        sequence: 1,
        variants: [
          {
            to: 5,
            from: 1,
            step: 1,
            value: 1,
            labels: [
              { label: 'bad', value: 1 },
              { label: 'excellent', value: 5 },
            ],
          },
        ],
        helper_text: 'helper to the 1st quest',
        blockSequence: 1,
      },
      {
        id: '0193a238-8703-7657-9121-c62f93c478f9',
        name: 'второй вопрос',
        type: 'slider',
        block: '0193a238-85cc-7657-b72e-671119ff2d84',
        sequence: 2,
        variants: [
          {
            to: 100,
            from: 0,
            step: 1,
            value: 50,
            labels: [
              { label: 'Very cold', value: 0 },
              { label: 'Cold', value: 10 },
              { label: 'Moderate warm', value: 30 },
              { label: 'Warm', value: 50 },
              { label: 'Hot', value: 70 },
              { label: 'Boiled', value: 100 },
            ],
          },
        ],
        helper_text: '',
        blockSequence: 1,
      },
      {
        id: '1',
        name: 'Маслянистость',
        type: 'slider',
        block: 'block_1',
        sequence: 3,
        variants: [
          {
            from: 0,
            to: 10,
            step: 1,
            value: 7,
            labels: [
              { value: 0, label: 'Сухой' },
              { value: 10, label: 'Жирный' },
            ],
          },
        ],
        helper_text: '',
      },
      {
        id: '2',
        name: 'Сыпучесть (липкость)',
        type: 'slider',
        block: 'block_1',
        sequence: 4,
        variants: [
          {
            from: 0,
            to: 10,
            step: 1,
            value: 7,
            labels: [
              { value: 0, label: 'Сыпучий' },
              { value: 10, label: 'Липкий' },
            ],
          },
        ],
        helper_text: '',
      },
      {
        id: 'test',
        name: 'Тестовый слайдер',
        type: 'slider',
        block: 'block_1',
        sequence: 5,
        variants: [
          {
            from: 1,
            to: 5,
            step: 1,
            value: 2,
            labels: [
              { value: 1, label: 'Плохо' },
              { value: 3, label: 'Средне' },
              { value: 5, label: 'Хорошо' },
            ],
          },
        ],
        helper_text: '',
      },
    ],
  },
  {
    id: 'block_2',
    name: 'второй блок',
    helper_text: 'Добавленный второй блок',
    sequence: 2,
    questions: [
      {
        id: '4',
        name: 'Выберите один или несколько вариантов',
        type: 'checkbox',
        block: 'block_2',
        sequence: 1,
        variants: [
          { label: 'Вариант 1', value: false },
          { label: 'Вариант 2', value: false },
          { label: 'Вариант 3', value: true },
        ],
        helper_text: '',
      },
      {
        id: '5',
        name: 'Выберите один вариант ответа',
        type: 'radio',
        block: 'block_2',
        sequence: 2,
        variants: [
          { label: 'Вариант 1', value: false },
          { label: 'Вариант 2', value: true },
        ],
        helper_text: '',
      },
      {
        id: 'test',
        name: 'Тестовый слайдер',
        type: 'slider',
        block: 'block_2',
        sequence: 3,
        variants: [
          {
            from: 1,
            to: 5,
            step: 1,
            value: 2,
            labels: [
              { value: 1, label: 'Плохо' },
              { value: 3, label: 'Средне' },
              { value: 5, label: 'Хорошо' },
            ],
          },
        ],
        helper_text: '',
      },
      {
        id: '3333',
        name: 'Соотношение гранул по форме',
        type: 'number',
        block: 'block_2',
        sequence: 4,
        helper_text:
          'Введите процент для каждого элемента. введите "0", если вы не хотите ничего выделять для элемента. сумма должна быть равна 100.',
        variants: [
          { label: 'Диск', value: 10 },
          { label: 'Прямоуг. Б', value: 20 },
          { label: 'Прямоуг. М', value: 70 },
        ],
        checksum: 100,
      },
    ],
  },
  {
    id: '0193a5bc-bff6-771c-87f7-1aee04ecfc42',
    name: 'третий блок',
    helper_text: 'test-3',
    sequence: 3,
    questions: [
      {
        id: '0193a5bd-f871-771c-bf02-756ffaeef6bc',
        name: '3-2',
        type: 'slider',
        block: '0193a5bc-bff6-771c-87f7-1aee04ecfc42',
        sequence: 1,
        variants: [{ to: 100, from: -100, step: 1, value: 0, labels: [] }],
        helper_text: null,
        blockSequence: 3,
      },
      {
        id: '3',
        name: 'Соотношение гранул по форме',
        type: 'number',
        block: '0193a5bc-bff6-771c-87f7-1aee04ecfc42',
        sequence: 2,
        helper_text:
          'Введите процент для каждого элемента. введите "0", если вы не хотите ничего выделять для элемента. сумма должна быть равна 100.',
        variants: [
          { label: 'Диск', value: 10 },
          { label: 'Прямоуг. Б', value: 20 },
          { label: 'Прямоуг. М', value: 70 },
        ],
        checksum: 100,
      },
      {
        id: '2',
        name: 'Сыпучесть (липкость)',
        type: 'slider',
        block: '0193a5bc-bff6-771c-87f7-1aee04ecfc42',
        sequence: 3,
        variants: [
          {
            from: 0,
            to: 10,
            step: 1,
            value: 7,
            labels: [
              { value: 0, label: 'Сыпучий' },
              { value: 10, label: 'Липкий' },
            ],
          },
        ],
        helper_text: '',
      },
      {
        id: '245',
        block: '0193a5bc-bff6-771c-87f7-1aee04ecfc42',
        type: 'text',
        name: 'Напишите ответ',
        helper_text: 'Сколько весит альбатрос?',
        variants: [
          {
            label: 'Вариант 11',
            value: false,
          },
        ],
      },
    ],
  },
]
