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
              {
                label: 'bad',
                value: 1,
              },
              {
                label: 'excellent',
                value: 5,
              },
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
              {
                label: 'Very cold',
                value: 0,
              },
              {
                label: 'Cold',
                value: 10,
              },
              {
                label: 'Moderate warm',
                value: 30,
              },
              {
                label: 'Warm',
                value: 50,
              },
              {
                label: 'Hot',
                value: 70,
              },
              {
                label: 'Boiled',
                value: 100,
              },
            ],
          },
        ],
        helper_text: '',
        blockSequence: 1,
      },
      {
        id: '0193a5da-6403-771c-8c90-897a5232318e',
        name: 'третий вопрос',
        type: 'slider',
        block: '0193a238-85cc-7657-b72e-671119ff2d84',
        sequence: 3,
        variants: [
          {
            to: 4,
            from: 0,
            step: 1,
            value: 0,
            labels: [],
          },
        ],
        helper_text: '',
        blockSequence: 1,
      },
      {
        id: '0193a5de-b6db-7508-ad92-6fd94d1d5362',
        name: 'четвертый вопрос',
        type: 'slider',
        block: '0193a238-85cc-7657-b72e-671119ff2d84',
        sequence: 4,
        variants: [
          {
            to: 4,
            from: 1,
            step: 1,
            value: 1,
            labels: [],
          },
        ],
        helper_text: 'helper to the 4th question',
        blockSequence: 1,
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
        variants: [
          {
            to: 100,
            from: -100,
            step: 1,
            value: 0,
            labels: [],
          },
        ],
        helper_text: null,
        blockSequence: 3,
      },
      {
        id: '0193a5bd-a264-771c-9330-b015315296e7',
        name: 'вопрос№1',
        type: 'slider',
        block: '0193a5bc-bff6-771c-87f7-1aee04ecfc42',
        sequence: 1,
        variants: [
          {
            to: 10,
            from: -10,
            step: 1,
            value: 0,
            labels: [],
          },
        ],
        helper_text: null,
        blockSequence: 3,
      },
      {
        id: '0193a5bc-c0e0-771c-ab5d-7910818c54a8',
        name: '3-1',
        type: 'slider',
        block: '0193a5bc-bff6-771c-87f7-1aee04ecfc42',
        sequence: 2,
        variants: [
          {
            to: 5,
            from: 1,
            step: 1,
            value: 1,
            labels: [
              {
                label: 'Low',
                value: 1,
              },
              {
                label: 'High',
                value: 5,
              },
            ],
          },
        ],
        helper_text: null,
        blockSequence: 3,
      },
    ],
  },
]
