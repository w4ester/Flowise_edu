import express from 'express'
import apikeyRouter from './apikey'
import assistantsRouter from './assistants'
import credentialsRouter from './credentials'
import chatflowsRouter from './chatflows'
import toolsRouter from './tools'
import variablesRouter from './variables'

const router = express.Router()

router.use('/apikey', apikeyRouter)
router.use('/assistants', assistantsRouter)
router.use('/chatflows', chatflowsRouter)
router.use('/credentials', credentialsRouter)
router.use('/tools', toolsRouter)
router.use('/variables', variablesRouter)

export default router
