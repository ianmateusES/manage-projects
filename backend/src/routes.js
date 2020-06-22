import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';

const routes = new Router();

routes.get('/projects', ProjectController.show);

routes.get('/projects/:id', ProjectController.index);

routes.post('/projects', ProjectController.store);

routes.put('/projects/:id', ProjectController.update);

routes.delete('/projects/:id', ProjectController.destroy);

export default routes;
