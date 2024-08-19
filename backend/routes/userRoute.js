import express from 'express'
import { getUserData, googleOauthHandler } from '../controller/googleOauthHandler.js';
import authRoute from './authRoute.js'
import { logout } from '../controller/auth.controller.js';
import counter from '../controller/counter.js';

const router = express.Router()


router.use('/api/auth', authRoute )
router.get('/api/sessions/oauth/google', googleOauthHandler)
router.get('/api/auth/data', getUserData)
router.post('api/home/count',counter)
router.post('api/logout', logout)


export default router;