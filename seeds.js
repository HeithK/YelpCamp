var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data = [
    {
        name: "Peaceful Desert",
        image: "https://i.imgur.com/nkPzSyD.jpg",
        description: "Lorem ipsum dolor sit amet, in porttitor nascetur condimentum ullamcorper semper ultricies, duis penatibus est amet purus inceptos, aliquet donec amet volutpat, libero sodales morbi consequat elementum inceptos, vel volutpat. Pede primis, consectetuer euismod mi ipsum nec nisl, cursus morbi commodo pharetra et velit, sed a pretium eu eu urna. Elit purus arcu sed pharetra, leo amet vestibulum ante orci sem ut, platea tincidunt, vitae eleifend sed, cras erat. Nec phasellus neque vel quis lacus facilisi, id luctus lacus ut, justo felis at semper cras. Accumsan a ultrices nonummy, duis gravida luctus nec quam eget sed, auctor sodales aenean urna dignissim pharetra sem. Morbi quam magna pellentesque lectus, id nulla elit et est morbi justo, ligula sit erat amet sit enim mus, accumsan eros. Et bibendum eget. Aenean congue id at mollis at vitae, tincidunt aliquam, est ante libero, nunc ultrices. Non molestie eget vestibulum eros duis pharetra, sit id at dictumst amet tellus aliquam, consectetur justo ligula enim nullam wisi orci, magna eget faucibus et metus ac et, turpis felis."
    },
    {
        name: "Pets Welcome",
        image: "https://i.imgur.com/zrnl5kq.jpg",
        description: "Lorem ipsum dolor sit amet, in porttitor nascetur condimentum ullamcorper semper ultricies, duis penatibus est amet purus inceptos, aliquet donec amet volutpat, libero sodales morbi consequat elementum inceptos, vel volutpat. Pede primis, consectetuer euismod mi ipsum nec nisl, cursus morbi commodo pharetra et velit, sed a pretium eu eu urna. Elit purus arcu sed pharetra, leo amet vestibulum ante orci sem ut, platea tincidunt, vitae eleifend sed, cras erat. Nec phasellus neque vel quis lacus facilisi, id luctus lacus ut, justo felis at semper cras. Accumsan a ultrices nonummy, duis gravida luctus nec quam eget sed, auctor sodales aenean urna dignissim pharetra sem. Morbi quam magna pellentesque lectus, id nulla elit et est morbi justo, ligula sit erat amet sit enim mus, accumsan eros. Et bibendum eget. Aenean congue id at mollis at vitae, tincidunt aliquam, est ante libero, nunc ultrices. Non molestie eget vestibulum eros duis pharetra, sit id at dictumst amet tellus aliquam, consectetur justo ligula enim nullam wisi orci, magna eget faucibus et metus ac et, turpis felis."
    },
    {
        name: "Hilltop Mesa",
        image: "https://i.imgur.com/dlxOeVH.jpg",
        description: "Lorem ipsum dolor sit amet, in porttitor nascetur condimentum ullamcorper semper ultricies, duis penatibus est amet purus inceptos, aliquet donec amet volutpat, libero sodales morbi consequat elementum inceptos, vel volutpat. Pede primis, consectetuer euismod mi ipsum nec nisl, cursus morbi commodo pharetra et velit, sed a pretium eu eu urna. Elit purus arcu sed pharetra, leo amet vestibulum ante orci sem ut, platea tincidunt, vitae eleifend sed, cras erat. Nec phasellus neque vel quis lacus facilisi, id luctus lacus ut, justo felis at semper cras. Accumsan a ultrices nonummy, duis gravida luctus nec quam eget sed, auctor sodales aenean urna dignissim pharetra sem. Morbi quam magna pellentesque lectus, id nulla elit et est morbi justo, ligula sit erat amet sit enim mus, accumsan eros. Et bibendum eget. Aenean congue id at mollis at vitae, tincidunt aliquam, est ante libero, nunc ultrices. Non molestie eget vestibulum eros duis pharetra, sit id at dictumst amet tellus aliquam, consectetur justo ligula enim nullam wisi orci, magna eget faucibus et metus ac et, turpis felis."
    }
]
 
function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;