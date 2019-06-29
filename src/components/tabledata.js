import React, { Component } from "react";
import axios from "axios";
import Posts from "./data";

class Empdeatiltable extends Component {
  state = {
    posts: Posts.data,
    success: Posts.succes
  };

  componentDidMount() {
    console.log(this.state.posts);
  }

  render() {
    const postsData = this.state.posts;
    const header = Object.keys(this.state.posts[0]);
    const succes = this.state.success;
    if (succes) {
      return (
        <div className="row">
          <div className="col-12">
            <h2>Data 
                Loaded
            </h2>

            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  {header.map((head, index) => (
                    <th key={index}>{head.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {postsData.map((post, index) => (
                  <tr key={index}>
                    <th scope="row">{post.userId}</th>
                    <th>{post.id}</th>
                    <th>{post.title}</th>
                    <th>{post.body}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <h2>Data Not Loaded</h2>
      </div>
    );
  }
}

export default Empdeatiltable;
