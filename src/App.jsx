import { useState } from 'react';
import {
  Instagram,
  MessageCircle,
  Menu,
  X,
  ArrowUpRight,
  Heart,
  Package,
  Clock3,
  ShieldCheck
} from 'lucide-react';
import './App.css';

const INSTAGRAM_URL = 'https://www.instagram.com/__.sweet_.bites/';
const WHATSAPP_NUMBER = ''; // Add your number with country code, without + or spaces.

const products = [
  {
    name: 'Classic Chocolate Box',
    description: 'A timeless selection for chocolate lovers.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85',
    tag: 'THE CLASSIC'
  },
  {
    name: 'Chocolate Gift Box',
    description: 'A thoughtful surprise for someone special.',
    image: 'https://images.unsplash.com/photo-1548907040-4d42a1a4b8e7?auto=format&fit=crop&w=900&q=85',
    tag: 'MADE TO GIFT'
  },
  {
    name: 'Chocolate Indulgence',
    description: 'Rich chocolate for your everyday cravings.',
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=900&q=85',
    tag: 'A LITTLE TREAT'
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi SweetBites! I would like to enquire about your homemade chocolates.')}`
    : null;

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <img
            className="brand-logo"
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="SweetBites chocolate logo"
          />
          <span className="brand-text">
            <strong>SweetBites</strong>
            <small>HOMEMADE CHOCOLATES</small>
          </span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'}>
          <a href="#collection" onClick={closeMenu}>Our Chocolates</a>
          <a href="#story" onClick={closeMenu}>Our Story</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a
            className="nav-order"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Enquire on Instagram <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> SMALL BATCH. MADE WITH CARE.</p>
            <h1>A little chocolate.<br /><em>A lot of happiness.</em></h1>
            <p className="hero-description">
              Homemade chocolates for thoughtful gifts, special moments,
              and little treats that make an ordinary day better.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#collection">
                Explore the collection <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <Instagram size={18} /> Find us on Instagram
              </a>
            </div>

            <div className="hero-note">
              <Heart size={17} strokeWidth={1.5} />
              <span>Every chocolate moment deserves a little care.</span>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90"
              alt="Chocolate treats arranged for gifting"
            />
            <div className="image-label">
              <span>THE SWEET SIDE OF LIFE</span>
              <strong>Made to make you smile.</strong>
            </div>
            <div className="image-stamp">MADE<br />WITH<br />LOVE</div>
          </div>
        </section>

        <section className="intro-strip">
          <span>THOUGHTFUL GIFTING</span>
          <span className="strip-dot">✳</span>
          <span>HOMEMADE GOODNESS</span>
          <span className="strip-dot">✳</span>
          <span>CHOCOLATE MOMENTS</span>
        </section>

        <section className="collection section-pad" id="collection">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A BOX FULL OF JOY</p>
              <h2>Meet your next <em>favourite.</em></h2>
            </div>
            <p className="section-intro">
              From little indulgences to gifts worth remembering,
              find a chocolate moment that feels just right.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <a
                  className="product-image-link"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Enquire about ${product.name}`}
                >
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="product-number">0{index + 1}</span>
                  <span className="product-arrow"><ArrowUpRight size={20} /></span>
                </a>
                <p className="product-tag">{product.tag}</p>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <a className="product-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                  Ask about this box <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>

          <p className="availability-note">
            Product options and availability may vary. Message us for the current collection and prices.
          </p>
        </section>

        <section className="story" id="story">
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1000&q=85"
              alt="Chocolate treats prepared for gifting"
              loading="lazy"
            />
          </div>

          <div className="story-copy">
            <p className="eyebrow">A SMALL BUSINESS WITH A SWEET IDEA</p>
            <h2>Not just chocolate.<br /><em>A little gesture of love.</em></h2>
            <p>
              SweetBites is built around a simple idea: good chocolate can turn
              an ordinary moment into something memorable. Whether you are
              treating yourself or surprising someone, we want every box to
              feel thoughtful, personal, and special.
            </p>
            <p>
              Planning a celebration or a gift? Contact us to discuss the
              available options.
            </p>
            <a className="button button-light" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Let's talk chocolates <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="values section-pad">
          <div className="value-item">
            <Heart size={24} strokeWidth={1.5} />
            <h3>Made with care</h3>
            <p>Thoughtful details from chocolate to presentation.</p>
          </div>
          <div className="value-item">
            <Package size={24} strokeWidth={1.5} />
            <h3>Gift-ready options</h3>
            <p>Ask about boxes for birthdays, celebrations, and surprises.</p>
          </div>
          <div className="value-item">
            <Clock3 size={24} strokeWidth={1.5} />
            <h3>Order enquiries</h3>
            <p>Confirm availability, prices, and preparation time with us.</p>
          </div>
          <div className="value-item">
            <ShieldCheck size={24} strokeWidth={1.5} />
            <h3>Clear communication</h3>
            <p>We confirm order details before finalising your request.</p>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">YOUR NEXT CHOCOLATE MOMENT STARTS HERE</p>
          <h2>Something sweet is<br /><em>just a message away.</em></h2>
          <p>Ask about our current collection, prices, custom gifts, and availability.</p>

          <div className="contact-actions">
            <a className="button button-dark" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram size={18} /> Message on Instagram
            </a>

            {whatsappUrl ? (
              <a className="button button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            ) : (
              <a className="button button-outline" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Enquire about ordering
              </a>
            )}
          </div>

          <a className="contact-handle" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            @__.sweet_.bites
          </a>
        </section>
      </main>

      <footer className="footer">
        <a className="footer-brand" href="#home">SweetBites<span>.</span></a>
        <p>Homemade chocolates. Little moments of happiness.</p>

        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms &amp; Conditions</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
        </div>

        <small>© {new Date().getFullYear()} SweetBites. All rights reserved.</small>
      </footer>

      <section className="legal section-pad" id="privacy">
        <h2>Privacy Policy</h2>
        <p>
          When you contact SweetBites through Instagram or WhatsApp, you may
          share information such as your name, contact details, and order
          preferences. We use that information to respond to enquiries and
          manage orders. Please avoid sending sensitive personal information.
        </p>
        <p>
          This website loads images and fonts from external providers, which
          may receive connection information from your browser. Update this
          policy to accurately reflect your business practices before launch.
        </p>
      </section>

      <section className="legal section-pad" id="terms">
        <h2>Terms &amp; Conditions</h2>
        <p>
          Product availability, ingredients, prices, packaging, and preparation
          times must be confirmed with SweetBites before an order is accepted.
          An enquiry does not guarantee an order or delivery slot.
        </p>
        <p>
          Please disclose food allergies before placing an order and ask us to
          confirm ingredients and possible allergen cross-contact. Photographs
          are illustrative and may not exactly match the product supplied.
        </p>
        <p>
          This is starter wording, not legal advice. Add your actual payment,
          cancellation, delivery, and refund policies before accepting orders.
        </p>
      </section>
    </>
  );
}