interface HeroProps {
  onExplore?: (href: string) => void;
}

export function Hero({ onExplore }: HeroProps) {
  return <section id="hero" style={{ minHeight: '80vh' }}></section>;
}

export default Hero;
