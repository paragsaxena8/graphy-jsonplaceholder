import axios from "axios";
let url = "https://jsonplaceholder.typicode.com";

export const resolvers = {
  Query: {
    // User Resolver
    users: async () => {
      const allUsers = await axios.get(`${url}/users`);
      return allUsers.data;
    },
    user: async (_, args) => {
      const { id } = args;
      const user = await axios.get(`${url}/users/${id}`);
      return user.data;
    },
    // Post Resolver
    posts: async () => {
      const allPosts = await axios.get(`${url}/posts`);
      return allPosts.data;
    },
    post: async (_, args) => {
      const { id } = args;
      const post = await axios.get(`${url}/posts/${id}`);
      return post.data;
    },
    //  Comment resolver
    comments: async () => {
      const comments = await axios.get(`${url}/comments`);
      return comments.data;
    },
    comment: async (_, args) => {
      const { id } = args;
      const comment = await axios.get(`${url}/comments/${id}`);
      return comment.data;
    },
    // Album Resolver
    albums: async () => {
      const allPhotos = await axios.get(`${url}/albums`);
      return allPhotos.data;
    },
    album: async (_, args) => {
      const { id } = args;
      const album = await axios.get(`${url}/albums/${id}`);
      return album.data;
    },
    // Photos Resolver
    photos: async () => {
      const allPhotos = await axios.get(`${url}/photos`);
      return allPhotos.data;
    },
    photo: async (_, args) => {
      const { id } = args;
      const photo = await axios.get(`${url}/photos/${id}`);
      return photo.data;
    },
    // Todos resolver
    todos: async () => {
      const allTodos = await axios.get(`${url}/todos`);
      return allTodos.data;
    },
    todo: async (_, args) => {
      const { id } = args;
      const todo = await axios.get(`${url}/todos/${id}`);
      return todo.data;
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      let user = args.input;
      const createUserPost = await axios.post(`${url}/users`, user);
      return createUserPost.data;
    },
  },
};
