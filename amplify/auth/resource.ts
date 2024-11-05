import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENTID'),
        clientSecret: secret('GOOGLE_SECRET')
      },
      loginWithAmazon: {
        clientId: secret('AMAZON_CLIENTID'),
        clientSecret: secret('AMAZON_SECRET'),       
        attributeMapping: {
          email: 'email'
        }
      },
      callbackUrls: [
        'http://localhost:5173/',
        'https://main.dwcj519lsme07.amplifyapp.com/'
      ],
      logoutUrls: ['http://localhost:5173/', 'https://main.dwcj519lsme07.amplifyapp.com/'],
    }
  }
});
