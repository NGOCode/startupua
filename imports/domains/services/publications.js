import { Meteor } from 'meteor/meteor';
import { ServicesCollection } from './collection';

Meteor.publish('myServices', function publishServices() {
    return ServicesCollection.find({
        owner: this.userId
    });
});

Meteor.publish('singleService', function publishRequest({ serviceId }) {
    if (!this.userId) {
        return null;
    }
    
    return ServicesCollection.find({
        _id: serviceId,
    });
});
