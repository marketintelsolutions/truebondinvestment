import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { toast } from 'react-hot-toast';

const MediaItem = () => {
  const [copied, setCopied] = useState(false);

  // Get current URL
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Article details for sharing
  const articleTitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi";
  const articleDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit...";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(articleTitle)}&summary=${encodeURIComponent(articleDescription)}`,
    instagram: null // Instagram doesn't support direct sharing links
  };

  const handleShare = (platform) => {
    if (platform === 'instagram') {
      // Copy URL to clipboard for Instagram
      navigator.clipboard.writeText(currentUrl).then(() => {
        toast.success('Link copied! You can now share it on Instagram');
      }).catch(() => {
        toast.error('Failed to copy link');
      });
      return;
    }

    const shareUrl = shareLinks[platform];
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const ShareButton = ({ platform, icon: Icon, label }) => (
    <div
      className='flex gap-2 pb-3 border-b border-black items-center pr-8 cursor-pointer hover:opacity-70 transition-opacity'
      onClick={() => handleShare(platform)}
      role="button"
      tabIndex={0}
    >
      <span><Icon /></span>
      <p>{label}</p>
    </div>
  );

  return (
    <section className='pt-10 pb-40'>
      <h1 className='text-[55px] text-left w-full max-w-[900px] mx-auto'>{articleTitle}</h1>
      <p className='font-light w-full max-w-[900px] mx-auto text-sm mt-5'>August 31st, 2024</p>

      <div className='w-full max-h-[700px] relative mt-20'>
        <img src="/images/award.jpg" alt="award" className='w-full h-full max-h-[700px] object-cover' />
      </div>

      <div className='w-full max-w-max mx-auto mt-20 flex gap-14'>
        <div className='flex flex-col gap-4'>
          <h2 className='uppercase mb-3'>Share</h2>
          <ShareButton
            platform="facebook"
            icon={FaFacebook}
            label="Facebook"
          />
          <ShareButton
            platform="twitter"
            icon={FaXTwitter}
            label="Twitter"
          />
          <ShareButton
            platform="instagram"
            icon={FaInstagram}
            label="Instagram"
          />
          <ShareButton
            platform="linkedin"
            icon={FaLinkedin}
            label="LinkedIn"
          />
        </div>

        <div className='text-xl tracking-[2px] leading-[28px] font-light'>
          {/* Article content */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, repellendus. Vel eos ipsa, labore temporibus ex libero provident cum, laborum at, <br /> <br /> a qui tenetur eligendi magni inventore non quo molestiae quas! Assumenda praesentium voluptatum fugit dolor beatae nam? Esse, minus? Fuga distinctio nemo voluptas consequatur facilis alias maxime corporis expedita.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, repellendus. Vel eos ipsa, labore temporibus ex libero provident cum, laborum at, <br /> <br /> a qui tenetur eligendi magni inventore non quo molestiae quas! Assumenda praesentium voluptatum fugit dolor beatae nam? Esse, minus? Fuga distinctio nemo voluptas consequatur facilis alias maxime corporis expedita.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, repellendus. Vel eos ipsa, labore temporibus ex libero provident cum, laborum at, <br /> <br /> a qui tenetur eligendi magni inventore non quo molestiae quas! Assumenda praesentium voluptatum fugit dolor beatae nam? Esse, minus? Fuga distinctio nemo voluptas consequatur facilis alias maxime corporis expedita.

        </div>
      </div>
    </section>
  );
};

export default MediaItem;