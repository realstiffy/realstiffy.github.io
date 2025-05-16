// Test deployment - {new Date().toISOString()}
import Image from "next/image";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaAmazon,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";

export default function Page() {
  return (
    <div className="container">
      <section aria-label="profile-container">
        <div className="profile-header">
          <Image
            src="/stiffy_pfp.png"
            alt="realstiffy"
            width={96}
            height={96}
            className="profile-image"
          />
          <h1 className="profile-title">@realstiffy</h1>
          <div className="tiny-social-links-container">
            <a
              href="https://www.instagram.com/realstiffy"
              className="tiny-social-link instagram-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/realstiffy"
              className="tiny-social-link youtube-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@realstiffy"
              className="tiny-social-link tiktok-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.twitter.com/realstiffy"
              className="tiny-social-link twitter-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
          <p className="profile-description">Your local luigi lookalike</p>
        </div>

        <div className="social-links-container">
          <a
            href="https://discord.gg/JtU8C9amEs"
            className="social-link discord-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
            &nbsp; Discord Server
          </a>
          <a
            href="https://www.amazon.com/shop/realstiffy"
            className="social-link amazon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaAmazon />
            &nbsp; My Storefront
          </a>
          {/* <a
            href="https://instagram.com/realerstiffy"
            className="social-link nd-instagram-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            &nbsp; Meme + Music Account
          </a> */}
        </div>
      </section>
    </div>
  );
}
