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
  FaTwitch,
  FaTshirt,
} from "react-icons/fa";

export default function Page() {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(
      "https://www.instagram.com/realstiffy?igsh=aXFma3g5b2trcGU2"
    );
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="container">
      <section aria-label="profile-container">
        <div className="profile-header">
          <Image
            src="/realstiffy_pfp.svg"
            alt="realstiffy"
            priority
            width={130}
            height={130}
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
              href="https://www.twitter.com/realstiffyy"
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
            href="https://www.realdrippy.com"
            className="social-link nd-instagram-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTshirt />
            &nbsp; Merch
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
          <a
            href="https://twitch.tv/guythemartian"
            className="social-link twitch-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitch />
            &nbsp; Twitch
          </a>
        </div>
      </section>
    </div>
  );
}
