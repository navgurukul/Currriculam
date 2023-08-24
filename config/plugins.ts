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
                sizeLimit: 1000 * 1024 * 1024, // 1000 MB in bytes
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});
  