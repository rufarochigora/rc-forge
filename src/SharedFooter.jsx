import React from 'react';

const currentYear = new Date().getFullYear();

const SOCIALS = [
    {
        label: 'YouTube',
        url: 'https://youtube.com/@rcforge.admin0?si=lzPBVmq__-I9bh90',
        icon: '▶',
        color: '#FF0000',
    },
    {
        label: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=61573347837417',
        icon: 'f',
        color: '#1877F2',
    },
    {
        label: 'Instagram',
        url: 'https://www.instagram.com/rcforge.admin?igsh=N2Zmejh3cHF4djQw',
        icon: '📷',
        color: '#E1306C',
    },
];

export default function SharedFooter() {
    return (
        <footer style={styles.footer}>
            <div style={styles.grid}>

                {/* RC Forge - Main Brand */}
                <div style={styles.col}>
                    <h3 style={styles.brandTitle}>RC Forge</h3>
                    <p style={styles.brandDesc}>
                        Your local source for precision electronic components, Arduino boards, and robotics gear in Zimbabwe.
                    </p>
                    <span style={styles.hubBadge}>🏠 Main Hub</span>

                    {/* Social Icons */}
                    <div style={styles.socialRow}>
                        {SOCIALS.map((s) => (
                            <a
                                key={s.label}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={s.label}
                                style={{ ...styles.iconLink, backgroundColor: s.color }}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>

                    {/* Emails */}
                    <div style={styles.emailBlock}>
                        <a href="mailto:rcforge.admin@gmail.com" style={styles.emailLink}>
                            ✉ rcforge.admin@gmail.com
                        </a>
                        <a href="mailto:rcforge.contact@gmail.com" style={styles.emailLink}>
                            🎧 rcforge.contact@gmail.com
                        </a>
                    </div>
                </div>
                {/* Legal Links */}
                <div style={{ marginTop: '8px', display: 'flex', gap: '16px' }}>
                    <a href="/privacy" style={{ color: '#aaa', fontSize: '12px', textDecoration: 'none' }}>Privacy Policy</a>
                    <a href="/terms" style={{ color: '#aaa', fontSize: '12px', textDecoration: 'none' }}>Terms of Service</a>
                </div>
                
                {/* Partner: TMT Logistics */}
                <div style={styles.col}>
                    <h3 style={{ ...styles.brandTitle, color: '#25D366' }}>TMT Logistics</h3>
                    <p style={styles.brandDesc}>
                        Sourcing anything from electronics and clothing to industrial solar kits with express flight shipping.
                    </p>
                    <a
                        href="https://tmt-logistics.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.visitLink}
                    >
                        Visit TMT Logistics →
                    </a>
                </div>

                {/* Partner: Tunje Amakhosi Security */}
                <div style={styles.col}>
                    <h3 style={{ ...styles.brandTitle, color: '#eec643' }}>Tunje Amakhosi Security</h3>
                    <p style={styles.brandDesc}>
                        Reliable 24/7 security and rapid response services in Bindura, Zimbabwe. Led by Director Lucky Kapiya.
                    </p>
                    <a
                        href="https://tunje-amakhosi.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ ...styles.visitLink, color: '#eec643' }}
                    >
                        Visit Tunje Amakhosi →
                    </a>
                </div>

                {/* Ecosystem */}
                <div style={styles.col}>
                    <h3 style={{ ...styles.brandTitle, color: '#fff' }}>Our Ecosystem</h3>
                    <p style={styles.ecosystemText}>
                        Prototype locally with <strong style={{ color: '#25D366' }}>RC Forge</strong>.<br />
                        Source at scale with <strong style={{ color: '#25D366' }}>TMT Logistics</strong>.<br />
                        Stay protected with <strong style={{ color: '#eec643' }}>Tunje Amakhosi</strong>.
                    </p>
                </div>

            </div>

            <hr style={styles.divider} />

            <div style={styles.bottom}>
                <div style={styles.bottomSocials}>
                    {SOCIALS.map((s) => (
                        <a
                            key={s.label}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={s.label}
                            style={{ ...styles.iconLink, backgroundColor: s.color }}
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
                <p style={styles.copyright}>
                    © {currentYear} RC Forge · TMT Logistics · Tunje Amakhosi Security. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        marginTop: 'auto',
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        padding: '40px 20px 20px',
        fontFamily: 'sans-serif',
    },
    grid: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '30px',
    },
    col: {
        flex: '1 1 200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    brandTitle: {
        color: '#25D366',
        marginBottom: '8px',
        marginTop: 0,
        fontSize: '18px',
    },
    brandDesc: {
        color: '#ccc',
        fontSize: '14px',
        lineHeight: '1.6',
        margin: 0,
    },
    hubBadge: {
        color: '#555',
        fontSize: '13px',
    },
    socialRow: {
        display: 'flex',
        gap: '8px',
        marginTop: '8px',
    },
    iconLink: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '28px',
        height: '28px',
        borderRadius: '6px',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '12px',
        textDecoration: 'none',
    },
    emailBlock: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        marginTop: '4px',
    },
    emailLink: {
        color: '#aaa',
        fontSize: '12px',
        textDecoration: 'none',
    },
    visitLink: {
        color: '#fff',
        fontSize: '14px',
        textDecoration: 'underline',
        marginTop: '4px',
    },
    ecosystemText: {
        color: '#aaa',
        fontSize: '13px',
        lineHeight: '1.9',
        margin: 0,
    },
    divider: {
        border: '0',
        borderTop: '1px solid #333',
        margin: '24px 0 16px',
    },
    bottom: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
    },
    bottomSocials: {
        display: 'flex',
        gap: '10px',
    },
    copyright: {
        textAlign: 'center',
        color: '#777',
        fontSize: '12px',
        margin: 0,
    },
};