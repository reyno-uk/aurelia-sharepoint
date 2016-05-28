var gulp = require("gulp");
var Promise = require("bluebird");
var config = require("../export");
var paths = require("../paths");

gulp.task("export", ["bundle"], (callback) => {
   
    return Promise.all(Object.keys(config).map(key => {
        
        return gulp.src(config[key])
            .pipe(gulp.dest("../addin/" + key));
        
    }));

});