# hackernews-clone-ember
This is a simple hackernews clone put together to try out ember. 

## TODO
 - pagination for new/top routes
 - fix hacky api usage
   - currently calls each comment's child recursively, which is sequential and very slow
   - stalls on threads with moderate number of comments!
   - either use ember data or build a better algorithm (something parallel at least)
 - add routes for about/show/ask/jobs
 - authentication and submitting comments (if possible, not sure if the api allows that)

## Lessons learned
 - css is not really that difficult, flexbox is easier to work with than bootstrap
 - ember inspector is life

## Known issues
When routing to an item the page renders instantly before the model has finished resolving.
Refreshing the page loads the model properly. I don't exactly know why this is happening, but
it's probably because the way I've built the model in the items route is fragile. I'm returning
a bare json object, mutated in a block with some async/await statements, which I thought compiled 
down to promises anyways but perhaps not. This is a very experience breaking bug though!

Anyways, as soon as I have time I'm going research models/lifecyclehooks/emberdata in more depth
and see what comes out of that.
