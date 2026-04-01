import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState} from 'react';
import './App.css';

function App() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    if (!to || !subject || !body) {
      setStatus('Please fill in To, Subject, and Body.');
      return;
    }

    setLoading(true);
    setStatus('Sending...');
    setPreviewUrl('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          to,
          subject,
          text: body,
          html: `<p>${body.replace(/\n/g, '<br>')}</p>`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setStatus('Email sent successfully!');
      setPreviewUrl(data.result?.previewUrl || '');
    } catch (error) {
      console.error('Send email error', error);
      setStatus(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="home">
        <header className="home-header">
          <h1>Email Test Form</h1>
          <Routes>
            <Route
              path="/"
              element={
                <div style={{maxWidth: 600, margin: '0 auto', textAlign: 'left'}}>
                  <label>
                    To:
                    <input
                      type="email"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      placeholder="recipient@example.com"
                      style={{width: '100%', marginTop: 4, marginBottom: 12}}
                    />
                  </label>

                  <label>
                    Subject:
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Email subject"
                      style={{width: '100%', marginTop: 4, marginBottom: 12}}
                    />
                  </label>

                  <label>
                    Body:
                    <textarea
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      placeholder="Type the message body here..."
                      rows={8}
                      style={{width: '100%', marginTop: 4, marginBottom: 12}}
                    />
                  </label>

                  <button onClick={sendEmail} disabled={loading} style={{padding: '8px 16px'}}>
                    {loading ? 'Sending...' : 'Send Email'}
                  </button>

                  {status && (
                    <div style={{marginTop: 12, color: status.startsWith('Error') ? 'red' : 'green'}}>{status}</div>
                  )}

                  {previewUrl && (
                    <div style={{marginTop: 8}}>
                      Preview: <a href={previewUrl} target="_blank" rel="noreferrer">{previewUrl}</a>
                    </div>
                  )}
                </div>
              }
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
