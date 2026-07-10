export function HeritageStrip() {
  return (
    <section className="border-y border-white/5 bg-[#0D0D0D] py-6 md:py-8 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          <div className="flex items-center gap-12 w-full md:w-auto overflow-x-auto no-scrollbar pb-4 md:pb-0 shrink-0">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-serif text-white mb-1">1967</span>
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Established</span>
            </div>
            <div className="w-[1px] h-12 bg-white/10 hidden md:block" />
            
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-serif text-white mb-1">57+</span>
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Years of Mastery</span>
            </div>
            <div className="w-[1px] h-12 bg-white/10 hidden md:block" />
            
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-serif text-white mb-1">6</span>
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Premium Lines</span>
            </div>
          </div>

          <div className="w-full md:w-[1px] h-[1px] md:h-12 bg-white/10 hidden md:block" />

          <div className="flex-1 w-full text-center md:text-right">
            <p className="text-sm md:text-base text-white/60 font-light tracking-wide max-w-xl ml-auto">
              Proudly manufactured in <strong className="text-white font-normal">Jordan</strong>, 
              supplying the <strong className="text-white font-normal">MENA Region</strong> with uncompromising quality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
