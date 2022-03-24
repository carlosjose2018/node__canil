import { Router } from 'express'
/* import router gives api express */
import * as pagesController from '../controllers/pagesController'
import * as searchController from '../controllers/searchController'

const router = Router()
/* Start router and contant */

/*=============================================
=            creater router                =
=============================================*/

router.get('/', pagesController.home)
router.get('/dogs', pagesController.dogs)
router.get('/cats', pagesController.cats)
router.get('/fishes', pagesController.fishes)
/*=====  end  ======*/

router.get('/search', searchController.searche)

export default router
