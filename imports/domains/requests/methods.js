import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import { RequestsCollection } from '/imports/domains/requests/collection';

new ValidatedMethod({
    name: 'request.insert',
    validate: new SimpleSchema({
        contact: { type: String },
        type: { type: String },
        title: { type: String },
        description: { type: String },
        company: { type: String },
        website: { type: String },
    }).validator({ clean: true }),
    run(request) {
        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
    
        request.owner = this.userId;
        request.solved = false;
        request.createdAt = new Date();
        
        return RequestsCollection.insert(request);
    }
});

new ValidatedMethod({
    name: 'request.update',
    validate: new SimpleSchema({
        requestId: { type: String },
        request: { type: Object  },
        'request.contact': { type: String },
        'request.type': { type: String },
        'request.title': { type: String },
        'request.description': { type: String },
        'request.company': { type: String },
        'request.website': { type: String }
    }).validator({ clean: true }),
    run({ requestId, request }) {
        const existingRequest = RequestsCollection.findOne({ _id: requestId });
    
        if (!this.userId || existingRequest.owner !== this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        
        request.updatedAt = new Date();
        
        return RequestsCollection.update({ _id: requestId }, { $set : {
            ...request
        }});
    }
});

new ValidatedMethod({
    name: 'request.close',
    validate: new SimpleSchema({
        requestId: { type: String }
    }).validator({ clean: true }),
    run({ requestId }) {
        const request = RequestsCollection.findOne({ _id: requestId });
        
        if (!this.userId || request.owner !== this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        
        return RequestsCollection.update({ _id: requestId }, { $set : {
            solved: true
        }});
    }
});

new ValidatedMethod({
    name: 'request.contact',
    validate: new SimpleSchema({
        requestId: { type: String },
        message: { type: String }
    }).validator({ clean: true }),
    async run({ requestId, message }) {
        const request = RequestsCollection.findOne({ _id: requestId });
        
        if (!this.userId || request.solved) {
            throw new Meteor.Error('Not authorized.');
        }
    
        const sender = Meteor.user();
        const recipient = Meteor.users.findOne({ _id: request.owner });
    
        Email.send({
            to: recipient,
            from: sender,
            subject: 'Help is coming',
            text: message
        });
    }
});
