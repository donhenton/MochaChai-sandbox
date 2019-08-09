'use strict';

import OfficesDao from './src/birt-service/OfficesDao'

      export function process(event, context, callback) {
        let dao = new OfficesDao();
        const response = {
          statusCode: 200,
          body: JSON.stringify(dao.getOffices(event))

        };

        callback(null, response)

        // Use this code if you don't use the http event with the LAMBDA-PROXY integration
        // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
      }


//export default process


// https://stackoverflow.com/questions/45115348/can-we-use-the-es6-class-syntax-in-aws-lambda