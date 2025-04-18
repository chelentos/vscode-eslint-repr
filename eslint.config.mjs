import gravityBase from '@gravity-ui/eslint-config';
import gravityImportOrder from '@gravity-ui/eslint-config/import-order';
import gravityPrettier from '@gravity-ui/eslint-config/prettier';
import gravityServer from '@gravity-ui/eslint-config/server';

const cfg = [
    ...gravityBase,
    ...gravityServer,
    ...gravityImportOrder,
    ...gravityPrettier,
    {
        rules: {
            'no-console': 'off',
            jsdoc: 'off',
        },
    },
    {
        ignores: ['node_modules', 'dist', 'storybook-static', 'statoscope'],
    },
];

export default cfg;
