import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      saml: {
        name: 'EverywareEntra',
        metadata: {
          metadataContent: 'https://login.microsoftonline.com/530083c0-e368-4614-8d13-cb3ac9073740/federationmetadata/2007-06/federationmetadata.xml?appid=9306f21f-c48b-4ae7-a2df-35b5adcd879b', // or content of the metadata file
          metadataType: 'URL'
        },
      },
      callbackUrls: [
        'http://localhost:5173/',
        'https://main.dwcj519lsme07.amplifyapp.com/'
      ],
      logoutUrls: ['http://localhost:5173/', 'https://main.dwcj519lsme07.amplifyapp.com/'],
    }
  }
});
