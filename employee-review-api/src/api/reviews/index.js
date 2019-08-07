import { Router } from "express";
import { middleware as query, Schema } from "querymen";
import { middleware as body } from "bodymen";
import {
  create,
  index,
  show,
  update,
  destroy,
  getReviewsByReviewee,
  getReviewsByReviewer
} from "./controller";
import { schema } from "./model";
export Reviews, { schema } from "./model";

const router = new Router();
const {
  review_for_email,
  reviewer_email,
  review_text,
  is_complete
} = schema.tree;

const filterSchema = new Schema({
  q_reviewee: {
    type: String,
    paths: ["q_reviewee"]
  },
  q_reviewer: {
    type: String,
    paths: ["q_reviewer"]
  }
});

/**
 * @api {post} /reviews Create reviews
 * @apiName CreateReviews
 * @apiGroup Reviews
 * @apiParam review_for_email Reviews's review_for_email.
 * @apiParam reviewer_email Reviews's reviewer_email.
 * @apiParam review_text Reviews's review_text.
 * @apiParam is_complete Reviews's is_complete.
 * @apiSuccess {Object} reviews Reviews's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reviews not found.
 */
router.post(
  "/",
  body({
    review_for_email,
    reviewer_email,
    review_text,
    is_complete
  }),
  create
);

/**
 * @api {get} /reviews Retrieve reviews
 * @apiName RetrieveReviews
 * @apiGroup Reviews
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of reviews.
 * @apiSuccess {Object[]} rows List of reviews.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(filterSchema), index);

/**
 * @api {get} /reviews/:id Retrieve reviews
 * @apiName RetrieveReviews
 * @apiGroup Reviews
 * @apiSuccess {Object} reviews Reviews's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reviews not found.
 */
router.get("/:id", show);

/**
 * @api {put} /reviews/:id Update reviews
 * @apiName UpdateReviews
 * @apiGroup Reviews
 * @apiParam review_for_email Reviews's review_for_email.
 * @apiParam reviewer_email Reviews's reviewer_email.
 * @apiParam review_text Reviews's review_text.
 * @apiParam is_complete Reviews's is_complete.
 * @apiSuccess {Object} reviews Reviews's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reviews not found.
 */
router.put(
  "/:id",
  body({ review_for_email, reviewer_email, review_text, is_complete }),
  update
);

/**
 * @api {delete} /reviews/:id Delete reviews
 * @apiName DeleteReviews
 * @apiGroup Reviews
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Reviews not found.
 */
router.delete("/:id", destroy);

export default router;
