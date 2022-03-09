var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://2.59.119.251:1883');

client.subscribe('location');

client.on('connect', function() {
	console.log('connected!');

	client.subscribe('new-user', function() {
		client.publish('new-user', 'Berna-' + Math.ceil(Math.random() * 10), {
			retain: true,
		});
	});
});

client.on('message', function(topic, message) {
	console.log(topic, ' : ', message.toString());
});