export default ({ env }) => ({
    'wysiwyg': {
        enabled: true,
        resolve: './src/plugins/wysiwyg'
    },
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID'),
                secretAccessKey: env('AWS_ACCESS_SECRET'),
                region: env('AWS_REGION'),
                params: {
                    Bucket: env('AWS_BUCKET_NAME'),
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    "strapi-google-translator": {
        enabled: true,
        config: {
          backendUrl: env("STRAPI_BACKEND_URL"),
          apiToken: env("STRAPI_GOOGLE_TRANSLATE_API_TOKEN"),
          googleJson: env("GOOGLE_TRANSLATE_JSON"),
        },
      },
});
  