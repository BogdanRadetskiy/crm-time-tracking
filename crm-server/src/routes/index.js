const appRouter = require('express').Router();

const authRouter = require('./auth');
const userRouter = require('./users');
const movieRouter = require('./movies');
const projectRouter = require('./projects');
const accountRouter = require('./account');

const { authenticate, authenticateAdmin } = require('../utils/authentication');

appRouter.use('/auth', authRouter);
appRouter.use('/users', authenticate, authenticateAdmin, userRouter);
appRouter.use('/movies', authenticate, movieRouter);
appRouter.use('/account', authenticate, accountRouter);
appRouter.use('/projects', authenticate, projectRouter);

module.exports = appRouter;
