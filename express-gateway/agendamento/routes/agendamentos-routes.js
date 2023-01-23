const Express = require("express");
const routes = Express.Router();
const {
  createagendamentos,
  findAllagendamentos,
  findtagendamentosById,
  updateagendamentos,
  removeagendamentos,
} = require("../controllers/agendamentos-controller");



/**
 *  @swagger
 *  components:
 *    schemas:
 *      agendamentos:
 *        type: object
 *        properties:
 *          agendamentoname:
 *            type: string
 *            description: enter your agendamentoname
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
 * /api/agendamentos:
 *  get:
 *    tags:
 *      - agendamentos
 *    summary: Retrieve a list of agendamentos
 *    description: Retrieve a list of task froma agendamentos table
 *    responses:
 *      200:
 *        description: A list of agendamentos.
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
 *                    $ref: '#/components/schemas/agendamentos'
 * 
 */
routes.get("/", findAllagendamentos);
/**
 * @swagger
 * /api/agendamentos/{id}:
 *    get:
 *      tags:
 *        - agendamentos
 *      summary: Retrieve agendamentos data by id
 *      description: Retrieve agendamentos by id from agendamentos table
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: agendamento id
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        200:
 *          description: single agendamento data.
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully fetched agendamentos data by id!
 *                  data:
 *                    type: object
 *                    properties:
 *                      agendamentoname:
 *                        type: string
 *                        description: enter your agendamentoname
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
routes.get("/:id", findtagendamentosById);

/**
 * @swagger
 * /api/agendamentos/:
 *    post:
 *      tags:
 *        - agendamentos
 *      description: Create agendamentos API
 *      summary: Create agendamentos data
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                agendamentoname:
 *                  type: string
 *                  description: enter your agendamentoname
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
routes.post("/", createagendamentos);
/**
 * @swagger
 * /api/agendamentos/{id}:
 *    patch:
 *      tags:
 *        - agendamentos
 *      summary: Update agendamentos data
 *      description: update agendamentos data API
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: agendamentos id
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
 *                agendamentoname:
 *                  type: string
 *                  description: enter your agendamentoname
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
routes.patch("/:id", updateagendamentos);
/**
 * @swagger
 * /api/agendamentos/{id}:
 *    delete:
 *      tags:
 *        - agendamentos
 *      summary: Remove agendamentos data by id
 *      description: Remove agendamentos API  
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: agendamentos id
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
routes.delete("/:id", removeagendamentos);

module.exports = routes;
