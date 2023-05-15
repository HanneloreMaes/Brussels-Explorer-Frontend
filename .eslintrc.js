module.exports = {
	root: true,
	extends: ['@react-native-community', 'airbnb', 'prettier', 'prettier/react', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: [ '@typescript-eslint' ],
	overrides: [
		{
			files: [ '*.ts', '*.tsx' ],
			rules: {
				'@typescript-eslint/no-shadow': [ 'error' ],
				'no-shadow': 'off',
				'no-undef': 'off',
			},
		},
	],
	rules: {
		'indent': [ 'error', 'tab' ],
		'no-unused-vars': 0,
		'no-shadow': 0,
		'no-use-before-define': 0,
		'prettier/prettier': 0,
		'no-nested-ternary': 'off',
		'no-underscore-dangle': 'off',

		// COMMON ESLINT
		'eol-last': 'error',
		'no-multiple-empty-lines': [ 'error', { 'max': 1,
			'maxEOF': 0 } ],
		'no-trailing-spaces': 'error',
		'default-param-last': 'off',
		'consistent-return': 'off',
		'object-curly-spacing': [ 'error', 'always', {
			'arraysInObjects': true,
			'objectsInObjects': true,
		} ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'computed-property-spacing': [ 'error', 'always' ],
		'object-property-newline': 'error',
		'max-len': [ 'warn', {
			'code': 120,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true,
			ignoreUrls: true,
		} ],
		'spaced-comment': [
			'error',
			'always',
			{
				markers: [ '/' ],
			},
		],

		// TYPESCRIPT ESLINT
		'@typescript-eslint/quotes': [ 'error', 'single' ],
		'@typescript-eslint/semi': [ 'error', 'always' ],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
		'@typescript-eslint/tslint/config': [
			'error',
			{
				rules: {
					'import-spacing': true,
					typedef: true,
					whitespace: true,
				},
			},
		],

		// IMPORT RULES
		'import/no-unresolved': 0,
		'import/no-extraneous-dependencies': 'off',
		'import/extensions': 0,
		'import/no-cycle': 0,
		'import/prefer-default-export': 'off',
		'import/order': [
			'error',
			{
				'groups': [ 'builtin', 'external', 'internal' ],
				'pathGroups': [
					{
						'pattern': 'react',
						'group': 'external',
						'position': 'before',
					},
				],
				'pathGroupsExcludedImportTypes': [ 'react' ],
				'newlines-between': 'always',
				'alphabetize': {
					'order': 'asc',
					'caseInsensitive': true,
				},
			},
		],

		// GLOBAL RULES
		'global-require': 'off',

		// REACT
		'react/jsx-props-no-spreading': 'off',
		'react/no-render-return-value': 'error',
		'react/jsx-filename-extension': [ 0, { extensions: [ '.js', '.jsx' ] } ],
		'react/function-component-definition': 'off',
		'react/react-in-jsx-scope': 'error',
		'react/style-prop-object': 0,

	},
};
