module.exports = app => {
    const instrumentos = require("../controllers/instrumento.controller.js");

    
  
    var router = require("express").Router();


/**
 * @swagger
 * /api/instrumentos/:
 *    post:
 *      tags:
 *        - Instrumentos
 *      description: Create Instrumentos API
 *      summary: Create instrumentos data
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                marca:
 *                  type: string
 *                  description: enter marca
 *                  example: Gibson
 *                modelo:
 *                  type: string
 *                  description: enter modelo
 *                  example: Les Paul
 *                instrumento:
 *                  type: string
 *                  description: enter instrumento
 *                  example: Guitarra
 *                alugado:
 *                  type: boolean
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
    // Create a new instrumento
    router.post("/", instrumentos.createOne);
  
/**
 * @swagger
 * /api/instrumentos:
 *  get:
 *    tags:
 *      - Instrumentos
 *    summary: Retrieve a list of instrumentos
 *    description: Retrieve a list of instrumentos
 *    responses:
 *      200:
 *        description: A list of instrumentos.
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: Successfully fetched all data!
 * 
 */
    // Retrieve all instrumentos
    router.get("/", instrumentos.findAll);
  
  /**
 * @swagger
 * /api/instrumentos/{id}:
 *    get:
 *      tags:
 *        - Instrumentos
 *      summary: Retrieve instrumentos data by id
 *      description: Retrieve instrumentos by id from instrumentos table
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: user id
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: single user data.
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully fetched instrumentos data by id!
 * 
 */
    // Retrieve a single instrumento with id
    router.get("/:id", instrumentos.findOne);
  
    /**
 * @swagger
 * /api/instrumentos/{id}:
 *    put:
 *      tags:
 *        - Instrumentos
 *      summary: Update instrumentos data
 *      description: update instrumentos data API
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: Users id
 *          schema:
 *            type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                marca:
 *                  type: string
 *                  description: enter marca
 *                  example: Gibson
 *                modelo:
 *                  type: string
 *                  description: enter modelo
 *                  example: Les Paul
 *                instrumento:
 *                  type: string
 *                  description: enter instrumento
 *                  example: Guitarra
 *                alugado:
 *                  type: boolean
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
    // Update a instrumento with id
    router.put("/:id", instrumentos.updateOne);
  

    /**
 * @swagger
 * /api/instrumentos/{id}:
 *    delete:
 *      tags:
 *        - Instrumentos
 *      summary: Remove Instrumentos data by id
 *      description: Remove Instrumentos API  
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: Instrumento id
 *          schema:
 *            type: string
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
 *                    example: Successfully deleted data!     
 * 
 * 
 */
    // Delete a instrumento with id
    router.delete("/:id", instrumentos.deleteOne);
  
    
    // Delete all instrumentos
    router.delete("/", instrumentos.deleteAll);
  
    app.use('/api/instrumentos', router);
  };