const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config()


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Subscribers API',
      version: '1.0.0',
      description: 'API for managing YouTube subscribers',
    },
    servers: [
      {
        url: `http://localhost:3000`,     
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Subscriber: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'The auto-generated id of the subscriber',
            },
            name: {
              type: 'string',
              description: 'Subscriber\'s name',
            },
            subscribedChannel: {
              type: 'string',
              description: 'Channel the subscriber subscribed to',
            },
            subscribedDate: {
              type: 'string',
              format: 'date-time',
              description: 'Date of subscription',
            },
          },
          example: {
            _id: '609b7b8b4a5b3a001f5e3c5d',
            name: 'John Doe',
            subscribedChannel: 'TechChannel',
            subscribedDate: '2023-01-01T00:00:00.000Z',
          },
        },
      },
    },
    paths: {
      '/': {
        get: {
          summary: 'Returns the HTML page',
          tags: ['Root'],
          responses: {
            200: {
              description: 'HTML page',
              content: {
                'text/html': {
                  schema: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
      '/subscribers': {
        get: {
          summary: 'Returns all subscribers',
          tags: ['Subscribers'],
          responses: {
            200: {
              description: 'List of all subscribers',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Subscriber',
                    },
                  },
                },
              },
            },
            500: {
              description: 'Server error',
            },
          },
        },
      },
      '/subscribers/names': {
        get: {
          summary: 'Returns all subscribers with only name and subscribedChannel fields',
          tags: ['Subscribers'],
          responses: {
            200: {
              description: 'List of subscribers with limited fields',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                          description: 'Subscriber\'s name',
                        },
                        subscribedChannel: {
                          type: 'string',
                          description: 'Channel they subscribed to',
                        },
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: 'Server error',
            },
          },
        },
      },
      '/subscribers/{id}': {
        get: {
          summary: 'Get a subscriber by ID',
          tags: ['Subscribers'],
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: {
                type: 'string',
              },
              description: 'Subscriber ID',
            },
          ],
          responses: {
            200: {
              description: 'Subscriber details by ID',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Subscriber',
                  },
                },
              },
            },
            400: {
              description: 'Invalid ID supplied',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['./app.js'],
};

const specs = swaggerJsdoc(options);
module.exports = specs;