// src/utils/randomPosts.js
export const getRandomPost = (postNumber) => {
    const posts = {
      post1: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ],
      post2: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      ]
    };
  
    const postContent = posts[`post${postNumber}`];
    const randomIndex = Math.floor(Math.random() * postContent.length);
    return postContent[randomIndex];
  };
  