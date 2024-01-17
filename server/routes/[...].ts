import * as exampleController from '../controller/Example';

const router = createRouter();

router.get('/example', defineEventHandler(exampleController.searchAll));
router.get('/example/:id', defineEventHandler(exampleController.searchById));
router.post('/example', defineEventHandler(exampleController.addData));
router.put('/example/:id', defineEventHandler(exampleController.updateData));
router.delete('/example/:id', defineEventHandler(exampleController.removeData));

export default useBase('/api/v1', router.handler);
