import React, { useState, useMemo, useEffect } from 'react';
import SharedFooter from './SharedFooter';
import WebsiteAdBanner from './assets/WebsiteAdBanner';
import SocialBar from './assets/SocialBar';
import AboutSection from './assets/AboutSection';

// Product catalog now lives in public/data/products.json, managed via the
// Telegram catalog bot (see api/telegram-webhook.js). It's fetched at
// runtime -- see the `products` state and useEffect in the App component.

const componentContacts = [
  { name: "SPARK SYSTEMS", number: "263787374675" },
  { name: "ELECTRIFAI", number: "263776868774" },
  { name: "RC Forge", number: "263780114134" }
];

const gadgetContacts = [
  { name: "RC Forge", number: "263780114134" },
  { name: "OM", number: "263784882920" }
];

// ─── Search Bar Component ─────────────────────────────────────────────────────
// ─── Search Bar Component ─────────────────────────────────────────────────────
function SearchBar({ searchTerm, setSearchTerm, resultCount, totalCount }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto 28px', padding: '0 4px' }
    }>
      {/* Search container */}
      < div style={{
        background: isFocused
          ? 'linear-gradient(135deg, #1a2a3a 0%, #0d1f2d 100%)'
          : 'linear-gradient(135deg, #162533 0%, #0d1a25 100%)',
        borderRadius: '16px',
        padding: '20px 24px',
        boxShadow: isFocused
          ? '0 8px 32px rgba(0, 196, 252, 0.18), 0 2px 8px rgba(0,0,0,0.25)'
          : '0 4px 20px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        border: isFocused ? '1.5px solid rgba(0, 196, 252, 0.45)' : '1.5px solid rgba(255,255,255,0.06)',
      }}>
        {/* Label row */}
        < div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={
              {
                fontSize: '1.15rem',
                fontWeight: '700',
                color: '#e0f4ff',
                letterSpacing: '0.3px'
              }
            }>
              🔍 Search Components
            </span>
            < span style={{
              fontSize: '0.72rem',
              background: 'rgba(0, 196, 252, 0.15)',
              color: '#00c4fc',
              border: '1px solid rgba(0, 196, 252, 0.3)',
              borderRadius: '20px',
              padding: '2px 10px',
              fontWeight: '600',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              {totalCount} items
            </span>
          </div>
          {
            searchTerm && (
              <span style={
                {
                  fontSize: '0.78rem',
                  color: resultCount === 0 ? '#ff7675' : '#55efc4',
                  fontWeight: '600',
                  background: resultCount === 0 ? 'rgba(255, 118, 117, 0.12)' : 'rgba(85, 239, 196, 0.12)',
                  border: `1px solid ${resultCount === 0 ? 'rgba(255,118,117,0.3)' : 'rgba(85,239,196,0.3)'}`,
                  borderRadius: '20px',
                  padding: '3px 12px',
                  transition: 'all 0.2s'
                }
              }>
                {resultCount === 0 ? 'No results' : `${resultCount} found`
                }
              </span>
            )}
        </div>

        {/* Input row */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Search icon */}
          < div style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '1.1rem',
            opacity: isFocused ? 1 : 0.5,
            transition: 'opacity 0.2s',
            pointerEvents: 'none'
          }}>
            🔎
          </div>

          < input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="e.g. Arduino, ESP32, sensor, relay, BMP280, motor driver..."
            style={{
              flex: 1,
              padding: '14px 120px 14px 48px',
              borderRadius: '10px',
              border: isFocused
                ? '1.5px solid rgba(0, 196, 252, 0.6)'
                : '1.5px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.05)',
              color: '#e8f4fd',
              fontSize: '0.98rem',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'all 0.25s ease',
              letterSpacing: '0.2px',
              caretColor: '#00c4fc',
            }}
          />

          {/* Clear button */}
          {
            searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '130px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '26px',
                  height: '26px',
                  cursor: 'pointer',
                  color: '#b2bec3',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                }
                }
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,118,117,0.3)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                title="Clear search"
              >
                ✕
              </button>
            )}

          {/* Search pill button */}
          <button
            onClick={() => { }}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              padding: '8px 18px',
              background: 'linear-gradient(135deg, #0984e3, #00b4d8)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '0.82rem',
              letterSpacing: '0.5px',
              transition: 'opacity 0.2s',
              boxShadow: '0 2px 8px rgba(9,132,227,0.35)'
            }}
          >
            Search
          </button>
        </div>

        {/* Quick filter chips */}
        <div style={{ marginTop: '14px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {
            ['Arduino', 'ESP32', 'Sensor', 'Relay', 'Motor', 'Display', 'Raspberry Pi', 'LoRa', 'Power'].map(tag => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                style={{
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: searchTerm.toLowerCase() === tag.toLowerCase()
                    ? '1.5px solid #00c4fc'
                    : '1.5px solid rgba(255,255,255,0.12)',
                  background: searchTerm.toLowerCase() === tag.toLowerCase()
                    ? 'rgba(0, 196, 252, 0.2)'
                    : 'rgba(255,255,255,0.05)',
                  color: searchTerm.toLowerCase() === tag.toLowerCase() ? '#00c4fc' : '#9ab',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.18s',
                  letterSpacing: '0.3px',
                }}
                onMouseOver={e => {
                  if (searchTerm.toLowerCase() !== tag.toLowerCase()) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#e0f4ff';
                  }
                }}
                onMouseOut={e => {
                  if (searchTerm.toLowerCase() !== tag.toLowerCase()) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = '#9ab';
                  }
                }}
              >
                {tag}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
// ... UNCHANGED — keep your existing SearchBar component exactly as-is here ...


// ─── Custom Component Request Section ─────────────────────────────────────────
let customRowSeq = 0;
function makeEmptyCustomRow() {
  customRowSeq += 1;
  return { rowId: `row-${customRowSeq}`, componentName: '', quantity: 1, notes: '' };
}

function CustomComponentRequest({ onAddCustomToCart }) {
  const [rows, setRows] = useState([makeEmptyCustomRow()]);
  const [justAdded, setJustAdded] = useState(false);

  const updateRow = (rowId, field, value) => {
    setRows(prev => prev.map(r => (r.rowId === rowId ? { ...r, [field]: value } : r)));
  };

  const addRow = () => setRows(prev => [...prev, makeEmptyCustomRow()]);

  const removeRow = (rowId) => {
    setRows(prev => (prev.length === 1 ? prev : prev.filter(r => r.rowId !== rowId)));
  };

  const handleAddToOrder = () => {
    const validRows = rows
      .map(r => ({ ...r, componentName: r.componentName.trim() }))
      .filter(r => r.componentName !== '' && Number(r.quantity) > 0);

    if (validRows.length === 0) {
      alert('Please enter at least one component name and quantity.');
      return;
    }

    onAddCustomToCart(validRows);
    setRows([makeEmptyCustomRow()]);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2500);
  };

  return (
    <div style={{
      maxWidth: '1400px', margin: '0 auto 28px', background: '#fff',
      borderRadius: '10px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      border: '2px dashed #44c4fc'
    }}>
      <h2 style={{ margin: '0 0 6px', color: '#2d3436' }}> Can't Find Your Component?</h2>
      <p style={{ color: '#636e72', marginTop: 0, marginBottom: '18px' }}>
        Request any electronic component, module, IC, sensor, connector, board, tool, or accessory
        not currently listed in our catalog. Add it directly to your order below — no need to leave the site.
      </p>

      {rows.map((row, index) => (
        <div key={row.rowId} style={{
          display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'flex-start',
          marginBottom: '12px', paddingBottom: '12px',
          borderBottom: index < rows.length - 1 ? '1px solid #f0f0f0' : 'none'
        }}>
          <div style={{ flex: 3, minWidth: '220px' }}>
            <label style={{ fontSize: '0.78rem', fontWeight: 'bold', color: '#2d3436', display: 'block', marginBottom: '4px' }}>
              Component Name
            </label>
            <input
              type="text"
              value={row.componentName}
              onChange={(e) => updateRow(row.rowId, 'componentName', e.target.value)}
              placeholder="e.g. ADS1115 ADC Module"
              style={{ width: '100%', padding: '8px 10px', borderRadius: '5px', border: '1px solid #dfe6e9', fontSize: '0.9rem', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '90px' }}>
            <label style={{ fontSize: '0.78rem', fontWeight: 'bold', color: '#2d3436', display: 'block', marginBottom: '4px' }}>
              Quantity
            </label>
            <input
              type="number"
              min="1"
              value={row.quantity}
              onChange={(e) => updateRow(row.rowId, 'quantity', e.target.value)}
              style={{ width: '100%', padding: '8px 10px', borderRadius: '5px', border: '1px solid #dfe6e9', fontSize: '0.9rem', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ flex: 3, minWidth: '220px' }}>
            <label style={{ fontSize: '0.78rem', fontWeight: 'bold', color: '#2d3436', display: 'block', marginBottom: '4px' }}>
              Notes (optional)
            </label>
            <input
              type="text"
              value={row.notes}
              onChange={(e) => updateRow(row.rowId, 'notes', e.target.value)}
              placeholder="e.g. Original Texas Instruments version preferred"
              style={{ width: '100%', padding: '8px 10px', borderRadius: '5px', border: '1px solid #dfe6e9', fontSize: '0.9rem', boxSizing: 'border-box' }}
            />
          </div>
          <button
            onClick={() => removeRow(row.rowId)}
            disabled={rows.length === 1}
            title="Remove this row"
            style={{
              marginTop: '22px', background: rows.length === 1 ? '#dfe6e9' : '#ff7675',
              color: '#fff', border: 'none', borderRadius: '50%', width: '28px', height: '28px',
              cursor: rows.length === 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold'
            }}
          >✕</button>
        </div>
      ))}

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
        <button
          onClick={addRow}
          style={{
            padding: '10px 18px', background: '#fff', color: '#0984e3',
            border: '1.5px solid #0984e3', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold'
          }}
        >
          + Add Another Component
        </button>
        <button
          onClick={handleAddToOrder}
          style={{
            padding: '10px 18px', background: justAdded ? '#00b894' : '#2d3436', color: '#fff',
            border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold',
            transition: 'background 0.2s'
          }}
        >
          {justAdded ? '✓ Added to Order' : 'Add Custom Component(s) to Order'}
        </button>
      </div>
      <p style={{ fontSize: '0.78rem', color: '#b2bec3', marginTop: '10px', marginBottom: 0 }}>
        Custom components are priced after our team reviews availability — they'll show as "Enquire for price" in your cart.
      </p>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
function App() {
  const [cart, setCart] = useState([]);
  const [orderNotes, setOrderNotes] = useState('');
  const [componentContactIndex, setComponentContactIndex] = useState(() => {
    const saved = localStorage.getItem('componentContactIndex');
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const [customerName, setCustomerName] = useState('');
  const [customerWhatsApp, setCustomerWhatsApp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(null);
  const [gadgetDescription, setGadgetDescription] = useState('');
  const [gadgetContactIndex, setGadgetContactIndex] = useState(() => {
    const saved = localStorage.getItem('gadgetContactIndex');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  // ── Search state ──
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // ── Product catalog (loaded dynamically from /data/products.json,
  //    which the Telegram catalog bot keeps up to date via GitHub) ──
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function loadProducts() {
      setProductsLoading(true);
      setProductsError(null);
      try {
        // cache-bust so a fresh Telegram-driven update is picked up
        // immediately rather than served from an old cached copy
        const res = await fetch(`/data/products.json?t=${Date.now()}`);
        if (!res.ok) throw new Error(`Failed to load catalog (${res.status})`);
        const data = await res.json();
        if (cancelled) return;
        const normalized = data.map((p) => ({
          ...p,
          // keep both new-schema and legacy field names so the rest of
          // the UI (product cards etc.) doesn't need to care which it gets
          img: p.image || p.img || '',
          details: p.description || p.details || '',
          stock: typeof p.stock === 'number' ? p.stock : null,
          available: p.available !== undefined ? p.available : true,
        }));
        setProducts(normalized);
      } catch (err) {
        if (!cancelled) setProductsError(err.message || 'Could not load the catalog.');
      } finally {
        if (!cancelled) setProductsLoading(false);
      }
    }
    loadProducts();
    return () => { cancelled = true; };
  }, []);

  // ── Categories derived from the live catalog ──
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return ['All', ...Array.from(set).sort()];
  }, [products]);

  // ── Filtered products (search + category) ──
  const filteredProducts = useMemo(() => {
    let list = products;
    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower) ||
        (p.details && p.details.toLowerCase().includes(lower)) ||
        (p.sku && p.sku.toLowerCase().includes(lower))
      );
    }
    return list;
  }, [products, searchTerm, selectedCategory]);

  const addToCart = (product) => {
    if (product.stock !== null && product.stock <= 0) return; // out of stock, guard against stray calls
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ── NEW: add validated custom component rows into the SAME cart ──
  const addCustomComponentsToCart = (validRows) => {
    setCart((prevCart) => {
      const newItems = validRows.map((row, idx) => ({
        id: `custom-${Date.now()}-${idx}`,
        name: row.componentName,
        price: 0,
        quantity: Number(row.quantity),
        notes: row.notes ? row.notes.trim() : '',
        isCustom: true,
        category: 'Custom Request',
      }));
      return [...prevCart, ...newItems];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const sendComponentOrder = async () => {
    if (customerName.trim() === '') { alert('Please enter your name before booking.'); return; }
    if (customerWhatsApp.trim() === '') { alert('Please enter your WhatsApp number before booking.'); return; }
    setIsSubmitting(true);
    const orderData = {
      token: import.meta.env.VITE_ORDER_TOKEN,
      customerName: customerName.trim(),
      whatsapp: customerWhatsApp.trim(),
      // Custom items carry their notes through; doPost() folds notes into column E
      // since no new sheet columns are allowed.
      items: cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        unitPrice: item.price,
        notes: item.isCustom && item.notes ? item.notes : undefined,
        isCustom: !!item.isCustom,
      })),
      totalPrice: parseFloat(calculateTotal())
    };
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzQmvVJDWTwDrdfwEiCSR--GsM6fpdoObVmRJU7ZDd84o1zv8_Planz1sFpX8HtoIe0FQ/exec',
        { method: 'POST', body: JSON.stringify(orderData), redirect: 'follow' }
      );
      const result = await response.json();
      if (result.success) {
        const currentContact = componentContacts[componentContactIndex];
        setOrderConfirmation({ orderId: result.orderId, contact: currentContact, total: calculateTotal() });
        const nextIndex = (componentContactIndex + 1) % componentContacts.length;
        setComponentContactIndex(nextIndex);
        localStorage.setItem('componentContactIndex', nextIndex);
      } else {
        alert('Something went wrong registering your order. Please try again.');
        console.error(result.error);
      }
    } catch (err) {
      alert('Connection error. Please check your internet and try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const confirmAndOpenWhatsApp = () => {
    if (!orderConfirmation) return;
    const { orderId, contact, total } = orderConfirmation;

    const catalogItems = cart.filter(item => !item.isCustom);
    const customItems = cart.filter(item => item.isCustom);

    let message = ` *New Component Order from RC Forge Platform*\n\n`;
    message += ` *Order ID:* ${orderId}\n`;
    message += ` *Name:* ${customerName}\n`;
    message += ` *WhatsApp:* ${customerWhatsApp}\n\n`;
    message += `I would like to place an order for the following items:\n\n`;

    if (catalogItems.length > 0) {
      message += `*CATALOG ITEMS:*\n`;
      catalogItems.forEach(item => {
        message += `• *${item.name}* x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
      });
    }

    if (customItems.length > 0) {
      message += `\n*CUSTOM REQUESTED ITEMS (pricing to be confirmed):*\n`;
      customItems.forEach(item => {
        message += `• *${item.name}* x${item.quantity}`;
        if (item.notes) message += ` — _${item.notes}_`;
        message += `\n`;
      });
    }

    message += `\n *Total Amount:* $${total}`;
    if (customItems.length > 0) {
      message += ` _(custom items priced after review)_`;
    }
    if (orderNotes.trim() !== '') message += `\n\n *Notes:* ${orderNotes.trim()}`;
    message += `\n\n*Order sent to:* ${contact.name}`;

    window.open(`https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`, '_blank');
    setCart([]); setOrderNotes(''); setCustomerName(''); setCustomerWhatsApp(''); setOrderConfirmation(null);
  };

  const sendGadgetOrder = () => {
    if (gadgetDescription.trim() === "") { alert("Please describe the gadget you need (laptop, phone, battery, etc.)"); return; }
    const currentContact = gadgetContacts[gadgetContactIndex];
    let message = " *New Gadget Order from RC Forge Platform* \n\nI would like to order the following gadget(s):\n\n";
    message += `${gadgetDescription.trim()}\n\n`;
    message += ` *Order sent to:* ${currentContact.name}`;
    window.open(`https://wa.me/${currentContact.number}?text=${encodeURIComponent(message)}`, '_blank');
    const nextIndex = (gadgetContactIndex + 1) % gadgetContacts.length;
    setGadgetContactIndex(nextIndex);
    localStorage.setItem('gadgetContactIndex', nextIndex);
  };

  return (
    <div style={{ fontFamily: '"Inter", sans-serif', background: '#f5f6fa', minHeight: '100vh', padding: '20px' }}>
      <SocialBar />

      {/* Header */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '20px', marginBottom: '40px', padding: '20px',
        background: '#4d9db3', color: '#fff', borderRadius: '10px'
      }}>
        <img src="RCForgelogo.png" alt="RC Forge Logo"
          style={{ height: '60px', width: 'auto', borderRadius: '5px' }}
          onError={(e) => { e.target.style.display = 'none'; }} />
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ margin: 0, letterSpacing: '2px' }}>RC FORGE</h1>
          <p style={{ margin: '5px 0 0', color: '#00cec9' }}>Precision Electronic Components</p>
        </div>
      </header>

      <WebsiteAdBanner />
      <AboutSection />

      {/* ── SEARCH BAR ── */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        resultCount={filteredProducts.length}
        totalCount={products.length}
      />

      {/* ── CATEGORY FILTER ── */}
      {categories.length > 1 && (
        <div style={{
          maxWidth: '1400px', margin: '0 auto 20px', padding: '0 4px',
          display: 'flex', gap: '8px', flexWrap: 'wrap'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                border: selectedCategory === cat ? '1.5px solid #0984e3' : '1.5px solid #dfe6e9',
                background: selectedCategory === cat ? '#0984e3' : '#fff',
                color: selectedCategory === cat ? '#fff' : '#2d3436',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* ── CUSTOM COMPONENT REQUEST ── */}
      <CustomComponentRequest onAddCustomToCart={addCustomComponentsToCart} />

      <main style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '20px', flexDirection: 'row', flexWrap: 'wrap' }}>

        {/* Products Grid */}
        <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
          {productsLoading ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: '#636e72' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>⏳</div>
              <p>Loading catalog…</p>
            </div>
          ) : productsError ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: '#d63031' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>⚠️</div>
              <p>{productsError}</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div style={{
              gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px',
              color: '#636e72'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
              <h3 style={{ margin: '0 0 8px', color: '#2d3436' }}>No components found</h3>
              <p style={{ margin: 0 }}>
                No results for <strong>"{searchTerm}"</strong>. Try a different keyword, browse a category,
                or use the "Can't Find Your Component?" section above to request it directly.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                style={{
                  marginTop: '18px', padding: '10px 24px', background: '#0984e3',
                  color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer',
                  fontWeight: '600', fontSize: '0.9rem'
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredProducts.map((product, index) => {
              const isTrackedStock = product.stock !== null && product.stock !== undefined;
              const outOfStock = isTrackedStock && product.stock <= 0;
              const lowStock = isTrackedStock && product.stock > 0 && product.stock <= 5;
              return (
              <div key={product.sku || index} style={{
                background: '#fff', borderRadius: '10px', padding: '15px',
                textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                opacity: outOfStock ? 0.7 : 1
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
                    <span style={{
                      fontSize: '0.7rem', textTransform: 'uppercase', color: '#636e72',
                      background: '#44c4fc', padding: '3px 8px', borderRadius: '12px',
                      display: 'inline-block'
                    }}>
                      {product.category}
                    </span>
                    {isTrackedStock && (
                      <span style={{
                        fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: '12px',
                        display: 'inline-block',
                        color: outOfStock ? '#d63031' : lowStock ? '#e17055' : '#00b894',
                        background: outOfStock ? 'rgba(214,48,49,0.12)' : lowStock ? 'rgba(225,112,85,0.12)' : 'rgba(0,184,148,0.12)'
                      }}>
                        {outOfStock ? 'Out of Stock' : lowStock ? `Low Stock (${product.stock})` : `In Stock (${product.stock})`}
                      </span>
                    )}
                  </div>
                  <div style={{
                    height: '150px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', background: 'hsl(189, 92%, 47%)',
                    borderRadius: '8px', overflow: 'hidden'
                  }}>
                    <img src={product.img} alt={product.name}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = '📦 Image Ready'; }} />
                  </div>
                  <h3 style={{ fontSize: '1rem', margin: '15px 0 5px', color: '#2d3436' }}>{product.name}</h3>
                  {product.details && (
                    <p style={{ fontSize: '0.8rem', color: '#b2bec3', margin: '0 0 10px', minHeight: '35px' }}>{product.details}</p>
                  )}
                </div>
                <div>
                  <p style={{ fontWeight: 'bold', color: '#0984e3', margin: '10px 0 15px', fontSize: '1.2rem' }}>
                    {product.price === 0.00 ? (
                      <span style={{ fontSize: '0.85rem', color: '#636e72', fontWeight: '600' }}>Enquire for price</span>
                    ) : `$${product.price.toFixed(2)}`}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    disabled={outOfStock}
                    style={{
                      width: '100%', padding: '10px',
                      background: outOfStock ? '#b2bec3' : '#2d3436',
                      color: '#fff', border: 'none', borderRadius: '5px',
                      cursor: outOfStock ? 'not-allowed' : 'pointer',
                      fontWeight: 'bold', transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => { if (!outOfStock) e.target.style.background = '#0984e3'; }}
                    onMouseOut={(e) => { if (!outOfStock) e.target.style.background = '#2d3436'; }}
                  >
                    {outOfStock ? 'Out of Stock' : 'Add to Order'}
                  </button>
                </div>
              </div>
              );
            })
          )}
        </div>

        {/* Sidebar Cart */}
        <div style={{
          flex: 1, minWidth: '320px', background: '#f7f8fa', padding: '20px',
          borderRadius: '10px', height: 'fit-content',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)', position: 'sticky', top: '20px'
        }}>
          <h2 style={{ marginTop: 0, borderBottom: '2px solid #e0e5f8', paddingBottom: '10px' }}>Your Order</h2>
          {cart.length === 0 ? (
            <p style={{ color: '#040607' }}>No items selected yet.</p>
          ) : (
            <>
              <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '5px' }}>
                {cart.map((item, index) => (
                  <div key={`cart-${index}`} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                    marginBottom: '10px', fontSize: '0.9rem',
                    borderBottom: '1px solid #09090a', paddingBottom: '5px'
                  }}>
                    <span style={{ flex: 2, paddingRight: '10px' }}>
                      {item.isCustom && (
                        <span style={{
                          display: 'inline-block', fontSize: '0.65rem', fontWeight: 'bold',
                          color: '#0984e3', background: 'rgba(9,132,227,0.12)',
                          border: '1px solid rgba(9,132,227,0.3)', borderRadius: '10px',
                          padding: '1px 7px', marginBottom: '3px', textTransform: 'uppercase'
                        }}>
                          Custom Component
                        </span>
                      )}
                      <br />
                      {item.name} <br />
                      <small style={{ color: '#18b6fa' }}>x{item.quantity}</small>
                      {item.isCustom && item.notes && (
                        <>
                          <br />
                          <small style={{ color: '#636e72', fontStyle: 'italic' }}>Note: {item.notes}</small>
                        </>
                      )}
                    </span>
                    <span style={{ fontWeight: 'bold', flex: 1, textAlign: 'right', marginRight: '10px' }}>
                      {item.isCustom
                        ? <span style={{ fontSize: '0.75rem', color: '#636e72' }}>Enquire</span>
                        : `$${(item.price * item.quantity).toFixed(2)}`}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: '#ff7675', color: '#fff', border: 'none', borderRadius: '50%',
                        width: '22px', height: '22px', cursor: 'pointer', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold'
                      }}
                      title="Remove from cart"
                    >✕</button>
                  </div>
                ))}
              </div>

              {/* Customer Details */}
              <div style={{ marginTop: '15px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#2d3436', display: 'block', marginBottom: '5px' }}>
                  Your Name:
                </label>
                <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your full name"
                  style={{ width: '100%', padding: '8px 10px', borderRadius: '5px', border: '1px solid #dfe6e9', fontSize: '0.9rem', boxSizing: 'border-box', marginBottom: '10px' }} />
                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#2d3436', display: 'block', marginBottom: '5px' }}>
                  Your WhatsApp Number:
                </label>
                <input type="tel" value={customerWhatsApp} onChange={(e) => setCustomerWhatsApp(e.target.value)}
                  placeholder="e.g. 263780114134"
                  style={{ width: '100%', padding: '8px 10px', borderRadius: '5px', border: '1px solid #dfe6e9', fontSize: '0.9rem', boxSizing: 'border-box' }} />
              </div>

              {/* Order Notes */}
              <div style={{ marginTop: '15px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#2d3436', display: 'block', marginBottom: '5px' }}>Order Notes:</label>
                <textarea value={orderNotes} onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Write specific instructions here: IMPORTANT (university name/location), OPTIONAL (e.g., resistor values, etc)..."
                  style={{ width: '100%', minHeight: '80px', borderRadius: '5px', border: '1px solid #dfe6e9', padding: '10px', fontFamily: 'inherit', fontSize: '0.9rem', boxSizing: 'border-box', resize: 'vertical' }} />
              </div>

              <div style={{ borderTop: '2px solid #f5f6fa', marginTop: '15px', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
                <span>Total:</span>
                <span style={{ color: '#0984e3' }}>
                  ${calculateTotal()}
                  {cart.some(i => i.isCustom) && (
                    <span style={{ fontSize: '0.7rem', color: '#636e72', display: 'block', textAlign: 'right', fontWeight: 'normal' }}>
                      + custom items (priced after review)
                    </span>
                  )}
                </span>
              </div>

              {/* Consent Checkbox */}
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <input
                  type="checkbox"
                  id="consent"
                  checked={consentGiven}
                  onChange={(e) => setConsentGiven(e.target.checked)}
                  style={{ marginTop: '3px', cursor: 'pointer' }}
                />
                <label htmlFor="consent" style={{ fontSize: '0.8rem', color: '#636e72', cursor: 'pointer', lineHeight: '1.5' }}>
                  I agree to the{' '}
                  <a href="/terms" target="_blank" style={{ color: '#4d9db3' }}>Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy" target="_blank" style={{ color: '#4d9db3' }}>Privacy Policy</a>.
                  I consent to RC Forge storing my name and WhatsApp number to process this order.
                </label>
              </div>

              <button
                onClick={sendComponentOrder}
                disabled={isSubmitting || !consentGiven}
                style={{
                  width: '100%', marginTop: '12px', padding: '15px',
                  background: isSubmitting || !consentGiven ? '#b2bec3' : '#00b894',
                  color: '#fff', border: 'none', borderRadius: '5px',
                  cursor: isSubmitting || !consentGiven ? 'not-allowed' : 'pointer',
                  fontWeight: 'bold', fontSize: '1.1rem'
                }}
              >
                {isSubmitting ? 'Registering Order...' : 'Book via WhatsApp'}
              </button>
            </>
          )}
        </div>
      </main>

      {/* Gadget Order Section */}
      <div style={{ maxWidth: '1400px', margin: '40px auto 0', background: '#fff', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <h2 style={{ margin: '0 0 10px', color: '#2d3436', borderBottom: '2px solid #44c4fc', display: 'inline-block', paddingBottom: '5px' }}>
          Gadget Orders (Laptops, Phones, Batteries, Phone Parts)
        </h2>
        <p style={{ color: '#636e72', marginBottom: '20px' }}>
          Describe the gadget(s) you need. Orders will be rotated between RC Forge and OM.
        </p>
        <textarea value={gadgetDescription} onChange={(e) => setGadgetDescription(e.target.value)}
          placeholder="Example: iPhone 12 Pro Max 256GB (Gold) – New, or Laptop battery for Dell XPS 15 – 6-cell"
          style={{ width: '100%', minHeight: '120px', borderRadius: '5px', border: '1px solid #dfe6e9', padding: '10px', fontFamily: 'inherit', fontSize: '1rem', boxSizing: 'border-box', resize: 'vertical', marginBottom: '20px' }} />
        <button onClick={sendGadgetOrder}
          style={{ padding: '12px 24px', background: '#0984e3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'background 0.2s' }}
          onMouseOver={(e) => e.target.style.background = '#0652dd'}
          onMouseOut={(e) => e.target.style.background = '#0984e3'}>
          Send Gadget Inquiry via WhatsApp
        </button>
      </div>

      {/* Order Confirmation Modal */}
      {orderConfirmation && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', boxSizing: 'border-box' }}>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '30px', maxWidth: '480px', width: '100%', textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>✅</div>
            <h2 style={{ color: '#00b894', margin: '0 0 10px' }}>Order Registered!</h2>
            <p style={{ color: '#636e72', marginBottom: '20px' }}>Your order has been logged in our system. Save your Order ID to track your order over WhatsApp.</p>
            <div style={{ background: '#f0f9f6', border: '2px dashed #00b894', borderRadius: '8px', padding: '15px', marginBottom: '20px' }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#636e72' }}>Your Order ID</p>
              <p style={{ margin: '5px 0 0', fontSize: '1.6rem', fontWeight: 'bold', color: '#2d3436', letterSpacing: '2px' }}>{orderConfirmation.orderId}</p>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#636e72', marginBottom: '25px' }}>
              📌 <strong>Keep this ID.</strong> Quote it on WhatsApp so the team can find your order instantly.
            </p>
            <button onClick={confirmAndOpenWhatsApp}
              style={{ width: '100%', padding: '14px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px' }}>
              💬 Open WhatsApp to Confirm Order
            </button>
            <button onClick={() => setOrderConfirmation(null)}
              style={{ width: '100%', padding: '10px', background: 'transparent', color: '#b2bec3', border: '1px solid #dfe6e9', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem' }}>
              Go Back
            </button>
          </div>
        </div>
      )}

      <SharedFooter />
    </div>
  );
}

export default App;