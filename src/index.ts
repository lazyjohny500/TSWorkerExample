'use strict';
import { Worker } from 'worker_threads';
import { Logger } from 'sitka';

export class Example {

	private _logger: Logger;

	constructor() {
		this._logger = Logger.getLogger({ name: this.constructor.name });
	}

	/* Public Instance Methods */

	public exampleMethod(param: string): string {
		const worker = new Worker('./dist/worker.js', {
			workerData: {
				value: 15,
				path: './worker.ts'
			}
		});

		worker.on('message', (result) => {
			console.log(result);
		});
		worker.on('message', (result) => {
			console.log(result);
		});
		worker.on('error', (result) => {
			console.log(result);
		});
		this._logger.debug('Received: ' + param);
		return param;
	}
}

const express = require("express");
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req: any, res: any) => {
	res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});

const s = new Example();
s.exampleMethod('');
