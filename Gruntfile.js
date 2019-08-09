module.exports = function(grunt){
    grunt.initConfig({
        
        clean: ['coverage'],
        
        mocha_istanbul: {
            coverage: {
                src: 'test/*/*.js', // the folder(s) where the tests are
                 
                options: {
                    coverageFolder: 'coverage',
                    mask: '*spec.js',
                    reportFormats: ['html'],
                    mochaOptions: ['--compilers','js:babel-register','--recursive'], // any extra options 
                    istanbulOptions: [],
                    nodeExec: require.resolve('.bin/babel-node') 
                }
            } 
        }
 
    });
 
    grunt.event.on('coverage', function(lcovFileContents, done){
        // Check below on the section "The coverage event" 
        done();
    });
 
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
 
    grunt.registerTask('coverage', ['clean','mocha_istanbul:coverage']);
};
