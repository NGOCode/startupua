import { Email } from 'meteor/email'
import sgTransport from 'nodemailer-sendgrid-transport'

const options = {
    auth: {
        api_user: Meteor.settings.private.sendgrid.api_user,
        api_key: Meteor.settings.private.sendgrid.api_key
    }
}

Email.customTransport = sgTransport(options);
