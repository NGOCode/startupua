import { Meteor } from 'meteor/meteor';
import { RequestsCollection } from './collection';

Meteor.publish('myRequests', function publishMyRequests() {
    if (!this.userId) {
        return null;
    }
    
    return RequestsCollection.find({
        owner: this.userId
    });
});

Meteor.publish('allRequests', function publishAllRequests() {
    if (!this.userId) {
        return null;
    }
    
    return RequestsCollection.find({
        solved: false
    });
});

Meteor.publish('singleRequest', function publishRequest({ requestId }) {
    if (!this.userId) {
        return null;
    }
    
    return RequestsCollection.find({
        _id: requestId
    });
});
