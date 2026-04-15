import React from 'react';
const facebookIcon = new URL('../../../assets/facebook.png', import.meta.url);
const instagramIcon = new URL('../../../assets/instagram.png', import.meta.url);
const twitterIcon = new URL('../../../assets/twitter.png', import.meta.url);


const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10">
      <aside>
        <h1 className='text-5xl text-white font-bold'>KeenKeeper</h1>
        <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className='container mx-auto'>
        <h3 className="font-bold text-lg">Social Links</h3>
        <div className="grid grid-flow-col gap-4">
          <a><img src={instagramIcon} alt="Instagram" /></a>
          <a><img src={facebookIcon} alt="Facebook" /></a>
          <a><img src={twitterIcon} alt="Twitter" /></a>
        </div>
      </nav>
      <div>
          <div className="divider divider-primary"></div>
          <div className='flex justify-between w-full'>
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className='flex gap-2'>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Terms of Service</a>
              <a className="link link-hover">Cookies</a>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;