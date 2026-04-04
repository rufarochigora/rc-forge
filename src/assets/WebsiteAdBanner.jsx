import React, { useState } from 'react';

const RC_FORGE_NUMBER = '263780114134';

export default function WebsiteAdBanner() {
    const [expanded, setExpanded] = useState(false);

    const handleCall = () => {
        window.open(`tel:+${RC_FORGE_NUMBER}`, '_self');
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent(
            "Hello RC Forge \n\nI'm interested in getting a *professional website* built for my company/institution.\n\nPlease get in touch with me."
        );
        window.open(`https://wa.me/${RC_FORGE_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <div style={styles.wrapper}>
            {/* Top bar - always visible */}
            <div style={styles.topBar}>
                <div style={styles.topLeft}>
                    <span style={styles.badge}>🌐 NEW SERVICE</span>
                    <span style={styles.topText}>
                        RC Forge now builds <strong>professional websites</strong> for companies & institutions
                    </span>
                </div>
                <div style={styles.topRight}>
                    <button style={styles.callBtn} onClick={handleCall}>
                        📞 Call
                    </button>
                    <button style={styles.whatsappBtn} onClick={handleWhatsApp}>
                        💬 WhatsApp
                    </button>
                    <button style={styles.toggleBtn} onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'Show Less ▲' : 'Learn More ▼'}
                    </button>
                </div>
            </div>

            {/* Expanded section */}
            {expanded && (
                <div style={styles.expandedSection}>
                    <div style={styles.expandedGrid}>

                        {/* What we offer */}
                        <div style={styles.card}>
                            <h3 style={styles.cardTitle}>🛠️ What We Build</h3>
                            <ul style={styles.list}>
                                <li>✔ Business & company websites</li>
                                <li>✔ School & institution platforms</li>
                                <li>✔ E-commerce & ordering systems</li>
                                <li>✔ Security & services company sites</li>
                                <li>✔ Logistics & transport platforms</li>
                                <li>✔ NGO & community organisation sites</li>
                            </ul>
                        </div>

                        {/* What's included */}
                        <div style={styles.card}>
                            <h3 style={styles.cardTitle}>📦 What's Included</h3>
                            <ul style={styles.list}>
                                <li>✔ Modern, mobile-friendly design</li>
                                <li>✔ WhatsApp & call contact buttons</li>
                                <li>✔ Google Search optimisation (SEO)</li>
                                <li>✔ Free hosting on Vercel</li>
                                <li>✔ Google Search Console setup</li>
                                <li>✔ Fast delivery & revisions</li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div style={styles.ctaCard}>
                            <h3 style={styles.ctaTitle}>Get Your Business Online Today</h3>
                            <p style={styles.ctaText}>
                                We have built platforms for RC Forge, TMT Logistics, and Tunje Amakhosi Security.
                                Your business is next.
                            </p>
                            <p style={styles.contactLine}>
                                📞 <strong>RC Forge:</strong> +263 780 114 134
                            </p>
                            <div style={styles.ctaBtnGroup}>
                                <button style={styles.ctaCallBtn} onClick={handleCall}>
                                    📞 Call Now
                                </button>
                                <button style={styles.ctaWhatsappBtn} onClick={handleWhatsApp}>
                                    💬 WhatsApp Us
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    wrapper: {
        background: 'linear-gradient(135deg, #0b2545 0%, #1a4a7a 100%)',
        borderRadius: '10px',
        marginBottom: '30px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
    },
    topBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        padding: '14px 20px',
    },
    topLeft: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
    },
    badge: {
        backgroundColor: '#eec643',
        color: '#0b2545',
        padding: '4px 10px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
    },
    topText: {
        color: '#ffffff',
        fontSize: '14px',
    },
    topRight: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    callBtn: {
        backgroundColor: '#0b2545',
        color: '#ffffff',
        border: '2px solid #ffffff',
        padding: '7px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '13px',
    },
    whatsappBtn: {
        backgroundColor: '#25D366',
        color: '#ffffff',
        border: 'none',
        padding: '7px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '13px',
    },
    toggleBtn: {
        backgroundColor: 'transparent',
        color: '#eec643',
        border: '2px solid #eec643',
        padding: '7px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '13px',
    },
    expandedSection: {
        padding: '0 20px 20px',
    },
    expandedGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.07)',
        borderRadius: '8px',
        padding: '20px',
    },
    cardTitle: {
        color: '#eec643',
        margin: '0 0 12px 0',
        fontSize: '16px',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        color: '#cbd5e1',
        fontSize: '14px',
        lineHeight: '2',
    },
    ctaCard: {
        backgroundColor: '#eec643',
        borderRadius: '8px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    ctaTitle: {
        color: '#0b2545',
        margin: '0 0 10px 0',
        fontSize: '17px',
    },
    ctaText: {
        color: '#0b2545',
        fontSize: '14px',
        lineHeight: '1.6',
        margin: '0 0 12px 0',
    },
    contactLine: {
        color: '#0b2545',
        fontSize: '14px',
        margin: '0 0 16px 0',
    },
    ctaBtnGroup: {
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
    },
    ctaCallBtn: {
        flex: 1,
        padding: '10px',
        backgroundColor: '#0b2545',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '14px',
    },
    ctaWhatsappBtn: {
        flex: 1,
        padding: '10px',
        backgroundColor: '#25D366',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '14px',
    },
};