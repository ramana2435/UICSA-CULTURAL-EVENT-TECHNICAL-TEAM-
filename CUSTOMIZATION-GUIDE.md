# 🎨 Customization Guide

## How to Customize Your Cultural Day 2026 Website

This guide explains how to customize various aspects of the website to match your preferences.

---

## 📝 1. BASIC CONFIGURATION

### **Edit Event Information**

Open `config.js` and modify:

```javascript
const CULTURAL_CONFIG = {
    // Change university name
    universityName: "Guru Nanak University",
    
    // Change location
    location: "Hyderabad",
    
    // Change event name
    eventName: "Cultural Day 2026",
    
    // Change event date and time for countdown
    // Format: YYYY-MM-DDTHH:MM:SS
    eventDate: "2026-10-15T09:00:00",
    
    // Change display format
    eventDateDisplay: "15 OCTOBER 2026",
    
    // Change tagline
    tagline: "Celebrating Talent, Tradition & Togetherness",
};
```

---

## 🎭 2. CUSTOMIZE QUOTES

### **Edit Cultural Quotes**

In `config.js`, modify the `quotes` array:

```javascript
quotes: [
    "Culture is the thread that connects us.",
    "Celebrate diversity. Celebrate talent. Celebrate togetherness.",
    "Every performance tells a story.",
    "Add your own quote here!",
    "Another custom quote...",
    // Add as many as you want
]
```

### **Change Quote Timing**

```javascript
// Change how long each quote displays (in milliseconds)
quoteInterval: 5000, // 5 seconds (default)
// Change to: 8000 for 8 seconds, 3000 for 3 seconds, etc.
```

---

## 📅 3. UPDATE EVENT SCHEDULE

### **Edit Schedule Times and Events**

In `config.js`, modify the `schedule` array:

```javascript
schedule: [
    {
        time: "09:00 AM",
        title: "Opening Ceremony",
        description: "Grand inauguration of Cultural Day 2026"
    },
    {
        time: "10:30 AM",
        title: "Your Custom Event",
        description: "Your custom description"
    },
    // Add more events...
    {
        time: "06:00 PM",
        title: "Closing Ceremony",
        description: "Awards and memorable conclusion"
    }
]
```

---

## 🎨 4. CHANGE COLORS

### **Edit Color Scheme**

Open `style.css` and find the `:root` section at the top:

```css
:root {
    /* Primary Colors */
    --navy: #1a237e;        /* Dark blue */
    --maroon: #8b1538;      /* Deep red */
    --gold: #ffd700;        /* Gold */
    --purple: #6a1b9a;      /* Purple */
    --cream: #fff8e7;       /* Light cream */
    
    /* Change any color by replacing the hex code */
    /* Example: --navy: #0000ff; for pure blue */
}
```

### **Popular Color Combinations:**

**Traditional Indian:**
```css
--navy: #8b0000;        /* Dark red */
--maroon: #ff6347;      /* Tomato red */
--gold: #ffa500;        /* Orange */
--purple: #4b0082;      /* Indigo */
```

**Modern Cool:**
```css
--navy: #1e3a8a;        /* Royal blue */
--maroon: #c026d3;      /* Magenta */
--gold: #fbbf24;        /* Amber */
--purple: #7c3aed;      /* Violet */
```

**Elegant Classic:**
```css
--navy: #1f2937;        /* Dark gray */
--maroon: #991b1b;      /* Deep red */
--gold: #d4af37;        /* Antique gold */
--purple: #6b21a8;      /* Deep purple */
```

---

## 🔤 5. CHANGE FONTS

### **Option 1: Use Different Google Fonts**

1. **Browse Fonts:**
   - Go to [fonts.google.com](https://fonts.google.com)
   - Find fonts you like
   - Click "Select this style"
   - Copy the `<link>` code

2. **Update index.html:**
   - Find the Google Fonts link in `<head>`
   - Replace with your new link:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Your-Font-Name&display=swap" rel="stylesheet">
   ```

3. **Update style.css:**
   ```css
   :root {
       --font-heading: 'Your Heading Font', serif;
       --font-body: 'Your Body Font', sans-serif;
   }
   ```

### **Popular Font Combinations:**

**Elegant:**
```css
--font-heading: 'Playfair Display', serif;
--font-body: 'Poppins', sans-serif;
```

**Modern:**
```css
--font-heading: 'Montserrat', sans-serif;
--font-body: 'Open Sans', sans-serif;
```

**Traditional:**
```css
--font-heading: 'Merriweather', serif;
--font-body: 'Lato', sans-serif;
```

**Contemporary:**
```css
--font-heading: 'Raleway', sans-serif;
--font-body: 'Roboto', sans-serif;
```

---

## 📝 6. EDIT TEXT CONTENT

### **Change About Section**

Open `index.html` and find the "About Cultural Day" section:

```html
<section id="about" class="about-section">
    <div class="container">
        <h2 class="section-title" data-reveal>ABOUT CULTURAL DAY</h2>
        <div class="about-content">
            <div class="about-text" data-reveal>
                <!-- Edit these paragraphs -->
                <p>Your custom text here...</p>
                <!-- Keep the structure, change the content -->
            </div>
        </div>
    </div>
</section>
```

### **Change Section Titles**

Search for `class="section-title"` in `index.html` and edit:

```html
<h2 class="section-title" data-reveal>YOUR CUSTOM TITLE</h2>
```

### **Edit Taglines**

Search for specific taglines and replace:

```html
<p class="hero-tagline">"Your Custom Tagline Here"</p>
```

---

## 🎭 7. CUSTOMIZE HIGHLIGHTS

### **Edit Highlight Cards**

In `index.html`, find the highlights section:

```html
<div class="highlight-card" data-reveal>
    <div class="highlight-icon">🎵</div>  <!-- Change emoji -->
    <h3>MUSIC</h3>                         <!-- Change title -->
    <p>Melodious performances</p>          <!-- Change description -->
</div>
```

### **Add More Highlights:**

Copy an existing highlight card and paste below:

```html
<div class="highlight-card" data-reveal>
    <div class="highlight-icon">🎪</div>
    <h3>YOUR NEW HIGHLIGHT</h3>
    <p>Your description here</p>
</div>
```

---

## 🎬 8. CUSTOMIZE CAMPUS MEMORIES

### **Edit Memory Captions**

In `index.html`, find the memories section:

```html
<div class="memory-card" data-reveal>
    <img src="assets/images/campus1.jpg" alt="Campus description">
    <div class="memory-caption">Campus Life</div>  <!-- Edit caption -->
</div>
```

### **Add More Memory Cards:**

```html
<div class="memory-card" data-reveal>
    <img src="assets/images/your-image.jpg" alt="Description" loading="lazy">
    <div class="memory-caption">Your Caption</div>
</div>
```

---

## 🎯 9. CUSTOMIZE STUDENT TALENT SECTION

### **Edit Talent Categories**

In `index.html`:

```html
<div class="talent-card" data-reveal>
    <div class="talent-icon">🎤</div>     <!-- Change icon -->
    <h3>Singers</h3>                      <!-- Change title -->
    <p>Your description</p>               <!-- Change text -->
</div>
```

### **Add New Talent Category:**

```html
<div class="talent-card" data-reveal>
    <div class="talent-icon">🎸</div>
    <h3>Guitarists</h3>
    <p>Talented string musicians</p>
</div>
```

---

## ⚙️ 10. ANIMATION SETTINGS

### **Disable Animations**

In `config.js`:

```javascript
// Turn off scroll reveal animations
revealOnScroll: false,
```

### **Adjust Animation Speed**

In `style.css`, find transition settings:

```css
:root {
    /* Change animation durations */
    --transition-smooth: all 0.3s ease;  /* Make faster: 0.2s, slower: 0.5s */
    --transition-slow: all 0.5s ease;    /* Make faster: 0.3s, slower: 0.8s */
}
```

### **Disable Specific Animations**

Search for `@keyframes` in `style.css` and comment out:

```css
/* Disable pulse animation
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}
*/
```

---

## 📱 11. MOBILE CUSTOMIZATION

### **Adjust Mobile Font Sizes**

In `style.css`, find the media query:

```css
@media (max-width: 768px) {
    /* Adjust sizes for tablets */
    .hero-title {
        font-size: 2.5rem; /* Change this */
    }
}

@media (max-width: 480px) {
    /* Adjust sizes for phones */
    .hero-title {
        font-size: 2rem; /* Change this */
    }
}
```

---

## 🔧 12. ADVANCED CUSTOMIZATION

### **Change Hero Background**

In `style.css`:

```css
.hero-section {
    background: var(--gradient-primary); /* Change this */
    /* Or use a solid color: */
    /* background: #1a237e; */
    /* Or use an image: */
    /* background-image: url('assets/images/hero-bg.jpg'); */
    /* background-size: cover; */
}
```

### **Adjust Section Spacing**

In `style.css`:

```css
:root {
    --section-padding: 80px 20px; /* Change: 100px 20px for more space */
}
```

### **Change Navigation Background**

In `style.css`:

```css
.navbar {
    background: rgba(26, 35, 126, 0.95); /* Change color and transparency */
}
```

---

## 🎨 13. BUTTON CUSTOMIZATION

### **Change Button Styles**

In `style.css`:

```css
.hero-cta {
    background: var(--gold);        /* Button color */
    color: var(--navy);             /* Text color */
    padding: 18px 45px;             /* Size */
    border-radius: 50px;            /* Roundness (lower = less round) */
    font-size: 1.1rem;              /* Text size */
}
```

---

## 📏 14. LAYOUT CUSTOMIZATION

### **Change Grid Columns**

In `style.css`:

```css
.highlights-grid {
    /* Change number of columns: */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /* minmax(250px, 1fr) - make 300px for wider cards */
}
```

### **Adjust Container Width**

In `style.css`:

```css
:root {
    --container-max-width: 1200px; /* Change: 1400px for wider, 1000px for narrower */
}
```

---

## ✅ TESTING YOUR CHANGES

After making changes:

1. **Save all files**
2. **Refresh browser** (Ctrl+Shift+R or Cmd+Shift+R)
3. **Check desktop view**
4. **Check mobile view** (browser DevTools)
5. **Test all functionality**
6. **Verify no errors** (F12 console)

---

## 🔄 BACKUP YOUR CHANGES

Before major customizations:

1. **Make a copy of original files**
2. **Save backups** before editing
3. **Use version control** (Git)
4. **Test changes locally first**

---

## 💡 TIPS

- **Start Small:** Make one change at a time
- **Test Often:** Check after each change
- **Keep Backups:** Save original files
- **Use Comments:** Add notes in your code
- **Be Consistent:** Match existing style
- **Mobile First:** Always test on mobile

---

## 🎓 RESOURCES

**Learn More:**
- [HTML Tutorial](https://www.w3schools.com/html/)
- [CSS Tutorial](https://www.w3schools.com/css/)
- [JavaScript Tutorial](https://www.w3schools.com/js/)
- [Color Picker](https://htmlcolorcodes.com/)
- [Google Fonts](https://fonts.google.com/)
- [Emoji Picker](https://emojipedia.org/)

---

**Happy Customizing! 🎨✨**

Remember: The website is designed to be easily customizable. Don't be afraid to experiment!
