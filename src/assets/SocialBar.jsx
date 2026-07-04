import React from 'react';

// Each icon is a small inline SVG so the whole row renders with one
// consistent visual language (uniform stroke weight, uniform size) instead
// of mixing text glyphs, emoji, and letters like the previous version did.
// No new npm dependency required — these are plain SVG paths.

const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M21.6 7.2c-.2-1-1-1.8-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5c-1 .2-1.8 1-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8c.2 1 1 1.8 2 2 1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5c1-.2 1.8-1 2-2 .4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM9.8 15.3V8.7l6 3.3-6 3.3z" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H17V3.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3.1h2.8v8h2.7z" />
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="3.7" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12 2.5A9.4 9.4 0 002.6 12c0 1.7.4 3.2 1.2 4.6L2.5 21.5l5-1.3a9.4 9.4 0 004.5 1.2h.02A9.4 9.4 0 0021.5 12 9.4 9.4 0 0012 2.5zm5.5 13.4c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.5-4-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.5.3.1.2.1.7-.1 1.3z" />
    </svg>
);

const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M21.9 4.3L2.7 11.6c-1 .4-1 1.4.1 1.7l4.7 1.5 1.8 5.6c.2.6 1 .8 1.5.4l2.5-2 4.6 3.4c.6.4 1.5.1 1.7-.6l3.1-15.3c.2-.9-.7-1.6-1.6-1.3zM8.5 14.4l9-6.8-7.4 7.9-.2 3.2-1.4-4.3z" />
    </svg>
);

const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M16.6 3c.4 2.2 1.9 3.8 4.1 4v2.9c-1.5.1-2.8-.4-4.1-1.3v6.4c0 3.3-2.7 5.5-5.6 5-2.3-.4-4-2.4-4-4.7 0-2.6 2.1-4.8 4.8-4.8.3 0 .6 0 .9.1v3c-.3-.1-.6-.2-.9-.2-1.1 0-2 .9-2 2s.9 2 2 2c1.2 0 2.2-1 2.2-2.4V3h2.6z" />
    </svg>
);

const SOCIALS = [
    { label: 'YouTube', url: 'https://youtube.com/@rcforge.admin0?si=lzPBVmq__-I9bh90', Icon: YouTubeIcon, color: '#FF0000' },
    { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61573347837417', Icon: FacebookIcon, color: '#1877F2' },
    { label: 'Instagram', url: 'https://www.instagram.com/rcforge.admin?igsh=N2Zmejh3cHF4djQw', Icon: InstagramIcon, color: '#E1306C' },
    { label: 'WhatsApp Channel', url: 'https://whatsapp.com/channel/0029VbDDmZN9MF94EWQBjB0P', Icon: WhatsAppIcon, color: '#25D366' },
    { label: 'Telegram', url: 'https://t.me/rcforge', Icon: TelegramIcon, color: '#229ED9' },
    { label: 'TikTok', url: 'https://vm.tiktok.com/ZS92RTW15XQBh-8GbQu/', Icon: TikTokIcon, color: '#010101' },
];

export default function SocialBar() {
    return (
        <div style={styles.wrapper}>
            {/* Left: Social Icons */}
            <div style={styles.left}>
                <span style={styles.followText}>Follow us</span>
                <span style={styles.verticalDivider} />
                <div style={styles.iconRow}>
                    {SOCIALS.map(({ label, url, Icon, color }) => (
                        <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={label}
                            style={{ ...styles.iconLink, backgroundColor: color }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>

            {/* Right: Emails */}
            <div style={styles.right}>
                <a href="mailto:rcforge.admin@gmail.com" style={styles.emailLink}>
                    <EnvelopeIcon /> rcforge.admin@gmail.com
                </a>
                <span style={styles.verticalDivider} />
                <a href="mailto:rcforge.customerservice@gmail.com" style={styles.emailLink}>
                    <SupportIcon /> rcforge.customerservice@gmail.com
                </a>
            </div>
        </div>
    );
}

const EnvelopeIcon = () => (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ marginRight: 5, verticalAlign: '-2px' }}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
    </svg>
);

const SupportIcon = () => (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ marginRight: 5, verticalAlign: '-2px' }}>
        <path d="M4 13a8 8 0 0116 0" />
        <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
        <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
    </svg>
);

const styles = {
    wrapper: {
        backgroundColor: '#0b1f3a',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        padding: '10px 20px',
        fontSize: '13px',
        fontFamily: 'sans-serif',
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
    },
    followText: {
        color: '#9aa5b1',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
    },
    iconRow: {
        display: 'flex',
        gap: '8px',
    },
    iconLink: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        color: '#fff',
        textDecoration: 'none',
        transition: 'transform 0.15s ease',
        flexShrink: 0,
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
    },
    emailLink: {
        display: 'inline-flex',
        alignItems: 'center',
        color: '#cbd5e1',
        textDecoration: 'none',
        fontSize: '12px',
        transition: 'color 0.15s ease',
    },
    verticalDivider: {
        width: '1px',
        height: '16px',
        backgroundColor: '#2a3b52',
        display: 'inline-block',
    },
};