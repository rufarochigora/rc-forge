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

                {/* Brand 1: RC Forge */}
                <div style={{ flex: '1 1 250px' }}>
                    <h3 style={{ color: '#25D366', marginBottom: '10px', fontSize: '18px' }}>RC Forge</h3>
                    <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6', margin: '0 0 10px 0' }}>
                        Your local source for precision electronic components, Arduino boards, and robotics gear in Zimbabwe.
                    </p>
                    <a
                        href="https://rc-forge.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff', fontSize: '14px', textDecoration: 'underline' }}
                    >
                        Visit RC Forge
                    </a>
                </div>

                {/* Brand 2: TMT Logistics */}
                <div style={{ flex: '1 1 250px' }}>
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
                        Visit TMT Logistics
                    </a>
                </div>

                {/* Quick Links / Contact */}
                <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '18px' }}>Partner Ecosystem</h3>
                    <p style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.6' }}>
                        By cross-linking our platforms, we ensure you can prototype locally with RC Forge and source at scale with TMT Logistics.
                    </p>
                </div>

            </div>

            {/* Thin line separator */}
            <hr style={{ border: '0', borderTop: '1px solid #333', margin: '20px 0' }} />

            {/* Bottom Copyright */}
            <div style={{ textAlign: 'center', color: '#777', fontSize: '12px' }}>
                <p style={{ margin: '0' }}>© {currentYear} RC Forge & TMT Logistics. All Rights Reserved.</p>
            </div>
        </footer>
    );
}