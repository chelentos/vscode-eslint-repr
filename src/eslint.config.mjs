import gravityBase from '@gravity-ui/eslint-config';
import gravityClient from '@gravity-ui/eslint-config/client';
import gravityImportOrder from '@gravity-ui/eslint-config/import-order';
import gravityPrettier from '@gravity-ui/eslint-config/prettier';

export default [...gravityBase, ...gravityClient, ...gravityImportOrder, ...gravityPrettier];
