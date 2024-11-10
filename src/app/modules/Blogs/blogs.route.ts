import express from "express";
import { USER_ROLE } from "../User/user.interface";
import auth from "../../middlewares/auth";
import { BLogsController } from "./blogs.controller";

const router = express.Router();

router.post("/", auth(USER_ROLE.admin), BLogsController.createBlogs);
router.get("/", BLogsController.getBlogs);
router.put("/:id", auth(USER_ROLE.admin), BLogsController.updateBlogs);
router.delete("/:id", auth(USER_ROLE.admin), BLogsController.deleteBlogs);



export const BlogsRoutes = router;
