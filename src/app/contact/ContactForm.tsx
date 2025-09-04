'use client';

import { useState } from 'react';

export default function ConactForm () {
    const [sent, setSent] = useState(false);

    function onSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSent(true);
    }

    return !sent ? (
        <form onSubmit={onSubmit} style={{ maxWidth: 580 }}>
            <div style={{ display: 'grid', gap: 12 }}>
                <label>
                    <span>Name</span>
                    <input required name="name" placeholder="Jane Doe" style={inputStyle} />
                </label>
                <label>
                    <span>Email</span>
                    <input required type="email" name="email" placeholder="jane@example.com" style={inputStyle} />
                </label>
                <label>
                    <span>Message</span>
                    <textarea required name="message" rows={5} placeholder="How can we help?" style={inputStyle} />
                </label>
                <button className="btn" type="submit">Send Message</button>
            </div>
        </form>
    ) : (
        <div className="card" style={{ maxWidth: 580 }}>
            <div className="p">
                <h3 style={{ marginTop: 0 }}>Thanks!</h3>
                <p style={{ marginBottom: 0 }}>Your message has been received. This is a demo form for showcase purposes.</p>
            </div>
        </div>
    )
}

const inputStyle: React.CSSProperties = {
    width: '100%',
    display: 'block',
    marginTop: 6,
    padding: '12px 14px',
    borderRadius: 12,
    border: '1px solid var(--border)',
    outline: 'none',
    font: 'inherit',
    background: 'white',
    color: 'inherit',
    boxShadow: '0 1px 0 rgba(2,8,23,.02)',
};
