export function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}wentex-logo.png`;

  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-20">
          <div className="text-center md:text-left">
            <img src={logoSrc} alt="Wentex" className="h-10 invert opacity-80 mx-auto md:mx-0 mb-6" />
            <p className="text-white/40 text-sm max-w-xs font-light">
              Premium shirt manufacturing, serving the MENA region with excellence since 1967.
            </p>
          </div>
          
          <div className="flex gap-12 text-center md:text-left">
            <div>
              <h5 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Navigation</h5>
              <div className="flex flex-col gap-3 text-sm text-white/50">
                <a href="#home" className="hover:text-primary transition-colors">Home</a>
                <a href="#products" className="hover:text-primary transition-colors">Collections</a>
                <a href="#about" className="hover:text-primary transition-colors">Our Heritage</a>
                <a href="#monaco" className="hover:text-primary transition-colors">Monaco Label</a>
              </div>
            </div>
            <div>
              <h5 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Legal</h5>
              <div className="flex flex-col gap-3 text-sm text-white/50">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30 tracking-wide">
          <p>&copy; {new Date().getFullYear()} Wentex. All rights reserved.</p>
          <p>Amman, Jordan</p>
        </div>
      </div>
    </footer>
  );
}
