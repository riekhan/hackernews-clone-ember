import Route from '@ember/routing/route';
import fetch from 'fetch';
import RSVP from 'rsvp';

export default Route.extend({
	async model() {
		let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
		let data = await response.json()
		let stories = []
		for(let i=0; i<25; i++){
			let id = data[i]
			let promise = fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((response) => {
				return response.json()
			})
			stories.push(promise)
		}
		return RSVP.all(stories)
	},

  renderTemplate: function() {
    this.render('item-list');
  }
});
