import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Employee, { schema } from "./model";

const router = new Router();
const { fullname, email } = schema.tree;

/**
 * @api {post} /employees Create employee
 * @apiName CreateEmployee
 * @apiGroup Employee
 * @apiParam fullname Employee's fullname.
 * @apiParam email Employee's email.
 * @apiSuccess {Object} employee Employee's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee not found.
 */
router.post("/", body({ fullname, email }), create);

/**
 * @api {get} /employees Retrieve employees
 * @apiName RetrieveEmployees
 * @apiGroup Employee
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of employees.
 * @apiSuccess {Object[]} rows List of employees.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /employees/:id Retrieve employee
 * @apiName RetrieveEmployee
 * @apiGroup Employee
 * @apiSuccess {Object} employee Employee's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee not found.
 */
router.get("/:id", show);

/**
 * @api {put} /employees/:id Update employee
 * @apiName UpdateEmployee
 * @apiGroup Employee
 * @apiParam fullname Employee's fullname.
 * @apiParam email Employee's email.
 * @apiSuccess {Object} employee Employee's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee not found.
 */
router.put("/:id", body({ fullname, email }), update);

/**
 * @api {delete} /employees/:id Delete employee
 * @apiName DeleteEmployee
 * @apiGroup Employee
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Employee not found.
 */
router.delete("/:id", destroy);

export default router;
