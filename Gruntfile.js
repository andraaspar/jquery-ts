module.exports = function(grunt) {
	
	grunt.initConfig((function() {
		
		var TEST_COUNT = 1;
		
		var config = {
			clean: {
				tests: []
			},
			typescript: {
				tests: {
					files: {}
				}
			}
		};
		
		for (var i = 1; i <= TEST_COUNT; i++) {
			var folderPath = 'build/test' + i;
			var jsPath = folderPath + '/test.js';
			
			config.clean.tests.push(jsPath);
			
			config.typescript.tests.files[jsPath] = 'test/test' + i + '/Main.ts';
		}
		
		return config;
	})());

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-typescript');

	grunt.registerTask('compile', ['clean:tests','typescript:tests']);
	grunt.registerTask('default', ['compile']);
};