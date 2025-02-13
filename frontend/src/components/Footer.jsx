

const Footer = () => {
  return (
    <footer
     className="footer-main bg-white text-gray-950 py-6 mt-6 relative border-[--pattern-fg] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 dark:[--pattern-fg:var(--color-white)]/10">
      <div className="container mx-auto text-center px-4">
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-4">
            <li><a href="/help" className="hover:text-sky-500">Help</a></li>
            <li><a href="/feedback" className="hover:text-sky-500">Contact Support</a></li>
            <li><a href="/privacy" className="hover:text-sky-500">Privacy</a></li>
            <li><a href="/terms" className="hover:text-sky-500">Terms</a></li>
            <li><a href="https://twitter.com/technomania" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">@Murmur</a></li>
          </ul>
        </nav>
        <p>&copy; 2025 Murmur Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
