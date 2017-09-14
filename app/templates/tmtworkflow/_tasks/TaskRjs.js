const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const amdOptimize = require('amd-Optimize');

module.exports = function(gulp, config) {
    gulp.task('rjs', function() {
        gulp.src('./dev/js/rjs/*.js')
            .pipe(amdOptimize('lib', {
                paths: {
                    "vue": 'src/js/vendor/vue.min',
                    "jquery": "src/js/vendor/jquery.min",
                    "underscore": 'src/js/vendor/underscore.min',
                    "lodash": 'src/js/vendor/lodash.min',
                    'Vrouter': 'src/js/vendor/vueRouter',
                    'Vuex': 'src/js/vendor/vuex',
                    'swiper': 'src/js/vendor/swiper.min',
                    'layer': 'src/js/vendor/layer.min',
                    'lazyload': 'src/js/vendor/lazyload.min',
                    "clipboard": 'src/js/vendor/clipboard'
                },
                exclude: [],
                shim: {}
            }))
            .pipe(concat("lib.js"))
            .pipe(uglify({
                mangle: {
                    except: ['require', 'exports', 'module', '$', '_']
                }
            }))
            .pipe(gulp.dest('dist/js/rjslib'))
    });
};