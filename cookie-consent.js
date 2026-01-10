// Simple Cookie Consent Banner
(function() {
    'use strict';
    
    // Check if user has already consented
    if (localStorage.getItem('cookie_consent') === 'accepted') {
        return;
    }
    
    // Create banner HTML
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
        <div style="
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #2C3E50;
            color: #ECF0F1;
            padding: 20px;
            box-shadow: 0 -4px 12px rgba(0,0,0,0.15);
            z-index: 9999;
            font-family: 'Newsreader', serif;
        ">
            <div style="
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
            ">
                <div style="flex: 1; min-width: 280px;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.5;">
                        Vi bruger kun nødvendige cookies til at forbedre din oplevelse. 
                        <a href="juridisk.html" style="color: #A8C4D0; text-decoration: underline;">Læs mere</a>
                    </p>
                </div>
                <div style="display: flex; gap: 12px;">
                    <button id="cookie-accept" style="
                        background: #ECF0F1;
                        color: #2C3E50;
                        border: none;
                        padding: 12px 24px;
                        border-radius: 4px;
                        font-size: 16px;
                        cursor: pointer;
                        font-family: 'IBM Plex Mono', monospace;
                        font-weight: 500;
                    ">
                        Acceptér
                    </button>
                    <button id="cookie-decline" style="
                        background: transparent;
                        color: #ECF0F1;
                        border: 2px solid #ECF0F1;
                        padding: 12px 24px;
                        border-radius: 4px;
                        font-size: 16px;
                        cursor: pointer;
                        font-family: 'IBM Plex Mono', monospace;
                    ">
                        Afvis
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add banner to page
    document.body.appendChild(banner);
    
    // Accept button
    document.getElementById('cookie-accept').addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'accepted');
        banner.remove();
    });
    
    // Decline button
    document.getElementById('cookie-decline').addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'declined');
        banner.remove();
    });
})();