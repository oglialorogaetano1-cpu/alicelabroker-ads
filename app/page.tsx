'use client';

import { useEffect } from 'react';

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

function CTAButton({ text, href, variant = 'primary', onClick }: CTAButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', { content_name: 'Click Candidati' });
    }
    if (onClick) onClick();
    else window.location.href = href;
  };

  if (variant === 'secondary') {
    return (
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-6 py-3 rounded-full font-['DM_Sans'] text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
      >
        <i className="fa-brands fa-whatsapp text-lg"></i>
        <span>{text}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-r from-[#c9a84c] to-[#d4b85f] hover:from-[#d4b85f] hover:to-[#c9a84c] text-black px-8 py-3 rounded-full font-['DM_Sans'] text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c9a84c]/30"
    >
      {text}
    </button>
  );
}

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="/" className="flex items-center">
              <span className="font-['Playfair_Display'] text-2xl font-bold text-white">Alice<span className="text-[#c9a84c]">Broker</span></span>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              <CTAButton text="CANDIDATI ORA" href="https://selezione-alice-broker.vercel.app/ads" />
            </nav>

            <div className="flex lg:hidden items-center gap-3">
              <CTAButton text="CANDIDATI" href="https://selezione-alice-broker.vercel.app/ads" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white pt-16 pb-12 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#c9a84c]/5 rounded-full blur-[120px] animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a84c] text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 font-['DM_Sans'] font-semibold">
            ALICE BROKER · AUTOMOTIVE
          </p>

          <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight mb-4 font-medium tracking-tight">
            Guadagna come un agente immobiliare.<br className="hidden sm:block" />
            Senza immobili.
          </h1>

          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8 font-['DM_Sans'] leading-relaxed">
            Vendi auto che non possiedi. Provvigioni alte. Zero capitale bloccato. Zero rischio di mercato. Il mercato auto non conosce crisi.
          </p>

          <div className="flex justify-center items-center gap-8 sm:gap-16 mb-10">
            <div className="text-center">
              <p className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-[#c9a84c] font-bold">5</p>
              <p className="text-gray-500 text-xs sm:text-sm font-['DM_Sans'] mt-1">anni</p>
              <p className="text-gray-400 text-xs font-['DM_Sans']">Esperienza sul campo</p>
            </div>
            <div className="text-center">
              <p className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-[#c9a84c] font-bold">10x</p>
              <p className="text-gray-500 text-xs sm:text-sm font-['DM_Sans'] mt-1">più veloce</p>
              <p className="text-gray-400 text-xs font-['DM_Sans']">di un agente immobiliare</p>
            </div>
            <div className="text-center">
              <p className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-[#c9a84c] font-bold">0€</p>
              <p className="text-gray-500 text-xs sm:text-sm font-['DM_Sans'] mt-1">capitale</p>
              <p className="text-gray-400 text-xs font-['DM_Sans']">richiesto per iniziare</p>
            </div>
          </div>

          <CTAButton text="SCOPRI IL METODO" href="#metodo" />
        </div>
      </section>

      {/* Video Embed Section */}
      <div className="w-full flex justify-center px-4 py-16 md:py-20 bg-[#111]">
        <div className="w-full max-w-[900px] aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://drive.google.com/file/d/1awqjT-lpoLYEbkMM84roJ9WSjihXstaZ/preview"
            allow="autoplay"
            allowFullScreen
            className="w-full h-full"
            title="Alice Broker - Presentazione"
          />
        </div>
      </div>

      {/* Target Audience Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs sm:text-sm tracking-[0.3em] uppercase font-['DM_Sans'] font-semibold mb-4">
              PER CHI È QUESTO PERCORSO
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-black font-medium mb-4">
              Sei nel posto giusto se
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-all hover:shadow-lg hover:shadow-[#c9a84c]/20">
              <h3 className="font-['Playfair_Display'] text-2xl text-black font-medium mb-3">Aspirante broker</h3>
              <p className="text-gray-600 font-['DM_Sans'] text-sm leading-relaxed">
                Vuoi guadagnare nel mondo auto senza comprare nulla e senza un ufficio
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-all hover:shadow-lg hover:shadow-[#c9a84c]/20">
              <h3 className="font-['Playfair_Display'] text-2xl text-black font-medium mb-3">Sei un commerciante</h3>
              <p className="text-gray-600 font-['DM_Sans'] text-sm leading-relaxed">
                Hai già auto in stock e vuoi più canali di vendita senza assumere agenti
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodo Section */}
      <section id="metodo" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs sm:text-sm tracking-[0.3em] uppercase font-['DM_Sans'] font-semibold mb-4">
              IL PERCORSO
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-black font-medium mb-4">
              5 anni di esperienza sul campo. Condensati.
            </h2>
            <p className="text-gray-600 font-['DM_Sans'] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Non è teoria raccolta da YouTube. È il metodo che uso ogni giorno per gestire decine di auto al mese lavorando solo con il telefono.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Dove trovare auto ogni giorno',
              'Come venderle senza comprarle',
              'Come costruire clienti che tornano da te',
              'Script di vendita testati',
              'Come entrare nelle concessionarie',
              'Come evitare le truffe',
              'Gestire provvigioni legalmente',
              'Import ed export internazionale',
            ].map((topic, i) => (
              <div key={i} className="bg-gradient-to-br from-[#c9a84c]/10 to-[#c9a84c]/5 rounded-xl p-4 border border-[#c9a84c]/20">
                <p className="font-['DM_Sans'] text-sm font-medium text-black text-center">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strumenti Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs sm:text-sm tracking-[0.3em] uppercase font-['DM_Sans'] font-semibold mb-4">
              STRUMENTI INCLUSI
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-black font-medium mb-4">
              Cosa puoi avere con noi
            </h2>
            <p className="text-gray-600 font-['DM_Sans'] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Non ti diamo solo la formazione. Ti diamo gli strumenti per lavorare da subito.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto border border-[#c9a84c]/30">
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-black font-medium mb-6">Website professionale</h3>
            <ul className="space-y-3">
              {[
                'Sottodominio dedicato',
                'Design mobile e desktop',
                'Carica auto in autonomia',
                'Integrazione WhatsApp',
                'Indicizzazione Google',
                'Form valutazione incluso',
                'Aggiornamenti automatici',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 font-['DM_Sans'] text-gray-700">
                  <span className="text-[#c9a84c] font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-black font-medium mb-4">
              Il marketplace privato degli studenti
            </h2>
            <p className="text-gray-600 font-['DM_Sans'] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Non sei solo. Fai parte di una rete di broker selezionati con una sola cosa in comune — vogliono concludere provvigioni.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: '0', label: 'auto visibili al pubblico che circolano nella rete' },
              { number: '100%', label: 'broker selezionati con voglia di chiudere' },
              { number: '1', label: 'messaggio che ti separa dalla prossima provvigione' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-['Playfair_Display'] text-5xl text-[#c9a84c] font-bold">{stat.number}</p>
                <p className="text-gray-600 font-['DM_Sans'] text-sm mt-3 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merchants Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs sm:text-sm tracking-[0.3em] uppercase font-['DM_Sans'] font-semibold mb-4">
              PER CHI HA GIÀ AUTO IN STOCK
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-black font-medium mb-4">
              Sei già un commerciante?
            </h2>
            <p className="text-gray-600 font-['DM_Sans'] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Non ti serve la teoria. Hai già le auto. Ti manca una rete di vendita.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { step: 1, title: 'Carica le tue auto', desc: 'Una volta con foto e prezzo. Niente altro.' },
              { step: 2, title: '100 broker le vedono', desc: 'Clienti caldi, non curiosi. Ogni broker ha i suoi acquirenti.' },
              { step: 3, title: 'Loro vendono, tu incassi', desc: 'Nessun costo fisso. Nessun agente. Solo accordo col broker.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a84c] flex items-center justify-center">
                    <span className="font-['Playfair_Display'] text-lg text-black font-bold">{item.step}</span>
                  </div>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-black font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600 font-['DM_Sans'] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-black font-medium mb-6">
            Perché solo 10 al mese.
          </h2>
          <p className="text-gray-600 font-['DM_Sans'] text-sm sm:text-base leading-relaxed mb-6">
            Non è marketing. È la realtà operativa di come lavoriamo.
          </p>
          <div className="bg-gradient-to-r from-[#c9a84c]/10 to-[#c9a84c]/5 rounded-2xl p-8 border border-[#c9a84c]/20">
            <p className="text-gray-700 font-['DM_Sans'] text-base leading-relaxed">
              Ti seguiamo davvero — su ogni valutazione, trattativa, chiusura. Con 10 persone al mese riusciamo a garantire qualità vera.
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs sm:text-sm tracking-[0.3em] uppercase font-['DM_Sans'] font-semibold mb-4">
              NON SEI SOLO
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-black font-medium mb-4">
              30 giorni di affiancamento reale
            </h2>
            <p className="text-gray-600 font-['DM_Sans'] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Quello che nessun altro offre
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              'WhatsApp diretto per 30 giorni',
              'Valutazione auto in tempo reale',
              'Supporto nelle trattative',
              'Aiuto nelle chiusure',
              'Feedback su operazioni reali',
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-[#c9a84c]/20 text-center">
                <p className="font-['DM_Sans'] text-sm font-medium text-black">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTAButton text="CANDIDATI ORA" href="https://selezione-alice-broker.vercel.app/ads" />
          </div>
        </div>
      </section>

      {/* Not For Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-black font-medium text-center mb-12">
            Non è per tutti
          </h2>

          <div className="space-y-6">
            {[
              'Non è per chi cerca soldi facili',
              'Non è per chi non agisce',
              'Non è per chi vuole solo guardare',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-2xl">✗</span>
                <p className="font-['DM_Sans'] text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-white font-medium mb-6">
            Sei pronto a iniziare?
          </h2>
          <p className="text-white/70 font-['DM_Sans'] text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Non perdere l'opportunità di entrare nella prossima selezione mensile. I posti sono limitati a 10 persone.
          </p>
          <CTAButton text="CANDIDATI ORA" href="https://selezione-alice-broker.vercel.app/ads" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="font-['DM_Sans'] text-xs text-center sm:text-left">
              2026 O.G. SRL — P.IVA IT02345678901 — Prato Italia
            </p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="font-['DM_Sans'] text-xs hover:text-white transition">
                Privacy Policy
              </a>
              <a href="/termini-e-condizioni" className="font-['DM_Sans'] text-xs hover:text-white transition">
                Termini e Condizioni
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
