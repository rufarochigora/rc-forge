import React from 'react';

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

export default function SocialBar() {
    return (
        <div style={styles.wrapper}>
            {/* Left: Social Icons */}
            <div style={styles.left}>
                <span style={styles.followText}>Follow us:</span>
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

            {/* Right: Emails */}
            <div style={styles.right}>
                <a href="mailto:rcforge.admin@gmail.com" style={styles.emailLink}>
                    ✉ rcforge.admin@gmail.com
                </a>
                <span style={styles.divider}>|</span>
                <a href="mailto:rcforge.customerservice@gmail.com" style={styles.emailLink}>
                    🎧 rcforge.customerservice@gmail.com
                </a>
            </div>
        </div>
    );
}

const styles = {
    wrapper: {
        backgroundColor: '#0b1f3a',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '8px 20px',
        fontSize: '13px',
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    followText: {
        color: '#aaa',
        fontSize: '12px',
        marginRight: '4px',
    },
    iconLink: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '26px',
        height: '26px',
        borderRadius: '5px',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '12px',
        textDecoration: 'none',
        transition: 'opacity 0.2s',
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexWrap: 'wrap',
    },
    emailLink: {
        color: '#cbd5e1',
        textDecoration: 'none',
        fontSize: '12px',
        transition: 'color 0.2s',
    },
    divider: {
        color: '#444',
    },
};