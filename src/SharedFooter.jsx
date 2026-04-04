import React from 'react';

export default function SharedFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            marginTop: 'auto',
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            padding: '30px 20px',
            fontFamily: 'sans-serif'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '30px'
            }}>

                {/* RC Forge - Main Brand */}
                <div style={{ flex: '1 1 220px' }}>
                    <h3 style={{ color: '#25D366', marginBottom: '10px', fontSize: '18px' }}>RC Forge</h3>
                    <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6', margin: '0 0 10px 0' }}>
                        Your local source for precision electronic components, Arduino boards, and robotics gear in Zimbabwe.
                    </p>
                    <span style={{ color: '#555', fontSize: '13px' }}>🏠 Main Hub</span>
                </div>

                {/* Partner: TMT Logistics */}
                <div style={{ flex: '1 1 220px' }}>
                    <h3 style={{ color: '#25D366', marginBottom: '10px', fontSize: '18px' }}>TMT Logistics</h3>
                    <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6', margin: '0 0 10px 0' }}>
                        Sourcing anything from electronics and clothing to industrial solar kits with express flight shipping.
                    </p>
                    <a
                        href="https://tmt-logistics.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff', fontSize: '14px', textDecoration: 'underline' }}
                    >
                        Visit TMT Logistics →
                    </a>
                </div>

                {/* Partner: Tunje Amakhosi Security */}
                <div style={{ flex: '1 1 220px' }}>
                    <h3 style={{ color: '#eec643', marginBottom: '10px', fontSize: '18px' }}>Tunje Amakhosi Security</h3>
                    <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6', margin: '0 0 10px 0' }}>
                        Reliable 24/7 security and rapid response services in Bindura, Zimbabwe. Led by Director Lucky Kapiya.
                    </p>
                    <a
                        href="https://tunje-amakhosi.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#eec643', fontSize: '14px', textDecoration: 'underline' }}
                    >
                        Visit Tunje Amakhosi →
                    </a>
                </div>

                {/* Ecosystem blurb */}
                <div style={{ flex: '1 1 180px' }}>
                    <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '18px' }}>Our Ecosystem</h3>
                    <p style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.8' }}>
                        Prototype locally with <strong style={{ color: '#25D366' }}>RC Forge</strong>.<br />
                        Source at scale with <strong style={{ color: '#25D366' }}>TMT Logistics</strong>.<br />
                        Stay protected with <strong style={{ color: '#eec643' }}>Tunje Amakhosi</strong>.
                    </p>
                </div>

            </div>

            <hr style={{ border: '0', borderTop: '1px solid #333', margin: '20px 0' }} />

            <div style={{ textAlign: 'center', color: '#777', fontSize: '12px' }}>
                <p style={{ margin: '0' }}>
                    © {currentYear} RC Forge · TMT Logistics · Tunje Amakhosi Security. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}