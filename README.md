# Showcasing for Photographers
Allows the client to host their own photos in an elegant way. They can pick and choose which photos they want to showcase. They can also add a custom watermark and choose if they want the photo to automatically apply the watermark. 

**Link to project:** https://www.yuhhiphotography.art/

![front page](https://res.cloudinary.com/dllmha3wx/image/upload/v1673265718/yuki-demo-1_grehci.png)
![info](https://res.cloudinary.com/dllmha3wx/image/upload/v1673265718/yuki-demo3_d4m9vs.png)
![full image displayed](https://res.cloudinary.com/dllmha3wx/image/upload/v1673265716/yuki-demo-2_pqxt2l.png)

## How It's Made:

**Tech used:** HTML, CSS, Javascript, EJS, Node.JS, Express.JS, MongoDB, Cloudinary, and some bootstrap

I used HTML, CSS, and vanilla JavaScript to create the visuals and the user interface. Lazy loading allows for more images to be added without significant decrease of initial load time. The front end and back end integrate by using EJS since I didn't have any state to manage and really only needed to allow for new inputs of one user. 
The backend is done with express.js and node.js using an MVC framework (Model, View, Controller) with a router to make it cleaner. I use cloudinary for image hosting. I have also integrated a picture layover on upload to include an optional watermark. 
The owner of the site can have access to uploading but outside from the owner, regular users will not be able to upload. The owner front end is mostly basic bootstrap to a slightly better than nothing user experience for the owner. 

## Optimizations

I would like to add an option for the owner to change the watermark. At present, I have hardcoded the specific watermark and can easily change it, but I think it would be very useful for the owner to be able to change the watermark as they wish. At present. Sometimes working with cloudinary addons and extra features can be buggy. I was initially using their outdated docs which prohibited me from adding a watermark. I believe in the future I would not have this hard coded and make it more streamlined.

## Lessons Learned:

Always check for more up-to-date documentation before spending hours trying to figure out why something won't work.  

## Examples:
Think this is cool? Check out some of my other stuff. 

**BarMate:** https://github.com/adamspersonaldeveloping/barmate

**Cocktail Webscraper:** https://github.com/adamspersonaldeveloping/cocktail-webscraper




