import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import { ServicesCollection } from '/imports/domains/services/collection';

new ValidatedMethod({
    name: 'service.insert',
    validate: new SimpleSchema({
        contact: { type: String },
        type: { type: String },
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
        'service.type': { type: String },
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
