import Debug from 'debug';

const debug = Debug('museum:controller:wrapper');

export default (controller) => async (req, res, next) => {
  try {
    debug('controller-wrapper', controller);
    await controller(req, res, next);
  } catch (err) {
    next(err);
  }
};
