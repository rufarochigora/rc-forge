import React from 'react';

const Section = ({ title, children }) => (
    <div style={{ marginBottom: '32px' }}>
        <h2 style={{
            fontSize: '1rem', fontWeight: '600', color: '#2d3436',
            borderLeft: '3px solid #4d9db3', paddingLeft: '12px',
            marginBottom: '12px'
        }}>{title}</h2>
        <div style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '0.95rem' }}>
            {children}
        </div>
    </div>
);

export default function PrivacyPolicy() {
    return (
        <div style={{
            maxWidth: '800px', margin: '40px auto', padding: '40px',
            background: '#fff', borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            fontFamily: '"Inter", sans-serif'
        }}>
            <div style={{ marginBottom: '36px', borderBottom: '2px solid #f0f4f8', paddingBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                    <img src="/RCForgelogo.png" alt="RC Forge" style={{ height: '40px', borderRadius: '6px' }}
                        onError={(e) => { e.target.style.display = 'none'; }} />
                    <h1 style={{ margin: 0, fontSize: '1.6rem', color: '#2d3436', fontWeight: '700' }}>
                        Privacy Policy
                    </h1>
                </div>
                <p style={{ margin: 0, color: '#718096', fontSize: '0.9rem' }}>
                    Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <p style={{ margin: '12px 0 0', color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.7' }}>
                    RC Forge is a student-operated electronics component platform serving university students
                    across Zimbabwe, currently operating at MSU (Zvishavane) and the University of Zimbabwe (Harare).
                    We are committed to protecting your personal information and being transparent about how we use it.
                </p>
            </div>

            <Section title="1. Who We Are">
                <p>RC Forge is an independent student-run platform operating in Zimbabwe. We sell and supply
                    electronic components, robotics parts, and related products primarily to university students
                    and engineering projects. Our operations are currently centred at Midlands State University
                    (Zvishavane) and the University of Zimbabwe (Harare).</p>
                <p style={{ marginTop: '10px' }}>For all privacy-related matters, contact us at: <strong>rcforge.contact@gmail.com</strong></p>
            </Section>

            <Section title="2. What Data We Collect">
                <p>When you place an order on the RC Forge platform, we collect the following information:</p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li style={{ marginBottom: '8px' }}><strong>Your full name</strong> — to identify and process your order</li>
                    <li style={{ marginBottom: '8px' }}><strong>Your WhatsApp phone number</strong> — to communicate order status and coordinate delivery or pickup</li>
                    <li style={{ marginBottom: '8px' }}><strong>Components ordered and quantities</strong> — to fulfil your order</li>
                    <li style={{ marginBottom: '8px' }}><strong>Order total and pricing</strong> — for transaction records</li>
                    <li style={{ marginBottom: '8px' }}><strong>Order timestamp and generated Order ID</strong> — for tracking and record-keeping</li>
                    <li style={{ marginBottom: '8px' }}><strong>Order notes</strong> — any specific instructions you voluntarily provide</li>
                </ul>
                <p style={{ marginTop: '10px' }}>We do <strong>not</strong> collect payment card details, national ID numbers,
                    physical home addresses, or any sensitive personal data.</p>
            </Section>

            <Section title="3. How We Use Your Data">
                <p>Your data is used exclusively for the following purposes:</p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li style={{ marginBottom: '8px' }}>Processing and fulfilling your component order</li>
                    <li style={{ marginBottom: '8px' }}>Communicating order status updates via WhatsApp</li>
                    <li style={{ marginBottom: '8px' }}>Coordinating delivery to your university campus or arranging pickup</li>
                    <li style={{ marginBottom: '8px' }}>Internal record-keeping and order tracking by our admin team</li>
                    <li style={{ marginBottom: '8px' }}>Resolving disputes or complaints related to your order</li>
                </ul>
                <p style={{ marginTop: '10px' }}>We do <strong>not</strong> use your data for marketing, advertising,
                    profiling, or any purpose unrelated to your order.</p>
            </Section>

            <Section title="4. Where Your Data Is Stored">
                <p>Your order data is stored in a private Google Sheets workspace accessible only to authorised
                    RC Forge administrators. This workspace is hosted on Google's servers and protected by
                    Google account security. Only the RC Forge admin team has access to this data.</p>
                <p style={{ marginTop: '10px' }}>Data is transmitted securely between our platform and our
                    order management system using HTTPS encryption.</p>
            </Section>

            <Section title="5. How Long We Keep Your Data">
                <p>Order records are retained for a maximum of <strong>12 months</strong> from the date of
                    your order. After this period, your personal data is deleted from our systems. You may
                    request earlier deletion at any time (see Section 7).</p>
            </Section>

            <Section title="6. Who We Share Your Data With">
                <p>Your personal data is <strong>never sold, rented, or shared</strong> with third parties
                    for commercial purposes. Your data may only be accessed by:</p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li style={{ marginBottom: '8px' }}>RC Forge administrators responsible for processing your order</li>
                    <li style={{ marginBottom: '8px' }}>Google (as the infrastructure provider for our order management system)</li>
                </ul>
                <p style={{ marginTop: '10px' }}>We may disclose data if required by Zimbabwean law or a lawful
                    government request.</p>
            </Section>

            <Section title="7. Your Rights Under the Zimbabwe Cyber and Data Protection Act 2021">
                <p>Under Zimbabwe's Cyber and Data Protection Act, you have the following rights regarding
                    your personal data:</p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li style={{ marginBottom: '8px' }}><strong>Right to access</strong> — request a copy of the personal data we hold about you</li>
                    <li style={{ marginBottom: '8px' }}><strong>Right to correction</strong> — request correction of inaccurate data</li>
                    <li style={{ marginBottom: '8px' }}><strong>Right to erasure</strong> — request deletion of your personal data</li>
                    <li style={{ marginBottom: '8px' }}><strong>Right to object</strong> — object to how we process your data</li>
                </ul>
                <p style={{ marginTop: '10px' }}>To exercise any of these rights, email us at <strong>rcforge.contact@gmail.com</strong> with
                    your Order ID and your request. We will respond within 14 days.</p>
            </Section>

            <Section title="8. Cookies and Tracking">
                <p>The RC Forge platform uses <strong>localStorage</strong> (browser storage) only to remember
                    your session preferences such as cart state. We do not use tracking cookies, advertising
                    pixels, or any third-party analytics tools that collect personal data.</p>
            </Section>

            <Section title="9. Changes to This Policy">
                <p>We may update this Privacy Policy as our platform grows. Any significant changes will be
                    communicated via the RC Forge platform. The date at the top of this page always reflects
                    the latest version.</p>
            </Section>

            <Section title="10. Contact Us">
                <p>For any privacy concerns, data requests, or complaints:</p>
                <div style={{
                    background: '#f7fafc', borderRadius: '8px', padding: '16px',
                    marginTop: '12px', border: '1px solid #e2e8f0'
                }}>
                    <p style={{ margin: '0 0 6px' }}><strong>RC Forge — Privacy Enquiries</strong></p>
                    <p style={{ margin: '0 0 6px' }}>Email: <a href="mailto:rcforge.contact@gmail.com" style={{ color: '#4d9db3' }}>rcforge.contact@gmail.com</a></p>
                    <p style={{ margin: 0 }}>Response time: within 14 business days</p>
                </div>
            </Section>
        </div>
    );
}