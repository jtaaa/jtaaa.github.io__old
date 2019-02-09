import * as express from 'express';

import { InfoModel } from './../db';
import { oneLine } from './../utils/templateLiteralTags';

const router = express.Router();

/* GET info
 *--> Returns all info documents in an array
 */
router.get('/', (req, res, next) => {
  const query = InfoModel.find({});
  if (req.query.populate) {
    query.populate({ path: 'projects', options: { lean: true } });
  }
  query
    .lean()
    .exec()
    .then(infos => res.json(infos))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* POST info
 *--> Create a new info document
 */
router.post('/', (req, res, next) => {
  const info = req.body;
  InfoModel.create(info)
    .then(doc => res.json(doc.toObject()))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* PUT info
 *--> Update existing or create a new info document
 */
router.put('/:name', (req, res, next) => {
  const info = req.body;
  InfoModel.findOneAndUpdate({ name: req.params.name }, info)
    .setOptions({ upsert: true, new: true })
    .lean()
    .exec()
    .then(doc => res.json(doc))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* DELETE info
 *--> Delete an info document
 */
router.delete('/:name', (req, res, next) => {
  InfoModel.deleteOne({ name: req.params.name })
    .exec()
    .then(({ n }) => n ?
        res.json({
          message: 'Successfully deleted my bro!'
        })
      : next({
          statusCode: 404,
          message: 'Couldn\'t find an info document with that name my bro.',
        })
    )
    .catch(err => {
      console.error(err);
      next(err);
    });
});

router.put('/:name/projects', (req, res, next) => {
  const projectIds = req.body;
  InfoModel.findOneAndUpdate(
    { name: req.params.name },
    { $addToSet: { projects: { $each: projectIds } } },
  )
    .setOptions({ new: true, runValidators: true })
    .lean()
    .exec()
    .then(doc => res.json(doc))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

router.delete('/:name/projects', (req, res, next) => {
  const projectIds = req.body;
  InfoModel.update(
    { name: req.params.name },
    { $pullAll: { projects: projectIds }}
  )
    .exec()
    .then(({ n, nModified }) => {
      if (nModified) 
        res.json({
          message: 'Successfully deleted my bro!'
        });
      else if (n)
        next({
          statusCode: 404,
          message: oneLine`Couldn\'t find any projects on the ${req.params.name}
                           info doc with those ids my bro.`,
        })
      else next({
        statusCode: 404,
        message: 'Couldn\'t find a project with that name my bro.',
      });
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

export default router;