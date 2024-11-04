import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      loginWithAmazon: {
        clientId: secret('amzn1.application-oa2-client.3ea04696df8440381a1774c5d751521'),
        clientSecret: secret('amzn1.oa2-cs.v1.79b4b56049ce083a8c57a74ae9d4c047179d4976c996199562660248d032e985'),       
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
