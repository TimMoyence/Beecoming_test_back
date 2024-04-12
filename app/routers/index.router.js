import Debug from 'debug';
import { Router } from 'express';
import CapitalController from '../controllers/capital.controller.js';
import controllerWrapper from '../middlewares/controller.wrapper.js';
const debug = Debug('capital:router:index');

const capitalController = new CapitalController();
/**
 * @typedef {object} ResponseError response error
 * @property {string} error the error string
 */

const router = Router();

router.get(
  '/api/cities',
  controllerWrapper(capitalController.getAll.bind(capitalController)),
);

router.get(
  '/api/cities/:id',
  controllerWrapper(capitalController.get.bind(capitalController)),
);

router.post(
  '/api/citiesCreate',
  controllerWrapper(capitalController.create.bind(capitalController)),
);

router.put(
  '/api/citiesUpdate/:id',
  controllerWrapper(capitalController.update.bind(capitalController)),
);

router.delete(
  '/api/citiesDelete/:id',
  controllerWrapper(capitalController.delete.bind(capitalController)),
);

export default router;
