module.exports = ({ env }) => ({
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
                sizeLimit: 50 * 1024 * 1024, // 50 MB in bytes
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    'i18n': {
      enabled: true,
    },
    ckeditor5: {
      enabled: true,
    },

});
