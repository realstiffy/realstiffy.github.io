"use client"; // 👈 use it here

import { useState } from "react";

import Image from "next/image";
import { IoIosLink } from "react-icons/io";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaAmazon,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";

export default function Page() {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

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
              href="https://www.instagram.com/realstiffy?igsh=aXFma3g5b2trcGU2"
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
            href="https://www.instagram.com/realstiffy?igsh=aXFma3g5b2trcGU2"
            className="social-link nd-instagram-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            &nbsp; Sign-up/Referral Link &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              onClick={handleCopyLink}
              className="tiny-social-link copy-link"
              aria-label="Copy link"
            >
              <IoIosLink />
              Copy
              {copySuccess && <span className="copy-tooltip">Copied!</span>}
            </button>
          </a>
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
        </div>
      </section>
    </div>
  );
}
