import './register-apis';
import seed from './seeds';

Meteor.startup(() => {
    seed();
});
