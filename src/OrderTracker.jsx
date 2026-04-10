import React, { useState } from 'react';
import SharedFooter from './SharedFooter';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzQmvVJDWTwDrdfwEiCSR--GsM6fpdoObVmRJU7ZDd84o1zv8_Planz1sFpX8HtoIe0FQ/exec';

function StageIcon({ value }) {
    if (value === 'Complete') return <span style={{ color: '#00b894', fontWeight: 'bold' }}>✅</span>;
    if (value === 'In Progress') return <span style={{ color: '#fdcb6e', fontWeight: 'bold' }}>⏳</span>;
    return <span style={{ color: '#b2bec3' }}>⬜</span>;
}

function OverallStatus({ rows }) {
    const allComplete = rows.every(r =>
        r.stockVerification === 'Complete' &&
        r.pricingConfirmation === 'Complete' &&
        r.packagingPrep === 'Complete' &&
        r.finalApproval === 'Complete'
    );
    return (
        <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 18px', borderRadius: '20px', fontWeight: '700',
            fontSize: '0.95rem',
            background: allComplete ? '#00b89420' : '#fdcb6e20',
            border: `2px solid ${allComplete ? '#00b894' : '#fdcb6e'}`,
            color: allComplete ? '#00b894' : '#e17055',
        }}>
            {allComplete ? '✅ Order Complete' : '⏳ In Progress'}
        </div>
    );
}

export default function OrderTracker() {
    const [inputId, setInputId] = useState('');
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState(null);
    const [error, setError] = useState('');

    const trackOrder = async () => {
        const trimmed = inputId.trim();
        if (!trimmed) { setError('Please enter your Order ID.'); return; }
        setLoading(true);
        setError('');
        setOrder(null);
        try {
            const res = await fetch(`${APPS_SCRIPT_URL}?orderId=${encodeURIComponent(trimmed)}`);
            const data = await res.json();
            if (data.success) {
                setOrder(data.order);
            } else {
                setError('Order not found. Please check your Order ID and try again.');
            }
        } catch  {
            setError('Connection error. Please check your internet and try again.');
        } finally {
            setLoading(false);
        }
    };

    const firstRow = order && order[0];

    const formatDate = (val) => {
        if (!val) return '—';
        const d = new Date(val);
        return isNaN(d) ? String(val) : d.toLocaleString('en-GB', {
            day: '2-digit', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    return (
        <div style={{ fontFamily: '"Inter", sans-serif', background: '#f5f6fa', minHeight: '100vh', padding: '20px' }}>

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
                    <p style={{ margin: '5px 0 0', color: '#00cec9' }}>Order Tracker</p>
                </div>
            </header>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                <div style={{
                    background: '#fff', borderRadius: '12px', padding: '32px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '24px'
                }}>
                    <h2 style={{ margin: '0 0 8px', color: '#2d3436', fontSize: '1.4rem' }}>
                        Track Your Order
                    </h2>
                    <p style={{ margin: '0 0 24px', color: '#636e72', fontSize: '0.95rem' }}>
                        Enter the Order ID you received after booking. It looks like{' '}
                        <strong>RCF-20260406-0005</strong>.
                    </p>

                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <input
                            type="text"
                            value={inputId}
                            onChange={(e) => setInputId(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && trackOrder()}
                            placeholder="e.g. RCF-20260410-0003"
                            style={{
                                flex: 1, minWidth: '200px', padding: '12px 16px',
                                borderRadius: '8px', border: '1.5px solid #dfe6e9',
                                fontSize: '1rem', fontFamily: 'inherit', outline: 'none',
                                letterSpacing: '1px'
                            }}
                        />
                        <button
                            onClick={trackOrder}
                            disabled={loading}
                            style={{
                                padding: '12px 28px',
                                background: loading ? '#b2bec3' : '#4d9db3',
                                color: '#fff', border: 'none', borderRadius: '8px',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                fontWeight: '700', fontSize: '1rem', whiteSpace: 'nowrap'
                            }}
                        >
                            {loading ? 'Searching...' : 'Track Order'}
                        </button>
                    </div>

                    {error && (
                        <div style={{
                            marginTop: '16px', padding: '12px 16px', background: '#fff5f5',
                            border: '1px solid #fed7d7', borderRadius: '8px',
                            color: '#c53030', fontSize: '0.9rem'
                        }}>
                            {error}
                        </div>
                    )}
                </div>

                {order && firstRow && (
                    <div style={{
                        background: '#fff', borderRadius: '12px', padding: '32px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
                    }}>

                        <div style={{
                            display: 'flex', justifyContent: 'space-between',
                            alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px',
                            marginBottom: '24px', paddingBottom: '20px',
                            borderBottom: '2px solid #f0f4f8'
                        }}>
                            <div>
                                <p style={{ margin: '0 0 4px', fontSize: '0.85rem', color: '#636e72' }}>Order ID</p>
                                <p style={{ margin: '0 0 12px', fontSize: '1.3rem', fontWeight: '700', color: '#2d3436', letterSpacing: '1px' }}>
                                    {firstRow.orderId}
                                </p>
                                <p style={{ margin: '0 0 4px', fontSize: '0.85rem', color: '#636e72' }}>Customer</p>
                                <p style={{ margin: '0 0 12px', fontSize: '1rem', fontWeight: '600', color: '#2d3436' }}>
                                    {firstRow.customerName}
                                </p>
                                <p style={{ margin: '0 0 4px', fontSize: '0.85rem', color: '#636e72' }}>Order Placed</p>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#4a5568' }}>
                                    {formatDate(firstRow.timestamp)}
                                </p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <OverallStatus rows={order} />
                                {firstRow.status === 'Order Complete' && firstRow.completionTime && (
                                    <p style={{ margin: '8px 0 0', fontSize: '0.8rem', color: '#636e72' }}>
                                        Completed: {formatDate(firstRow.completionTime)}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.8rem', color: '#636e72' }}>✅ Complete</span>
                            <span style={{ fontSize: '0.8rem', color: '#636e72' }}>⏳ In Progress</span>
                            <span style={{ fontSize: '0.8rem', color: '#636e72' }}>⬜ Pending</span>
                        </div>

                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                                <thead>
                                    <tr style={{ background: '#f7fafc' }}>
                                        <th style={{ padding: '12px 16px', textAlign: 'left', color: '#4a5568', fontWeight: '600', borderBottom: '2px solid #e2e8f0' }}>Component</th>
                                        <th style={{ padding: '12px 8px', textAlign: 'center', color: '#4a5568', fontWeight: '600', borderBottom: '2px solid #e2e8f0' }}>Qty</th>
                                        <th style={{ padding: '12px 8px', textAlign: 'center', color: '#4a5568', fontWeight: '600', borderBottom: '2px solid #e2e8f0' }}>Stock</th>
                                        <th style={{ padding: '12px 8px', textAlign: 'center', color: '#4a5568', fontWeight: '600', borderBottom: '2px solid #e2e8f0' }}>Pricing</th>
                                        <th style={{ padding: '12px 8px', textAlign: 'center', color: '#4a5568', fontWeight: '600', borderBottom: '2px solid #e2e8f0' }}>Packaging</th>
                                        <th style={{ padding: '12px 8px', textAlign: 'center', color: '#4a5568', fontWeight: '600', borderBottom: '2px solid #e2e8f0' }}>Approval</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.map((row, idx) => (
                                        <tr key={idx} style={{ borderBottom: '1px solid #f0f4f8', background: idx % 2 === 0 ? '#fff' : '#fafbfc' }}>
                                            <td style={{ padding: '14px 16px', color: '#2d3436', fontWeight: '500' }}>
                                                {row.component}
                                                {row.sellingPrice > 0 && (
                                                    <span style={{ display: 'block', fontSize: '0.78rem', color: '#0984e3', marginTop: '2px' }}>
                                                        ${parseFloat(row.sellingPrice).toFixed(2)}
                                                    </span>
                                                )}
                                            </td>
                                            <td style={{ padding: '14px 8px', textAlign: 'center', color: '#4a5568' }}>{row.quantity}</td>
                                            <td style={{ padding: '14px 8px', textAlign: 'center' }}><StageIcon value={row.stockVerification} /></td>
                                            <td style={{ padding: '14px 8px', textAlign: 'center' }}><StageIcon value={row.pricingConfirmation} /></td>
                                            <td style={{ padding: '14px 8px', textAlign: 'center' }}><StageIcon value={row.packagingPrep} /></td>
                                            <td style={{ padding: '14px 8px', textAlign: 'center' }}><StageIcon value={row.finalApproval} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div style={{
                            marginTop: '24px', padding: '14px 18px', background: '#f0f9f6',
                            borderRadius: '8px', border: '1px solid #9ae6b4',
                            fontSize: '0.85rem', color: '#276749'
                        }}>
                            <strong>Questions about your order?</strong> Message us on WhatsApp with your Order ID:{' '}
                            <a
                                href={'https://wa.me/263780114134?text=Hi, I have a question about Order ID: ' + firstRow.orderId}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#25D366', fontWeight: '600' }}
                            >
                                Contact RC Forge
                            </a>
                        </div>

                    </div>
                )}

                <div style={{ textAlign: 'center', marginTop: '24px' }}>
                    <a href="/" style={{
                        color: '#4d9db3', fontWeight: '600', textDecoration: 'none',
                        fontSize: '0.95rem'
                    }}>
                        Back to Shop
                    </a>
                </div>

            </div>

            <SharedFooter />
        </div>
    );
}