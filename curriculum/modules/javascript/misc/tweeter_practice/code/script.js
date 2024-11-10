const renderTweet = (name, handle, date, title, img, body, comments, retweets,likes)=> 
{
  
  
  const tweet = `
              <div class="tweet flex border-b border-solid border-grey-light">

                  <div class="w-1/8 text-right pl-3 pt-3">
                      <div><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_tailwind.jpg" alt="avatar" class="rounded-full h-12 w-12 mr-2"></a></div>
                  </div>

                  <div class="w-7/8 p-3 pl-0">
                      <div class="flex justify-between">
                          <div>
                              <span class="font-bold"><a href="#" class="text-black">${name}</a></span>
                              <span class="text-grey-dark">${handle}</span>
                              <span class="text-grey-dark">&middot;</span>
                              <span class="text-grey-dark">${date}</span>
                          </div>
                          <div>
                              <a href="#" class="text-grey-dark hover:text-teal"><i class="fa fa-chevron-down"></i></a>
                          </div>
                      </div>
                      <div>
                          <div class="mb-4">
                              <p class="mb-6">${title}</p>
                              <p class="mb-4">${body}</p>
                              <p><a href="#"><img src="${img}" alt="tweet image" class="border border-solid border-grey-light rounded-sm"></a></p>
                          </div>
                          <div class="pb-2">
                              <a href="#" class="mr-8 text-grey-dark hover:no-underline hover:text-blue-light"><i class="fa fa-comment fa-lg mr-2"></i>${comments}</a>
                              <a href="#" class="mr-8 text-grey-dark hover:no-underline hover:text-green"><i class="fa fa-retweet fa-lg mr-2"></i>${retweets}</a>
                              <a href="#" class="like-btn mr-8 text-grey-dark hover:no-underline hover:text-red"><i class="fa fa-heart fa-lg mr-2"></i>${likes}</a>
                          </div>
                      </div>
                  </div>
              </div>

  `
  
  const tweetsEl = document.querySelector(".tweets");
  tweetsEl.insertAdjacentHTML("afterBegin", tweet);

}

renderTweet(
  "Tailwind CSS",
  "@tailwindcss",
  "1 Dec 2017",
  "🎉 Tailwind CSS v0.3.0 is here!",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet3.jpg",
  "Enable/disable modules, focus and group-hover variants, new utilities, and more. Learn more in our upgrade guide:",
  6,
  74,
  204
);