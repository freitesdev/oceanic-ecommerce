import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
    render() {
        const date = new Date();
        return (
          <footer className="text-center fixed-bottom">
            Made with{" "}
            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> by Freites Dev &copy; {date.getFullYear()}
          </footer>
        );
    }
}