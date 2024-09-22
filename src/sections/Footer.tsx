import ArrowupRightIcon from '@/assets/icons/arrow-up-right.svg'; // Ensure the path and import is correct

const footerLinks = [
  { title: "Youtube", href: "https://www.youtube.com/@shykathimu" },
  { title: "Twitter", href: "https://x.com/EarShykat" },
  { title: "Instagram", href: "https://www.instagram.com/rip_arceneaux/" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/md-shykat/" },
  { title: "Github", href: "https://github.com/pain-arch" },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40 ">&copy; 2024. All rights reserved.</div>
          <div className="">
            <nav className="flex flex-col md:flex-row items-center gap-8">
              {footerLinks.map(link => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='inline-flex items-center gap-1.5'
                >
                  <span className="font-semibold">{link.title}</span>
                  {/* Fallback if SVG import fails */}
                  {ArrowupRightIcon ? (
                    <ArrowupRightIcon className="size-4" />
                  ) : (
                    <span className="icon-placeholder">↗</span> // Basic icon placeholder
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};