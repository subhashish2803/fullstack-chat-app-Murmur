const PatternedBackground = ({ children }) => {
    return (
      <div className="relative border-[--pattern-fg] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 max-lg:h-66 max-lg:border-t lg:border-l dark:[--pattern-fg:var(--color-white)]/10 w-full">
        {children}
      </div>
    );
  };
  
  export default PatternedBackground;
  