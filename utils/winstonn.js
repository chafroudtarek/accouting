import { createLogger } from 'winston';
import winston from 'winston';


var options= {
    file: {
      level: 'error',
      filename: 'logs/error.log',
      handleExceptions: true,
      json: true,
      colorize: true,
    },
    
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    },
  };

 export const mylogger = createLogger({
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console),
      new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
    format:winston.format.json(),
        
   
   exitOnError: false, 
  });
