import express from 'express';
import {
  test,
  updateUser,
  deleteUser,
  getUserListings,
  getUser,
} from "../controllers/user.controller.js";
import  verifyToken from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test)
router.put('/update/:id', verifyToken,updateUser)
router.delete('/delete/:id',verifyToken, deleteUser)
router.get('/listings/:id', getUserListings)
router.get("/:id",  getUser);

export default router