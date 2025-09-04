import React from 'react'
import "./footer.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="footer">
      {/* Top: Social Icons */}
      <div className="footer_top">
        <ul>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
        </ul>
      </div>

      {/* Middle: Links */}
      <div className="footer_links">
        <ul>
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Account</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Redeem Gift Cards</li>
          <li>Buy Gift Cards</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
        </ul>
      </div>

      {/* Bottom: Copyright */}
      <div className="footer_bottom">
        <p>© {new Date().getFullYear()} Netflix Clone</p>
      </div>
    </div>
  );
}

export default Footer
