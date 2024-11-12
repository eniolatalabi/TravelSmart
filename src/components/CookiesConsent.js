import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the cookie consent has already been given
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true); // Show banner if no consent is found
    }
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 }); // Cookie expires in 365 days
    setShowBanner(false); // Hide banner after accepting cookies
  };

  return (
    showBanner && (
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-dark text-white py-4 px-6 text-center">
        <p>
          We use cookies to improve your experience. By using our website, you agree to our 
          <a href="/privacy" className="underline"> privacy policy</a>.
        </p>
        <button 
          onClick={handleAcceptCookies}
          className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
        >
          Accept Cookies
        </button>
      </div>
    )
  );
}
