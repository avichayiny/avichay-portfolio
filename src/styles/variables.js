import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #ffffff; /* רקע ראשי לבן נקי */
    --navy: #f8fafc; /* רקע משני טיפה אפרפר להפרדה בין אזורים */
    --light-navy: #f1f5f9; /* כרטיסיות מודגשות */
    --lightest-navy: #e2e8f0; /* קווי מתאר */
    --navy-shadow: rgba(0, 0, 0, 0.08); /* צל עדין מאוד שמתאים לרקע לבן */
    
    /* צבעי הטקסט - הפוכים כדי שיהיו בולטים על לבן */
    --dark-slate: #64748b; /* טקסט חלש/הערות */
    --slate: #475569; /* טקסט רגיל של פסקאות */
    --light-slate: #334155; /* כותרות משנה */
    --lightest-slate: #1e293b; /* כותרות בולטות */
    --white: #0f172a; /* כותרות ראשיות (למרות השם white, זה עכשיו שחור חזק) */
    
    /* צבעי ההדגשה */
    --green: #2563eb; /* כחול רויאל במקום הירוק */
    --green-tint: rgba(37, 99, 235, 0.08); /* רקע הכפתור כשמעבירים עליו עכבר */
    --pink: #db2777;
    --blue: #0284c7;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
