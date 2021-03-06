import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import { RequestsCollection } from '/imports/domains/requests/collection';

new ValidatedMethod({
    name: 'request.insert',
    validate: new SimpleSchema({
        contact: { type: String },
        category: { type: String },
        title: { type: String },
        description: { type: String },
        company: { type: String },
        country: { type: String },
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
        'request.category': { type: String },
        'request.country': { type: String },
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


new ValidatedMethod({
    name: 'request.teamContact',
    validate: new SimpleSchema({
        requestId: { type: String },
        contactName: { type: String },
        companyName: { type: String }
    }).validator({ clean: true }),
    async run({ requestId, contactName, companyName }) {
        const request = RequestsCollection.findOne({ _id: requestId });
        
        if (!this.userId || request.solved) {
            throw new Meteor.Error('Not authorized.');
        }
        
        const sender = Meteor.user();
        const senderEmail = sender.services.google ? sender.services.google.email : sender.emails[0].address;
        const recipientEmail = ['benoit.gilloz@gmail.com', 'kevin@spitche.com'];
        
        Email.send({
            to: recipientEmail,
            from: 'noreply@uafounders.org',
            replyTo: senderEmail,
            subject: 'Deck request',
            text: `Deck request from ${contactName} of Company or Fund ${companyName} for startup ${request.company} (${request.contact} / ${request.website})`
        });
    }
});
