import Project from '../models/Project';

class ProjectController {
  async index(req, res) {
    const { id } = req.params;
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(400).json({ error: 'Project not exist' });
    }

    return res.json(project);
  }

  async show(req, res) {
    const projects = await Project.findAll();

    return res.json(projects);
  }

  async store(req, res) {
    const { id, title, owner, team } = await Project.create(req.body);

    return res.json({
      id,
      title,
      owner,
      team,
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(400).json({ error: 'Project not exist' });
    }

    const { title, owner, team } = await project.update(req.body);

    return res.json({
      id,
      title,
      owner,
      team,
    });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(400).json({ error: 'Project not exist' });
    }

    project.destroy();

    return res.status(204).send();
  }
}

export default new ProjectController();
