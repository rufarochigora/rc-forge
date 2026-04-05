import React, { useState } from 'react';

const universities = [
    { name: "University of Zimbabwe", short: "UZ", color: "#0984e3" },
    { name: "Midlands State University", short: "MSU", color: "#00b894", note: "Zvishavane & Gweru campuses" },
    { name: "National University of Science and Technology", short: "NUST", color: "#e17055", note: "Bulawayo" },
    { name: "Bindura University of Science Education", short: "BUSE", color: "#6c5ce7" },
    { name: "Harare Institute of Technology", short: "HIT", color: "#fd9644", note: "Harare" },
    { name: "Chinhoyi University of Technology", short: "CUT", color: "#e84393", note: "Chinhoyi" },
];

const specializations = [
    { icon: "🔌", label: "Microcontrollers" },
    { icon: "📡", label: "Sensors" },
    { icon: "📶", label: "Communication Modules" },
    { icon: "⚡", label: "Power Systems" },
    { icon: "🔧", label: "Prototyping Tools" },
    { icon: "🛡️", label: "Security ICs" },
];

export default function AboutSection() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div style={styles.wrapper}>
            {/* Header row */}
            <div style={styles.headerRow}>
                <div style={styles.headerLeft}>
                    <span style={styles.badge}>🏭 ABOUT RC FORGE</span>
                    <span style={styles.headerText}>
                        Supplying electronic components to <strong>university students</strong> across Zimbabwe
                    </span>
                </div>
                <button
                    style={styles.toggleBtn}
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'Show Less ▲' : 'Learn More ▼'}
                </button>
            </div>

            {/* Expanded content */}
            {expanded && (
                <div style={styles.expandedBody}>

                    {/* Mission statement */}
                    <div style={styles.missionCard}>
                        <h3 style={styles.missionTitle}>Our Mission</h3>
                        <p style={styles.missionText}>
                            We are a dedicated supplier of electronic components tailored to support university
                            students in engineering and technology-related projects. Our goal is to make
                            high-quality, reliable components easily accessible, enabling students to design,
                            build, and successfully complete their academic and personal innovations.
                        </p>
                        <p style={styles.missionText}>
                            We are committed to <strong>affordability</strong>, <strong>accessibility</strong>,
                            and <strong>technical support</strong> — helping bridge the gap between theoretical
                            learning and practical implementation in engineering education.
                        </p>
                    </div>

                    <div style={styles.twoCol}>

                        {/* What we specialise in */}
                        <div style={styles.card}>
                            <h3 style={styles.cardTitle}>⚙️ What We Specialise In</h3>
                            <p style={styles.cardSubtitle}>
                                Components suited for coursework, final-year projects, and research.
                            </p>
                            <div style={styles.specGrid}>
                                {specializations.map((s) => (
                                    <div key={s.label} style={styles.specItem}>
                                        <span style={styles.specIcon}>{s.icon}</span>
                                        <span style={styles.specLabel}>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Universities we serve */}
                        <div style={styles.card}>
                            <h3 style={styles.cardTitle}>🎓 Universities We Serve</h3>
                            <p style={styles.cardSubtitle}>
                                Supporting students from leading institutions across Zimbabwe.
                            </p>
                            <div style={styles.uniList}>
                                {universities.map((u) => (
                                    <div key={u.short} style={styles.uniItem}>
                                        <span style={{ ...styles.uniBadge, backgroundColor: u.color }}>
                                            {u.short}
                                        </span>
                                        <div>
                                            <div style={styles.uniName}>{u.name}</div>
                                            {u.note && (
                                                <div style={styles.uniNote}>{u.note}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Bottom tagline */}
                    <div style={styles.taglineBar}>
                        <span style={styles.taglineText}>
                            💡 Whether for coursework, final-year projects, or research — we ensure students have the resources to bring their ideas to life.
                        </span>
                    </div>

                </div>
            )}
        </div>
    );
}

const styles = {
    wrapper: {
        background: 'linear-gradient(135deg, #2d3436 0%, #1a252f 100%)',
        borderRadius: '10px',
        marginBottom: '30px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
    },
    headerRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        padding: '14px 20px',
    },
    headerLeft: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
    },
    badge: {
        backgroundColor: '#4d9db3',
        color: '#ffffff',
        padding: '4px 10px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
    },
    headerText: {
        color: '#ffffff',
        fontSize: '14px',
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
        whiteSpace: 'nowrap',
    },
    expandedBody: {
        padding: '0 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    missionCard: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: '8px',
        padding: '20px 24px',
        borderLeft: '4px solid #4d9db3',
    },
    missionTitle: {
        color: '#eec643',
        margin: '0 0 12px 0',
        fontSize: '16px',
    },
    missionText: {
        color: '#cbd5e1',
        fontSize: '14px',
        lineHeight: '1.8',
        margin: '0 0 10px 0',
    },
    twoCol: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: '8px',
        padding: '20px',
    },
    cardTitle: {
        color: '#eec643',
        margin: '0 0 6px 0',
        fontSize: '16px',
    },
    cardSubtitle: {
        color: '#aaa',
        fontSize: '13px',
        margin: '0 0 16px 0',
        lineHeight: '1.5',
    },
    specGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
    },
    specItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: 'rgba(255,255,255,0.05)',
        padding: '8px 12px',
        borderRadius: '6px',
    },
    specIcon: {
        fontSize: '18px',
    },
    specLabel: {
        color: '#cbd5e1',
        fontSize: '13px',
        fontWeight: 'bold',
    },
    uniList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    uniItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
    },
    uniBadge: {
        color: '#ffffff',
        padding: '4px 8px',
        borderRadius: '5px',
        fontSize: '11px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        minWidth: '42px',
        textAlign: 'center',
        marginTop: '2px',
    },
    uniName: {
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: 'bold',
    },
    uniNote: {
        color: '#aaa',
        fontSize: '12px',
        marginTop: '2px',
    },
    taglineBar: {
        backgroundColor: '#4d9db3',
        borderRadius: '8px',
        padding: '14px 20px',
        textAlign: 'center',
    },
    taglineText: {
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: '1.6',
    },
};