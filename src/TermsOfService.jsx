import React from 'react';

const Section = ({ title, children }) => (
    <div style={{ marginBottom: '32px' }}>
        <h2 style={{
            fontSize: '1rem', fontWeight: '600', color: '#2d3436',
            borderLeft: '3px solid #00b894', paddingLeft: '12px',
            marginBottom: '12px'
        }}>{title}</h2>
        <div style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '0.95rem' }}>
            {children}
        </div>
    </div>
);

export default function TermsOfService() {
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
                        Terms of Service
                    </h1>
                </div>
                <p style={{ margin: 0, color: '#718096', fontSize: '0.9rem' }}>
                    Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <p style={{ margin: '12px 0 0', color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.7' }}>
                    Please read these Terms of Service carefully before placing an order on the RC Forge platform.
                    By submitting an order, you confirm that you have read, understood, and agreed to these terms.
                </p>
            </div>

            <Section title="1. About RC Forge">
                <p>RC Forge is a student-operated electronics component supply platform serving university
                    students in Zimbabwe. We currently operate at Midlands State University (Zvishavane) and
                    the University of Zimbabwe (Harare). RC Forge sources components locally and internationally
                    to supply engineering and robotics students with the parts they need for their projects.</p>
            </Section>

            <Section title="2. Placing an Order">
                <p>Orders are placed through the RC Forge website. When you submit an order you will receive
                    a unique <strong>Order ID</strong>. This Order ID is your reference for all communications
                    about your order. You must retain this Order ID — RC Forge cannot look up orders without it.</p>
                <p style={{ marginTop: '10px' }}>After submitting your order online, you will be directed to
                    WhatsApp to confirm your order with an RC Forge representative. Your order is only confirmed
                    once an RC Forge team member acknowledges it on WhatsApp.</p>
                <p style={{ marginTop: '10px' }}>RC Forge reserves the right to decline any order at our
                    discretion, in which case no charges will apply.</p>
            </Section>

            <Section title="3. Pricing">
                <p>All prices displayed on the RC Forge platform are in <strong>United States Dollars (USD)</strong>.
                    Prices are subject to change without notice due to fluctuating supplier costs and exchange rates.
                    The price at the time of your order confirmation is the price you will pay — price changes
                    after confirmation do not affect confirmed orders.</p>
                <p style={{ marginTop: '10px' }}>RC Forge reserves the right to correct pricing errors. If a
                    pricing error is identified after order confirmation, we will notify you and offer the option
                    to proceed at the correct price or cancel the order.</p>
            </Section>

            <Section title="4. Payment">
                <p>Payment terms are communicated directly via WhatsApp at the time of order confirmation.
                    RC Forge currently accepts payment arrangements as agreed between the customer and the
                    RC Forge representative handling the order. RC Forge does not process online payments
                    and no payment information is collected through the website.</p>
            </Section>

            <Section title="5. Delivery and Fulfilment">
                <div style={{
                    background: '#f0fff4', border: '1px solid #9ae6b4',
                    borderRadius: '8px', padding: '14px', marginBottom: '14px'
                }}>
                    <p style={{ margin: 0, fontWeight: '600', color: '#276749' }}>Delivery timeframe</p>
                    <p style={{ margin: '6px 0 0', color: '#2f855a' }}>
                        Orders are fulfilled within a maximum of <strong>14 days (two weeks)</strong> from
                        the date of order confirmation. This accounts for international sourcing from China
                        where required.
                    </p>
                </div>
                <p><strong>University campus delivery</strong> — RC Forge physically delivers orders to
                    students at Midlands State University (Zvishavane) and the University of Zimbabwe (Harare).
                    Delivery arrangements are confirmed via WhatsApp.</p>
                <p style={{ marginTop: '10px' }}><strong>All other locations</strong> — For customers outside
                    these campuses, collection arrangements are made via WhatsApp. RC Forge is not responsible
                    for delays caused by third-party courier services where applicable.</p>
                <p style={{ marginTop: '10px' }}>RC Forge is not liable for delays caused by customs clearance,
                    international shipping disruptions, or circumstances beyond our reasonable control.</p>
            </Section>

            <Section title="6. Refund and Exchange Policy">
                <div style={{
                    background: '#fff5f5', border: '1px solid #fed7d7',
                    borderRadius: '8px', padding: '14px', marginBottom: '14px'
                }}>
                    <p style={{ margin: 0, fontWeight: '600', color: '#c53030' }}>No refunds policy</p>
                    <p style={{ margin: '6px 0 0', color: '#742a2a' }}>
                        RC Forge operates a <strong>no refund policy</strong>. Once an order has been confirmed,
                        no monetary refunds will be issued under any circumstances.
                    </p>
                </div>
                <p><strong>Exchanges</strong> — RC Forge offers exchanges in the following circumstances only:</p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li style={{ marginBottom: '8px' }}>The wrong item was delivered (different from what was ordered)</li>
                    <li style={{ marginBottom: '8px' }}>The item arrived in a condition that renders it completely non-functional due to a manufacturing defect</li>
                </ul>
                <p style={{ marginTop: '10px' }}>Exchange requests must be submitted within <strong>48 hours</strong> of
                    receiving the item by contacting <a href="mailto:rcforge.contact@gmail.com" style={{ color: '#4d9db3' }}>rcforge.contact@gmail.com</a> with
                    your Order ID and a description of the issue. RC Forge reserves the right to assess each
                    exchange request on a case-by-case basis.</p>
                <p style={{ marginTop: '10px' }}>Exchanges are not offered for: items damaged by the customer
                    after delivery, items ordered incorrectly by the customer, or items that function as described
                    but do not meet the customer's project expectations.</p>
            </Section>

            <Section title="7. Customer Responsibilities">
                <p>You are responsible for:</p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li style={{ marginBottom: '8px' }}>Ensuring the components you order are suitable for your intended project</li>
                    <li style={{ marginBottom: '8px' }}>Providing accurate contact information when placing your order</li>
                    <li style={{ marginBottom: '8px' }}>Responding to WhatsApp communications from RC Forge in a timely manner</li>
                    <li style={{ marginBottom: '8px' }}>Safe handling of electronic components once delivered</li>
                    <li style={{ marginBottom: '8px' }}>Retaining your Order ID for all order-related communications</li>
                </ul>
            </Section>

            <Section title="8. Limitation of Liability">
                <p>RC Forge is a student-operated platform. To the maximum extent permitted by applicable
                    Zimbabwean law, RC Forge shall not be liable for:</p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li style={{ marginBottom: '8px' }}>Any indirect, incidental, or consequential damages arising from the use of purchased components</li>
                    <li style={{ marginBottom: '8px' }}>Damage to equipment or projects caused by incorrect use of components</li>
                    <li style={{ marginBottom: '8px' }}>Delays beyond our reasonable control including international shipping delays</li>
                    <li style={{ marginBottom: '8px' }}>Losses arising from component unavailability after order confirmation</li>
                </ul>
                <p style={{ marginTop: '10px' }}>Our total liability in connection with any order shall not
                    exceed the value of that specific order.</p>
            </Section>

            <Section title="9. Complaints">
                <p>RC Forge takes all complaints seriously. If you have a complaint about your order,
                    our service, or any aspect of your experience:</p>
                <div style={{
                    background: '#f7fafc', borderRadius: '8px', padding: '16px',
                    marginTop: '12px', border: '1px solid #e2e8f0'
                }}>
                    <p style={{ margin: '0 0 6px' }}><strong>RC Forge Complaints</strong></p>
                    <p style={{ margin: '0 0 6px' }}>Email: <a href="mailto:rcforge.contact@gmail.com" style={{ color: '#4d9db3' }}>rcforge.contact@gmail.com</a></p>
                    <p style={{ margin: '0 0 6px' }}>Include your Order ID and a clear description of the issue.</p>
                    <p style={{ margin: 0 }}>We aim to respond to all complaints within <strong>5 business days</strong>.</p>
                </div>
            </Section>

            <Section title="10. Changes to These Terms">
                <p>RC Forge reserves the right to update these Terms of Service at any time. Updated terms
                    will be posted on this page with a revised date. Continued use of the RC Forge platform
                    after changes constitutes acceptance of the updated terms.</p>
            </Section>

            <Section title="11. Governing Law">
                <p>These Terms of Service are governed by the laws of Zimbabwe. Any disputes shall be
                    subject to the jurisdiction of the courts of Zimbabwe.</p>
            </Section>
        </div>
    );
}