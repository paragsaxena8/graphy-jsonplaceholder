# GRAPHY-JSON PlaceHolder

## About

A nodejs application using graphQL implementation of [JSON Place Holder](https://jsonplaceholder.typicode.com) restAPI's where it supports 6 end-points for fake json data for testing and prototyping.

## Supported End Points

Currently its supports 6 API End-points as available in JSON Placeholder Rest API
| End Points | Description |
| ----------- | ----------- |
| /posts | 100 posts |
| /comments | 500 comments |
| /albums | 100 albums |
| /photos | 5000 photos |
| /todos | 200 todos |
| /users | 10 users |

## Supported Methods

- POST
- GET

## Installation & Usage

    npm install
    npm start

## Query

    curl -X GET http://localhost:3000/graphql?query={posts{id,title,body}}

    curl -X GET http://localhost:3000/graphql?query={comments{id,name,email,body}}

    curl -X GET http://localhost:3000/graphql?query={albums{id,title,body}}

    curl -X GET http://localhost:3000/graphql?query={photos{id,title,body}}

    curl -X GET http://localhost:3000/graphql?query={todos{id,title,body}}

    curl -X GET http://localhost:3000/graphql?query={users{id,name,email,body}}

## Mutation

    curl -X POST -H "Content-Type: application/json" -d '{"query":"mutation {createPost(title:\"test\",body:\"test\"){id,title,body}}"}' http://localhost:3000/graphql

    curl -X POST -H "Content-Type: application/json" -d '{"query":"mutation {createComment(name:\"test\",email:\"test\",body:\"test\"){id,name,email,body}}"}' http://localhost:3000/graphql

    curl -X POST -H "Content-Type: application/json" -d '{"query":"mutation {createAlbum(title:\"test\",body:\"test\"){id,title,body}}"}' http://localhost:3000/graphql

    curl -X POST -H "Content-Type: application/json" -d '{"query":"mutation {createPhoto(title:\"test\",body:\"test\"){id,title,body}}"}' http://localhost:3000/graphql

    curl -X POST -H "Content-Type: application/json" -d '{"query":"mutation {createTodo(title:\"test\",body:\"test\"){id,title,body}}"}' http://localhost:3000/graphql

    curl -X POST -H "Content-Type: application/json" -d '{"query":"mutation {createUser(name:\"test\",email:\"test\",body:\"test\"){id,name,email,body}}"}' http://localhost:3000/graphql
