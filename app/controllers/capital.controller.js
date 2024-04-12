import Debug from 'debug';
import CapitalDataMapper from '../models/capital.dataMapper.js';
const debug = Debug('capital:controller:index');
const capitalDataMapper = new CapitalDataMapper();

export default class CapitalController {
  async getAll(_, res) {
    const data = await capitalDataMapper.getAll();
    res.json(data);
  }

  async get(req, res) {
    const data = await capitalDataMapper.getOne(req.params.id);
    res.json(data);
  }

  async create(req, res) {
    const data = await capitalDataMapper.create(req.body);
    res.json(data);
  }

  async update(req, res) {
    const data = await capitalDataMapper.update(req.params.id, req.body);
    res.json(data);
  }

  async delete(req, res) {
    console.log(req.params.id);
    const data = await capitalDataMapper.delete(req.params.id);
    res.json(data);
  }
}
