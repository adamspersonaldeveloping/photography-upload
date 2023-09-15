const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Message = require("../models/Message")
const nodemailer = require("nodemailer")



module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id }).sort({ createdAt: "desc" }).lean();
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      let result;
      // Upload image to cloudinary
      if(req.body.watermark){
        result = await cloudinary.uploader.upload(req.file.path, {transformation: [
          {overlay: "yuki_watermaker_test"},
          {opacity:80},
          {effect: "anti_removal:90", flags: "layer_apply", gravity: "south_east"},
          {flags: "relative", width: "0.5"}
        ]});
      }else{
        result = await cloudinary.uploader.upload(req.file.path);
      };
      

      await Post.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },

  sendMessage: async (req, res) => {
    //the following should just send an email when a message is sent
    try {
        console.log( req.body.email, req.body.name,
          req.body.message)
        await Message.create({
          email: req.body.email,
          name: req.body.name,
          message: req.body.message
        });
      console.log( req.body.email, req.body.name,
        req.body.message)
      console.log("A message has been sent");
      res.redirect("/");
      //Send email with the message for Yuki
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "Gmail",
        auth: {
            user: process.env.USER,
            pass:  process.env.GMAIL_SECRET
        },
        // tls:{
        //   rejectUnauthorized: false
        // }
      });
     // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '<steinbeals@gmail.com>', 
        to: "adamspersonaldeveloping@gmail.com",
        subject: "New message from Yuuhi's Photography", 
        text: 'You have a ne message from ' + req.body.name + ' with the email of ' + req.body.email + ' the following is the message that was sent: \n\n' + req.body.message, 
        html: ``, 
      });
    } catch (err) {
      console.log(err);
    }
  },
  
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
  
};
