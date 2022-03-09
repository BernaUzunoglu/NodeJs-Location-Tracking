var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://2.59.119.251:1883');

client.subscribe('new-user');

client.on('connect', function() {
	console.log('connected!');

	client.publish('new-user', 'Mehmet-' + Math.ceil(Math.random() * 10));
});

client.on('message', function(topic, message) {
	console.log(topic, ' : ', message.toString());
});