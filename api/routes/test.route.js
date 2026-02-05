import express from 'express'
import { shouldBeAdmin, shouldBeLoggedIn } from '../controllers/test.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router= express.Router();

router.get("/should-be-Logged-in" , verifyToken, shouldBeLoggedIn)

router.get("/should-be-admin",shouldBeAdmin)


export default router;