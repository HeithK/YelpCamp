var middlewareObj = {};
var Campground = require("../models/campground");
var Comment = require("../models/comment");

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
            Campground.findById(req.params.id, function(err, foundCampground){
               if(err){
                   res.redirect("back");
               } 
               else {
                   //Does User own the campground entry?
                   if(foundCampground.author.id.equals(req.user._id)) {
                       next();
                   }
                   else {
                       req.flash("error", "You Don't Have the Permissions to do That");
                       res.redirect("back");
                   }
               }
            });
    }
    else {
        req.flash("error", "You Must Be Logged In to Do That");
        res.redirect("back");
    }
}

middlewareObj.checkCommentOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
            Comment.findById(req.params.comment_id, function(err, foundComment){
               if(err){
                   req.flash("error", "Campground not found");
                   res.redirect("back");
               } 
               else {
                   //Does User own the comment entry?
                   if(foundComment.author.id.equals(req.user._id)) {
                       next();
                   }
                   else {
                       req.flash("error", "You Don't Have the Permissions to do That");
                       res.redirect("back");
                   }
               }
            });
    }
    else {
        req.flash("error", "You Must Be Logged In to Do That");
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please Login First");
    res.redirect("/login");
    //eturn res.render("login", {"error": "Please Login First"});
    
}

module.exports = middlewareObj;