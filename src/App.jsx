import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);

      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TopNavBar Shell */}
      <header className={`fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-margin-desktop py-4 max-w-container-max mx-auto transition-all ${isScrolled ? 'bg-background/95 shadow-lg' : 'bg-background/80 backdrop-blur-md border-b border-outline-variant/30'}`}>
        <div className="font-headline-md text-headline-md font-bold tracking-widest text-accent-gold">BLEND</div>
        <nav className="hidden lg:flex gap-6 items-center">
          <a className={`font-label-caps text-label-caps transition-colors ${activeSection === 'breads' ? 'text-accent-gold' : 'text-on-surface-variant hover:text-typography-high'}`} href="#breads">Breads</a>
          <a className={`font-label-caps text-label-caps transition-colors ${activeSection === 'biriyani' ? 'text-accent-gold' : 'text-on-surface-variant hover:text-typography-high'}`} href="#biriyani">Biriyani</a>
          <a className={`font-label-caps text-label-caps transition-colors ${activeSection === 'chicken' ? 'text-accent-gold' : 'text-on-surface-variant hover:text-typography-high'}`} href="#chicken">Chicken</a>
          <a className={`font-label-caps text-label-caps transition-colors ${activeSection === 'beef' ? 'text-accent-gold' : 'text-on-surface-variant hover:text-typography-high'}`} href="#beef">Beef</a>
          <a className={`font-label-caps text-label-caps transition-colors ${activeSection === 'seafood' ? 'text-accent-gold' : 'text-on-surface-variant hover:text-typography-high'}`} href="#seafood">Seafood</a>
          <a className={`font-label-caps text-label-caps transition-colors ${activeSection === 'beverages' ? 'text-accent-gold' : 'text-on-surface-variant hover:text-typography-high'}`} href="#beverages">Beverages</a>
        </nav>
        <button className="bg-primary-container text-on-primary-container font-button-text text-button-text px-6 py-2 rounded transition-all active:scale-95 duration-200">
            Order Now
        </button>
      </header>



      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Blend Kerala Sadhya" className="w-full h-full object-cover opacity-70 scale-105 transition-transform duration-1000 hover:scale-100" src="/hero-hd.png"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
          </div>
          <div className="relative z-10 text-center space-y-4 px-4">
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-typography-high drop-shadow-2xl">BLEND</h1>
            <p className="font-headline-md text-headline-md text-accent-gold tracking-[0.3em] uppercase opacity-90">Authentic Kerala Flavors</p>
          </div>
        </section>

        {/* Menu Container */}
        <div className="px-4 md:px-margin-desktop py-stack-xl max-w-container-max mx-auto space-y-stack-xl" id="menu">
          
          {/* Breads & Mains */}
          <section className="scroll-mt-32" id="breads">
            <div className="flex items-center gap-4 mb-stack-md">
              <h2 className="font-headline-lg text-headline-lg text-typography-high">Breads &amp; Mains</h2>
              <div className="flex-grow h-[1px] bg-outline-variant/30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {/* Featured Parotta */}
              <div className="col-span-1 md:col-span-2 bg-surface-charcoal rounded-lg overflow-hidden flex flex-col md:flex-row border border-outline-variant/20 hover:border-accent-gold/40 transition-all group">
                <div className="w-full md:w-1/2 overflow-hidden">
                  <img alt="Malabar Parotta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR6Vj-0wtcRUc6sC_W3odS6kzRhsh49FhMLI9JgtJ8DO2phJM4Hi7Dgr761hrl0tP0MgRT-bzVofdjJWbIxilEr6tbYwuFNNfbuBkD-WXPy29gFM-wgIuwP-jGltTScEf0Wakvx5ggRHLNHWoe5Hh1qjDttfkvuwmpmugmXlCDEepOW7Qs5gIVWAOBwNyDUppIvcrk7rUuuQwlAHSnrFx4DtuPSRnCnt9-WylEjDRjMCXIff968OvBYxXyBvh4q-7iqq84nTsh"/>
                </div>
                <div className="p-stack-md flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-typography-high">Parotta</h3>
                    <span className="text-accent-copper font-bold text-xl">₹20</span>
                  </div>
                  <p className="text-typography-muted text-body-md mb-6">Signature flaky, layered Malabar flatbread handmade with precision.</p>
                  <button className="text-left text-white underline decoration-accent-copper font-button-text text-button-text hover:text-accent-gold transition-all">Add to Order</button>
                </div>
              </div>
              {/* Small Bread Cards */}
              <div className="bg-surface-charcoal p-6 rounded-lg border border-outline-variant/20 hover:shadow-lg transition-all space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md">Appam</h3>
                  <span className="text-accent-copper font-bold">₹15</span>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md">Chapathi</h3>
                  <span className="text-accent-copper font-bold">₹12</span>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md">Puttu</h3>
                  <span className="text-accent-copper font-bold">₹10</span>
                </div>
                <div className="flex justify-between items-center border-t border-outline-variant/20 pt-4">
                  <h3 className="font-headline-md text-headline-md">Idiyappam</h3>
                  <span className="text-accent-copper font-bold">₹8</span>
                </div>
              </div>
            </div>
          </section>

          {/* Biriyani Section */}
          <section className="scroll-mt-32" id="biriyani">
            <div className="flex items-center gap-4 mb-stack-md">
              <h2 className="font-headline-lg text-headline-lg text-typography-high">Biriyani Specialities</h2>
              <div className="flex-grow h-[1px] bg-outline-variant/30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="bg-surface-charcoal p-8 rounded-lg border border-outline-variant/20 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/10 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
                <h3 className="font-headline-md text-headline-md text-accent-gold mb-2">Chicken Biriyani</h3>
                <p className="text-typography-muted mb-6">Slow-cooked Jeerakasala rice with aromatic spices.</p>
                <div className="flex gap-4">
                  <div><span className="text-xs uppercase text-on-surface-variant block">Full</span><span className="text-accent-copper font-bold">₹130</span></div>
                  <div><span className="text-xs uppercase text-on-surface-variant block">Half</span><span className="text-accent-copper font-bold">₹100</span></div>
                </div>
              </div>
              <div className="bg-surface-charcoal p-8 rounded-lg border border-outline-variant/20 relative group overflow-hidden">
                <h3 className="font-headline-md text-headline-md text-accent-gold mb-2">Beef Biriyani</h3>
                <p className="text-typography-muted mb-6">Tender beef chunks layered with fragrant rice and fried onions.</p>
                <div><span className="text-xs uppercase text-on-surface-variant block">Price</span><span className="text-accent-copper font-bold text-lg">₹150</span></div>
              </div>
              <div className="bg-surface-charcoal p-8 rounded-lg border border-outline-variant/20 relative group overflow-hidden">
                <h3 className="font-headline-md text-headline-md text-accent-gold mb-2">Fish Biriyani</h3>
                <p className="text-typography-muted mb-6">Premium King Fish slices marinated and cooked with kaima rice.</p>
                <div><span className="text-xs uppercase text-on-surface-variant block">Price</span><span className="text-accent-copper font-bold text-lg">₹160</span></div>
              </div>
            </div>
          </section>

          {/* Chicken Dishes */}
          <section className="scroll-mt-32" id="chicken">
            <div className="flex items-center gap-4 mb-stack-md">
              <h2 className="font-headline-lg text-headline-lg text-typography-high">Chicken Curries &amp; Fries</h2>
              <div className="flex-grow h-[1px] bg-outline-variant/30"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="bg-surface-charcoal p-4 rounded-lg border border-outline-variant/10 text-center hover:bg-surface-bright transition-colors cursor-pointer">
                <h4 className="font-body-lg text-body-lg text-typography-high mb-1">Chilly Chicken</h4>
                <p className="text-accent-copper font-bold">₹110</p>
              </div>
              <div className="bg-surface-charcoal p-4 rounded-lg border border-outline-variant/10 text-center hover:bg-surface-bright transition-colors cursor-pointer">
                <h4 className="font-body-lg text-body-lg text-typography-high mb-1">Chicken 65</h4>
                <p className="text-accent-copper font-bold">₹100</p>
              </div>
              <div className="bg-surface-charcoal p-4 rounded-lg border border-outline-variant/10 text-center hover:bg-surface-bright transition-colors cursor-pointer">
                <h4 className="font-body-lg text-body-lg text-typography-high mb-1">Chicken Fry</h4>
                <p className="text-accent-copper font-bold">₹110</p>
              </div>
              <div className="bg-surface-charcoal p-4 rounded-lg border border-outline-variant/10 text-center hover:bg-surface-bright transition-colors cursor-pointer">
                <h4 className="font-body-lg text-body-lg text-typography-high mb-1">Chicken Curry</h4>
                <p className="text-accent-copper font-bold">₹80</p>
              </div>
              <div className="bg-surface-charcoal p-4 rounded-lg border border-outline-variant/10 text-center hover:bg-surface-bright transition-colors cursor-pointer">
                <h4 className="font-body-lg text-body-lg text-typography-high mb-1">Chicken Kurma</h4>
                <p className="text-accent-copper font-bold">₹90</p>
              </div>
            </div>
          </section>

          {/* Beef & Seafood Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
            {/* Beef */}
            <section className="scroll-mt-32" id="beef">
              <div className="flex items-center gap-4 mb-stack-md">
                <h2 className="font-headline-lg text-headline-lg text-typography-high">Beef</h2>
                <div className="flex-grow h-[1px] bg-outline-variant/30"></div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-surface-charcoal rounded border border-outline-variant/10">
                  <span className="font-body-lg">Beef Roast</span>
                  <span className="text-accent-copper font-bold">₹110</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-surface-charcoal rounded border border-outline-variant/10">
                  <span className="font-body-lg">Beef Chilly / Gravy</span>
                  <span className="text-accent-copper font-bold">₹130</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-surface-charcoal rounded border border-outline-variant/10">
                  <span className="font-body-lg">Beef Kondattam</span>
                  <span className="text-accent-copper font-bold">₹130</span>
                </div>
              </div>
            </section>

            {/* Seafood */}
            <section className="scroll-mt-32" id="seafood">
              <div className="flex items-center gap-4 mb-stack-md">
                <h2 className="font-headline-lg text-headline-lg text-typography-high">Seafood &amp; Sides</h2>
                <div className="flex-grow h-[1px] bg-outline-variant/30"></div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-surface-charcoal rounded border border-outline-variant/10">
                  <span className="font-body-lg">Fish Curry / Fry</span>
                  <span className="text-accent-copper font-bold">₹70</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-surface-charcoal rounded border border-outline-variant/10">
                  <span className="font-body-lg">Kadala / Egg Curry</span>
                  <span className="text-accent-copper font-bold">₹40</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-surface-charcoal rounded border border-outline-variant/10">
                  <span className="font-body-lg">Gobi Manchurian</span>
                  <span className="text-accent-copper font-bold">₹70</span>
                </div>
              </div>
            </section>
          </div>

          {/* Beverages Section */}
          <section className="scroll-mt-32" id="beverages">
            <div className="flex items-center gap-4 mb-stack-md">
              <h2 className="font-headline-lg text-headline-lg text-typography-high">Fresh Juices &amp; Beverages</h2>
              <div className="flex-grow h-[1px] bg-outline-variant/30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Juice Card 1 */}
              <div className="bg-surface-charcoal rounded-lg overflow-hidden border border-outline-variant/20 group">
                <div className="h-48 overflow-hidden">
                  <img alt="Fresh Pineapple Juice" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmvV8u-ZTTdpZJkuf8JGZtQBx9aF-sQ9leyhxKAp7HG9H4GqIYHotsROX89kl91ja91N7zKLxbxf6PnuXUm4d9zj2Ry1ZqaGDMcvvW9rVFKplXGeGexZpaUeUHF0qgg9i_iM5p27I_qqOnu2yEvht-OtDxeG33Vlwpg-srNUuMC41bjoxIRP1VPQIz4mT0S6zCmf_u_zdVKINyythD51rNC6E51uEwS05sFaeS7WL92O2qt-yAI6j1I8jnzmvuHKZIBENKEjLA"/>
                </div>
                <div className="p-6">
                  <h3 className="font-headline-md text-headline-md mb-1">Pineapple Juice</h3>
                  <p className="text-accent-copper font-bold">₹45</p>
                </div>
              </div>
              {/* Juice Card 2 */}
              <div className="bg-surface-charcoal rounded-lg overflow-hidden border border-outline-variant/20 group">
                <div className="h-48 overflow-hidden">
                  <img alt="Fresh Watermelon Juice" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpL1tJFX-T69V4FzWZY7woyqvPLdEL4K6zhvsQi6Vt0s21BX20sSxZFK7gWMboMhBuBKY8TAXT7bs_aF6HPVUNJkdcHeit_JfZ072x5b-vpnNARNLcj15aS9VRyn98La_h6TDjDEhszwFUuBUN_zIoi8YirXn48fLm7UeLN_8NwJoyBMK4SRlL3tciT5Cz19nymNQEiLKlce4IwSgqLKcI__ZjdSq9sh4WP15Pcam87TgPN_eAff67X0nJne4O6ihtH_vpsl1I"/>
                </div>
                <div className="p-6">
                  <h3 className="font-headline-md text-headline-md mb-1">Watermelon Juice</h3>
                  <p className="text-accent-copper font-bold">₹45</p>
                </div>
              </div>
              
              {/* Hot Beverages List */}
              <div className="col-span-1 lg:col-span-2 bg-surface-charcoal p-6 rounded-lg border border-outline-variant/20 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-typography-high">Tea</span>
                    <span className="text-accent-copper font-bold">₹12</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-typography-high">Coffee</span>
                    <span className="text-accent-copper font-bold">₹15</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-typography-high">Boost</span>
                    <span className="text-accent-copper font-bold">₹20</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-typography-high">Horlicks</span>
                    <span className="text-accent-copper font-bold">₹20</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-typography-high">Lemon Tea</span>
                    <span className="text-accent-copper font-bold">₹15</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Menu Footer Note */}
          <div className="text-center py-stack-md bg-surface-container-low rounded-xl border border-dashed border-outline-variant/30">
            <p className="text-on-surface-variant font-label-caps text-label-caps tracking-widest">Parcel charge is ₹5</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-stack-lg px-4 md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-stack-md bg-background-deep border-t border-outline-variant/20" id="footer">
        <div className="space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-accent-copper opacity-50">BLEND</h2>
          <p className="text-on-surface-variant text-body-md max-w-xs">Experience the soulful flavors of Kerala at the heart of Potheri. Authentic recipes passed down through generations.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-caps text-label-caps text-typography-high border-b border-accent-copper/30 pb-2 inline-block">LOCATION &amp; HOURS</h4>
          <ul className="space-y-2 text-on-surface-variant text-body-md">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">location_on</span>
              Potheri, Near SRM KTR, Chennai
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">schedule</span>
              Everyday: 11:00 AM - 11:00 PM
            </li>
            <li>
              <div className="w-full h-32 bg-surface-variant rounded mt-2 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-on-surface-variant/30 bg-zinc-900 border border-outline-variant/20" data-location="Potheri, Chennai">
                  <span className="material-symbols-outlined text-4xl">map</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-caps text-label-caps text-typography-high border-b border-accent-copper/30 pb-2 inline-block">CONTACT</h4>
          <div className="space-y-2">
            <a className="flex items-center gap-2 text-accent-copper text-headline-md font-bold hover:text-accent-gold transition-colors" href="tel:+919876543210">
              <span className="material-symbols-outlined">call</span>
              +91 98765 43210
            </a>
            <div className="flex gap-4 mt-6">
              <a className="text-on-surface-variant hover:text-typography-high transition-all" href="#">Instagram</a>
              <a className="text-on-surface-variant hover:text-typography-high transition-all" href="#">Facebook</a>
            </div>
          </div>
          <p className="text-on-surface-variant text-xs mt-12 opacity-50">© 2024 Blend Restaurant. Authentic Flavors of Kerala.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
