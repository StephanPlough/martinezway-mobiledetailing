import React from "react";
import "./SocialsList.css";

export default function SocialsList() {
  return (
    <div>
      <ul className="socials-list">
        <li className="list-item">
          <a
            href="https://www.facebook.com/profile.php?id=61575979833239"
            target="_blank"
          >
            <img src="./img/icons/facebook-icon.png" alt="Facebook logo"></img>
          </a>
        </li>
        <li className="list-item">
          <a href="https://www.instagram.com/themartinezway/" target="_blank">
            <img src="./img/icons/insta-icon.png" alt="Facebook logo"></img>
          </a>
        </li>
        <li className="list-item">
          <a
            href="https://www.tiktok.com/@themartinezwaydetailing"
            target="_blank"
          >
            <img src="./img/icons/tiktok-icon.png" alt="Facebook logo"></img>
          </a>
        </li>
        <li className="list-item">
          <a href="https://www.youtube.com/@TheMartinezWay02" target="_blank">
            <img src="./img/icons/youtube-icon.png" alt="Facebook logo"></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
