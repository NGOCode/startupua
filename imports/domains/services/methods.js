import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import { ServicesCollection } from '/imports/domains/services/collection';

new ValidatedMethod({
    name: 'service.insert',
    validate: new SimpleSchema({
        contact: { type: String },
        category: { type: String },
        title: { type: String },
        description: { type: String },
        free: { type: Boolean },
    }).validator({ clean: true }),
    run(service) {
        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        
        service.owner = this.userId;
        service.createdAt = new Date();
        
        return ServicesCollection.insert(service);
    }
});

new ValidatedMethod({
    name: 'service.update',
    validate: new SimpleSchema({
        serviceId: { type: String },
        service: { type: Object },
        'service.contact': { type: String },
        'service.category': { type: String },
        'service.title': { type: String },
        'service.description': { type: String },
        'service.free': { type: Boolean }
    }).validator({ clean: true }),
    run({ serviceId, service }) {
        const existingService = ServicesCollection.findOne({ _id: serviceId });
    
        if (!this.userId || existingService.owner !== this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        
        service.updatedAt = new Date();
        
        return ServicesCollection.update({ _id: serviceId }, { $set: {
            ...service
        }});
    }
});

new ValidatedMethod({
    name: 'service.remove',
    validate: new SimpleSchema({
        serviceId: { type: String }
    }).validator({ clean: true }),
    run({ serviceId }) {
        const service = ServicesCollection.findOne({ _id: serviceId });
        
        if (!this.userId || service.owner !== this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        
        return ServicesCollection.remove({ _id: serviceId });
    }
});

new ValidatedMethod({
    name: 'service.contact',
    validate: new SimpleSchema({
        serviceId: { type: String },
        message: { type: String }
    }).validator({ clean: true }),
    async run({ serviceId, message }) {
        const request = ServicesCollection.findOne({ _id: serviceId });
        
        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
    
        const sender = Meteor.user();
        const senderEmail = sender.services.google ? sender.services.google.email : sender.emails[0].address;
        const recipient = Meteor.users.findOne({ _id: request.owner });
        const recipientEmail = recipient.services.google ? recipient.services.google.email : recipient.emails[0].address;
    
        Email.send({
            to: recipientEmail,
            from: 'noreply@uafounders.org',
            replyTo: senderEmail,
            subject: 'Help is coming',
            text: message
        });
    }
});
