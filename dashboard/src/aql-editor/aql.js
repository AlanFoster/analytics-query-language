// Note:
// VSCode and Monaco have implementation details for specifying tokens
// Please see both formats for full details of highlighting requirements:
//      - language.ts
//      - aql.tmLanguage.json

export const configuration = {
  "comments": {
    "lineComment": "--"
  },

  // symbols used as brackets
  brackets: [
    ["(", ")"]
  ],

  // symbols that are auto closed when typing
  autoClosingPairs: [
    {open: "(", close: ")" },
    {open: "'", close: "'"}
  ],

  // symbols that that can be used to surround a selection
  surroundingPairs: [
    { open: "(", close: ")" },
    { open: "'", close: "'" }
  ]
};
export const language = {
    defaultToken: 'invalid',
    tokenPostfix: '.aql',

    ignoreCase: true,

    keywords: [
        'select',
        'from',
        'where',
        'since',
        'until',
        'at',
        'and',
        'or',
        'true',
        'false'
    ],

    builtInFunctions: [
        'count',
        'max',
        'min'
    ],

    brackets: [
        ['(', ')', 'delimiter.parenthesis']
    ],

    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-zA-Z][a-zA-Z_0-9$]*/, {
                cases: {
                    '@builtInFunctions': 'predefined',
                    '@keywords': 'keyword',
                    '@default': 'identifier'
                }
            }],

            // whitespace
            {include: '@whitespace'},

            // delimiters and operators
            [/[()]/, '@brackets'],
            [/[*><=!\-+/]+/, 'operator'],

            // numbers
            [/\d+/, 'number'],
            [/[,]/, 'delimiter'],

            // strings
            [/'[^']*$/, 'string.invalid'],  // non-teminated string
            [/'/, {token: 'string.quote', bracket: '@open', next: '@string'}]
        ],

        string: [
            [/[^\\']+/, 'string'],
            [/'/, {token: 'string.quote', bracket: '@close', next: '@pop'}]
        ],

        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/--.*$/, 'comment'],
        ],
    },
};
