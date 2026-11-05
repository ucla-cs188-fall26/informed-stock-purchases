import { defineConfig } from 'wxt';

const BACKEND_URL = process.env.WXT_BACKEND_URL ?? 'http://localhost:8787';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'Informed Stock Purchases',
    description: 'Hover over investing terms and company names to see plain-language explanations.',
    permissions: ['storage'],
    // Only our own backend. Third-party APIs are called from the backend, never from the extension.
    host_permissions: [`${new URL(BACKEND_URL).origin}/*`],
  },
});
