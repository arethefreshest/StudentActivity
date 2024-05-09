module.exports = function(api) {
    api.cache(true);
    return {
        presets: [
            'babel-preset-expo',
            'module:metro-react-native-babel-preset'
        ],
        plugins: [
            ['@babel/plugin-transform-private-methods', { loose: true }],
            ['@babel/plugin-transform-class-properties', { loose: true }],
            ['module:react-native-dotenv', {
                moduleName: '@env',
                path: '.env',
                blacklist: null,
                whitelist: null,
                safe: false,
                allowUndefined: true
            }]
        ]
    };
};