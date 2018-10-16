// import list data
const friendsData = require("../data/friends.js")

// create and export API routes
module.exports = function(app) {

  // create route to send back friendsData as JSON
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // create POST route to receive data from our front end and add ti our freindsData
  app.post("/api/friends", function(req,res) {
      // take the sent information and store ina variable.
      const newFriend = req.body;

      // add to the friends array
      friendsData.push(newFriend);

      // const compatibleFriend = ?

      // send back info for user to know the most compatible friend
      // res.json({
      //     // send compatible friend info

      // })

  });


}
