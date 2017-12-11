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
