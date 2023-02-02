//Default Gulp Task
export.defalut = series(scssTask,jsTask,browserSyncServe,watchTask);
//This is the Builded one
exports.build = series(scssTask,jsTask);
