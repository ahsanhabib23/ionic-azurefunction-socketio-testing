import { Component } from '@angular/core';
import io from 'socket.io-client';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	socket: any;
	messages: string[] = [];
	constructor() {
		
		// If backend(nestjs) is running run with command: npm run start:dev
		// this.socket = io('http://localhost:3000');

		// If backend(nestjs) is running run with Azure function locally
		this.socket = io('http://localhost:7071');

		setInterval(() => this.socket.emit('sendEvent', { data: 'Socket is working' }), 1000);

		this.socket.on('receiveEvent', ({data})=> this.messages.push(data));

	}

}
