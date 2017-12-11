import Route from '@ember/routing/route';

export default Route.extend({

  /*
   This approach is really slow.
   It pulls the comment tree in sequentially, depth first search style, and it pulls the whole tree into memory.
   A better approach might be a series of priority queues to fire off more queries,
   and as they resolve, assembling the comment tree with a dependency tree sort of approach.
   Or possibly ember data has a better model for doing this?
  */
  async recursiveGetComments(childIds) {
    if(!childIds){
      return null
    } else {
      let comments = []
      for(let childId of childIds){
        let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${childId}.json`)
        let childComment = await response.json()
        childComment.comments = await this.recursiveGetComments(childComment.kids)
        comments.push(childComment)
      }
      return comments
    }
  }, 
  
  async model(params) {
    let {item_id: id} = params
    let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    let item = await response.json()
    item.comments = await this.recursiveGetComments(item.kids)
    return item
  },

});
