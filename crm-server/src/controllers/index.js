const { AuthController } = require('./auth');
const { MoviesController } = require('./movies');
const { UsersController } = require('./users');
const { ProjectsController } = require('./projects');

module.exports = [AuthController, MoviesController, UsersController, ProjectsController];
