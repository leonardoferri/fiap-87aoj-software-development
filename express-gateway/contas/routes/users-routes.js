const Express = require("express");
const routes = Express.Router();
const {
  createcontas,
  findAllcontas,
  findtcontasById,
  updatecontas,
  removecontas,
} = require("../controllers/contas-controller");



/**
 *  @swagger
 *  components:
 *    schemas:
 *      contas:
 *        type: object
 *        properties:
 *          contaname:
 *            type: string
 *            description: enter your contaname
 *            example: andi17x
 *          password:
 *            type: string
 *            description: enter your password
 *            example: adminpassword12
 *          email:
 *            type: string
 *            description: enter your email
 *            example: andi@gmail.com
 */

/**
 * @swagger
 * /api/contas:
 *  get:
 *    tags:
 *      - contas
 *    summary: Retrieve a list of contas
 *    description: Retrieve a list of task froma contas table
 *    responses:
 *      200:
 *        description: A list of contas.
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: Successfully fetched all data!
 *                data:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/contas'
 * 
 */
routes.get("/", findAllcontas);
/**
 * @swagger
 * /api/contas/{id}:
 *    get:
 *      tags:
 *        - contas
 *      summary: Retrieve contas data by id
 *      description: Retrieve contas by id from contas table
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: conta id
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        200:
 *          description: single conta data.
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully fetched contas data by id!
 *                  data:
 *                    type: object
 *                    properties:
 *                      contaname:
 *                        type: string
 *                        description: enter your contaname
 *                        example: andi17x
 *                      password:
 *                        type: string
 *                        description: enter your password
 *                        example: adminpassword12
 *                      email:
 *                        type: string
 *                        description: enter your email
 *                        example: andi@gmail.com
 * 
 */
routes.get("/:id", findtcontasById);

/**
 * @swagger
 * /api/contas/:
 *    post:
 *      tags:
 *        - contas
 *      description: Create contas API
 *      summary: Create contas data
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                contaname:
 *                  type: string
 *                  description: enter your contaname
 *                  example: andi17x
 *                password:
 *                  type: string
 *                  description: enter your password
 *                  example: adminpassword12
 *                email:
 *                  type: string
 *                  description: enter your email
 *                  example: andi@gmail.com
 *      responses:
 *        200:
 *          description: Successfully created data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully created data! 
 *                
 */
routes.post("/", createcontas);
/**
 * @swagger
 * /api/contas/{id}:
 *    patch:
 *      tags:
 *        - contas
 *      summary: Update contas data
 *      description: update contas data API
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: contas id
 *          schema:
 *            type: integer
 *            format: int64
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                contaname:
 *                  type: string
 *                  description: enter your contaname
 *                  example: andi17x
 *                password:
 *                  type: string
 *                  description: enter your password
 *                  example: adminpassword12
 *                email:
 *                  type: string
 *                  description: enter your email
 *                  example: andi@gmail.com
 *      responses:
 *        200:
 *          description: Successfully updated data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully updated data! 
 * 
 *      
 */
routes.patch("/:id", updatecontas);
/**
 * @swagger
 * /api/contas/{id}:
 *    delete:
 *      tags:
 *        - contas
 *      summary: Remove contas data by id
 *      description: Remove contas API  
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: contas id
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        200:
 *          description: Successfully deleted data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully updated data!     
 * 
 * 
 */
routes.delete("/:id", removecontas);

module.exports = routes;
