export const mockData: IQuestions = [
  {
    id: '1',
    block: 'block_1',
    type: 'slider',
    name: 'Маслянистость',
    helper_text: '',
    variants: [
      {
        from: 0,
        to: 10,
        step: 1,
        value: 7,
        labels: [
          {
            value: 0,
            label: 'Сухой',
          },
          {
            value: 10,
            label: 'Жирный',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    block: 'block_1',
    type: 'slider',
    name: 'Сыпучесть (липкость)',
    helper_text: '',
    variants: [
      {
        from: 0,
        to: 10,
        step: 1,
        value: 7,
        labels: [
          {
            value: 0,
            label: 'Сыпучий',
          },
          {
            value: 10,
            label: 'Липкий',
          },
        ],
      },
    ],
  },
  {
    id: 'test',
    block: 'block_1',
    type: 'slider',
    name: 'Тестовый слайдер',
    helper_text: '',
    variants: [
      {
        from: 1,
        to: 5,
        step: 1,
        value: 2,
        labels: [
          {
            value: 1,
            label: 'Плохо',
          },
          {
            value: 3,
            label: 'Средне',
          },
          {
            value: 5,
            label: 'Хорошо',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    block: 'block_1',
    type: 'number',
    name: 'Соотношение гранул по форме',
    helper_text:
      'Введите процент для каждого элемента. введите "0", если вы не хотите ничего выделять для элемента. сумма должна быть равна 100.',
    variants: [
      {
        label: 'Диск',
        value: 10,
      },
      {
        label: 'Прямоуг. Б',
        value: 20,
      },
      {
        label: 'Прямоуг. М',
        value: 70,
      },
    ],
    checksum: 100,
  },
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
        value: true,
      },
    ],
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
        value: true,
      },
    ],
  },
]
