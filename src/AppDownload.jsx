import React from 'react';
import SharedFooter from './SharedFooter';

const DOWNLOAD_URL = 'https://github.com/rufarochigora/rc-forge/releases/latest/download/app-release.apk';
const APP_VERSION = 'v1.0.0';
const LAST_UPDATED = '20 August 2026';

// ─── Inline SVG icons (no external icon library required) ─────────────────
const IconWrap = ({ children }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
    </svg>
);

const PhoneIcon = () => (
    <IconWrap><rect x="7" y="2" width="10" height="20" rx="2" /><line x1="11" y1="18" x2="13" y2="18" /></IconWrap>
);
const DownloadIcon = () => (
    <IconWrap><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></IconWrap>
);
const BoltIcon = () => (
    <IconWrap><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></IconWrap>
);
const WifiOffIcon = () => (
    <IconWrap>
        <line x1="2" y1="2" x2="22" y2="22" />
        <path d="M8.5 16.5a5 5 0 0 1 7 0" />
        <path d="M2 8.82a15 15 0 0 1 4.17-2.65" />
        <path d="M10.66 5.05A15 15 0 0 1 22 8.82" />
        <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68" />
        <path d="M5 12.86a10 10 0 0 1 2.5-1.9" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
    </IconWrap>
);
const HomeIcon = () => (
    <IconWrap><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></IconWrap>
);
const ChatIcon = () => (
    <IconWrap><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></IconWrap>
);
const ShieldCheckIcon = () => (
    <IconWrap><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></IconWrap>
);

function FeatureRow({ icon, title, children }) {
    return (
        <div style={{ display: 'flex', gap: '16px', marginBottom: '22px' }}>
            <div style={{
                flexShrink: 0, width: '44px', height: '44px', borderRadius: '10px',
                background: 'rgba(0, 196, 252, 0.12)', border: '1px solid rgba(0, 196, 252, 0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00a8d8'
            }}>
                {icon}
            </div>
            <div>
                <p style={{ margin: '0 0 4px', fontWeight: '700', color: '#2d3436', fontSize: '0.98rem' }}>{title}</p>
                <p style={{ margin: 0, color: '#636e72', fontSize: '0.88rem', lineHeight: '1.6' }}>{children}</p>
            </div>
        </div>
    );
}

function StepRow({ number, title, children }) {
    return (
        <div style={{ display: 'flex', gap: '14px', marginBottom: '18px', alignItems: 'flex-start' }}>
            <div style={{
                flexShrink: 0, width: '30px', height: '30px', borderRadius: '50%',
                background: '#0984e3', color: '#fff', fontWeight: '700', fontSize: '0.9rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                {number}
            </div>
            <div>
                <p style={{ margin: '0 0 2px', fontWeight: '600', color: '#2d3436', fontSize: '0.92rem' }}>{title}</p>
                {children && <p style={{ margin: 0, color: '#636e72', fontSize: '0.85rem', lineHeight: '1.6' }}>{children}</p>}
            </div>
        </div>
    );
}

export default function AppDownload() {
    return (
        <div style={{ fontFamily: '"Inter", sans-serif', background: '#f5f6fa', minHeight: '100vh', padding: '20px' }}>

            {/* Header — same pattern as OrderTracker */}
            <header style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '20px', marginBottom: '40px', padding: '20px',
                background: '#4d9db3', color: '#fff', borderRadius: '10px'
            }}>
                <img src="/RCForgelogo.png" alt="RC Forge Logo"
                    style={{ height: '60px', borderRadius: '5px' }}
                    onError={(e) => { e.target.style.display = 'none'; }} />
                <div style={{ textAlign: 'left' }}>
                    <h1 style={{ margin: 0, letterSpacing: '2px' }}>RC FORGE</h1>
                    <p style={{ margin: '5px 0 0', color: '#00cec9' }}>Get the Android App</p>
                </div>
            </header>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                {/* ── HERO / PITCH ── */}
                <div style={{
                    background: 'linear-gradient(135deg, #162533 0%, #0d1a25 100%)',
                    borderRadius: '16px', padding: '40px 32px', marginBottom: '24px',
                    textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(0, 196, 252, 0.15)', color: '#00c4fc',
                        border: '1px solid rgba(0, 196, 252, 0.3)', borderRadius: '20px',
                        padding: '5px 14px', fontSize: '0.75rem', fontWeight: '700',
                        letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '16px'
                    }}>
                        <PhoneIcon /> RC Forge Android App
                    </div>
                    <h2 style={{ margin: '0 0 12px', color: '#fff', fontSize: '1.7rem', fontWeight: '800' }}>
                        Order components faster, right from your phone
                    </h2>
                    <p style={{
                        margin: '0 auto 28px', color: '#b2bec3', fontSize: '0.98rem',
                        lineHeight: '1.7', maxWidth: '560px'
                    }}>
                        The RC Forge app puts the full component catalog in your pocket — browse, search,
                        and book your order over WhatsApp in seconds. It loads instantly, keeps a cached
                        copy of the catalog so you can browse even with a weak signal, and skips the need
                        to keep reopening your browser every time you need a part.
                    </p>
                    <a
                        href={DOWNLOAD_URL}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            padding: '16px 36px', background: 'linear-gradient(135deg, #0984e3, #00b4d8)',
                            color: '#fff', borderRadius: '10px', fontWeight: '800', textDecoration: 'none',
                            fontSize: '1.05rem', boxShadow: '0 4px 16px rgba(9,132,227,0.4)'
                        }}
                    >
                        <DownloadIcon /> Download for Android
                    </a>
                    <p style={{ margin: '14px 0 0', color: '#6b7f8f', fontSize: '0.78rem' }}>
                        {APP_VERSION} · Last updated {LAST_UPDATED} · Free · Android only
                    </p>
                </div>

                {/* ── WHY THE APP ── */}
                <div style={{
                    background: '#fff', borderRadius: '12px', padding: '32px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '24px'
                }}>
                    <h3 style={{ margin: '0 0 20px', color: '#2d3436', fontSize: '1.15rem' }}>
                        Why use the app instead of the website?
                    </h3>
                    <FeatureRow icon={<BoltIcon />} title="Faster ordering">
                        No page reloads, no waiting on a browser — the app opens straight into the catalog
                        and remembers your cart between visits.
                    </FeatureRow>
                    <FeatureRow icon={<WifiOffIcon />} title="Works with weak or no signal">
                        The last catalog you loaded is cached on your device, so you can keep browsing
                        components even when your connection drops.
                    </FeatureRow>
                    <FeatureRow icon={<HomeIcon />} title="One tap from your home screen">
                        Once installed, it sits as its own icon on your phone — no need to keep the site
                        bookmarked or search for it every time.
                    </FeatureRow>
                    <FeatureRow icon={<ChatIcon />} title="Same trusted WhatsApp checkout">
                        Ordering works exactly the way it does on the website — add to cart, fill in your
                        details, and confirm your order over WhatsApp.
                    </FeatureRow>
                </div>

                {/* ── SCREENSHOTS ── */}
                <div style={{
                    background: '#fff', borderRadius: '12px', padding: '32px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '24px'
                }}>
                    <h3 style={{ margin: '0 0 20px', color: '#2d3436', fontSize: '1.15rem' }}>
                        See it in action
                    </h3>
                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                        gap: '16px'
                    }}>
                        {[
                            { file: '/app-screenshot-catalog.png', caption: 'Browse the catalog' },
                            { file: '/app-screenshot-cart.png', caption: 'Add to your cart' },
                            { file: '/app-screenshot-whatsapp.png', caption: 'Order via WhatsApp' },
                        ].map(({ file, caption }) => (
                            <div key={file} style={{ textAlign: 'center' }}>
                                <img
                                    src={file}
                                    alt={caption}
                                    style={{
                                        width: '100%', aspectRatio: '9 / 16', objectFit: 'cover',
                                        borderRadius: '14px', border: '1px solid #e2e8f0',
                                        background: '#f0f4f8', marginBottom: '8px', display: 'block'
                                    }}
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                <p style={{ margin: 0, fontSize: '0.82rem', color: '#636e72', fontWeight: '600' }}>
                                    {caption}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── INSTALL STEPS ── */}
                <div style={{
                    background: '#fff', borderRadius: '12px', padding: '32px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '24px'
                }}>
                    <h3 style={{ margin: '0 0 6px', display: 'flex', alignItems: 'center', gap: '10px', color: '#2d3436', fontSize: '1.15rem' }}>
                        <ShieldCheckIcon /> How to install
                    </h3>
                    <p style={{ margin: '0 0 20px', color: '#636e72', fontSize: '0.85rem' }}>
                        The app isn't on the Play Store yet, so Android will ask you to confirm the install manually — this is normal.
                    </p>
                    <StepRow number="1" title="Tap Download for Android above">
                        The APK file (about 10 MB) will download to your phone.
                    </StepRow>
                    <StepRow number="2" title="Open the downloaded file">
                        Find it in your notifications or Downloads folder and tap it.
                    </StepRow>
                    <StepRow number="3" title='Allow "install from this source" if asked'>
                        Android blocks installs from outside the Play Store by default — tap Settings,
                        then allow it for your browser or file manager, then go back and continue.
                    </StepRow>
                    <StepRow number="4" title="Tap Install, then Open">
                        That's it — RC Forge is ready to use.
                    </StepRow>
                </div>

                {/* ── SECONDARY DOWNLOAD CTA ── */}
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <a
                        href={DOWNLOAD_URL}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            padding: '14px 32px', background: 'linear-gradient(135deg, #0984e3, #00b4d8)',
                            color: '#fff', borderRadius: '10px', fontWeight: '700', textDecoration: 'none',
                            fontSize: '1rem', boxShadow: '0 4px 16px rgba(9,132,227,0.35)'
                        }}
                    >
                        <DownloadIcon /> Download RC Forge {APP_VERSION}
                    </a>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <a href="/" style={{ color: '#4d9db3', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem' }}>
                        Back to Shop
                    </a>
                </div>
            </div>

            <SharedFooter />
        </div>
    );
}