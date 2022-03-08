import ogs from 'open-graph-scraper';

Meteor.methods({
    async getOpenGraphData({ url }) {
        let response;
        
        try {
            response = await ogs({ url });
        } catch(error) {
            throw new Meteor.Error('error-fetching-og');
        }
        
       return response.result;
    }
});
