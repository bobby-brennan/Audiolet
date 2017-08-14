"use strict";
let datafire = require('datafire');

var hacker_news = require('@datafire/hacker_news').actions;
module.exports = new datafire.Action({
  handler: (input, context) => {
    return datafire.flow(context)
      .then(_ => hacker_news.getStories({
        storyType: "top",
      }, context))
      .then(storyIDs => Promise.all(storyIDs.map(storyID => {
        return hacker_news.getItem({
          itemID: storyID,
        }, context);
      })))
  },
});
