# 🎉 GURU NANAK UNIVERSITY - CULTURAL DAY 2026

A premium, mobile-responsive frontend-only website for Guru Nanak University Hyderabad's Cultural Day celebration on **15 October 2026**.

---

## 📁 PROJECT STRUCTURE

```
cultural-day-2026/
│
├── index.html          # Main HTML file
├── style.css           # All styles and responsive design
├── script.js           # JavaScript functionality
├── config.js           # Configuration file (edit event details here)
├── README.md           # This file
│
└── assets/
    ├── images/         # University logos and campus photos
    │   ├── university-logo.png
    │   ├── cultural-logo.png
    │   ├── campus1.jpg
    │   ├── campus2.jpg
    │   └── ... (add more campus photos)
    │
    ├── gallery/        # Cultural event photographs
    │   └── ... (add cultural photos here)
    │
    ├── videos/         # Cultural event videos
    │   └── ... (add videos here)
    │
    └── music/          # Background music and welcome audio
        ├── cultural-music.mp3
        └── welcome.mp3
```

---

## 🚀 QUICK START

### 1. **Open the Website**
   - Simply open `index.html` in any modern web browser
   - No installation, build process, or server required!

### 2. **Add Your Content**
   - Place university logo at: `assets/images/university-logo.png`
   - Place cultural logo at: `assets/images/cultural-logo.png`
   - Add campus photos to: `assets/images/`
   - Add cultural event photos to: `assets/gallery/`
   - Add videos to: `assets/videos/`
   - Add background music to: `assets/music/cultural-music.mp3`
   - Add welcome audio to: `assets/music/welcome.mp3`

---

## ⚙️ CONFIGURATION

### **Edit Event Details**

Open `config.js` and modify:

```javascript
const CULTURAL_CONFIG = {
    universityName: "Guru Nanak University",
    location: "Hyderabad",
    eventName: "Cultural Day 2026",
    eventDate: "2026-10-15T09:00:00",      // For countdown timer
    eventDateDisplay: "15 OCTOBER 2026",    // Display format
    // ... more settings
};
```

### **Update Event Schedule**

In `config.js`, edit the `schedule` array:

```javascript
schedule: [
    {
        time: "09:00 AM",
        title: "Opening Ceremony",
        description: "Grand inauguration of Cultural Day 2026"
    },
    // Add more events...
]
```

### **Change Quotes**

In `config.js`, edit the `quotes` array:

```javascript
quotes: [
    "Culture is the thread that connects us.",
    "Your custom quote here...",
    // Add more quotes...
]
```

---

## 📸 ADDING MEDIA

### **Gallery Photos**
1. Place images in: `assets/gallery/`
2. Supported formats: JPG, PNG, WEBP, GIF
3. Recommended naming: `cultural1.jpg`, `cultural2.jpg`, etc.
4. The website will automatically detect and display them

### **Campus Photos**
1. Place images in: `assets/images/`
2. Edit the HTML in `index.html` under "Campus Memories" section
3. Update image paths and captions as needed

### **Videos**
1. Place videos in: `assets/videos/`
2. Supported formats: MP4, WEBM, OGG
3. Recommended naming: `video1.mp4`, `video2.mp4`, etc.
4. The website will automatically detect and display them

### **Background Music**
1. Place music file at: `assets/music/cultural-music.mp3`
2. The music button will appear automatically if the file exists
3. Users can toggle music on/off

### **Welcome Audio**
1. Place audio file at: `assets/music/welcome.mp3`
2. The welcome button will appear automatically if the file exists
3. Users can play the welcome message

---

## 🌐 DEPLOYING TO GITHUB PAGES

### **Step 1: Create GitHub Repository**
1. Go to [GitHub](https://github.com) and sign in
2. Click "New Repository"
3. Name it: `cultural-day-2026`
4. Set to Public
5. Do NOT initialize with README
6. Click "Create Repository"

### **Step 2: Upload Files**

**Option A: Using Git (Command Line)**
```bash
cd path/to/cultural-day-2026
git init
git add .
git commit -m "Initial commit: Cultural Day 2026 website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/cultural-day-2026.git
git push -u origin main
```

**Option B: Using GitHub Web Interface**
1. Go to your repository
2. Click "Add file" → "Upload files"
3. Drag and drop all files and folders
4. Click "Commit changes"

### **Step 3: Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to "Pages" (left sidebar)
4. Under "Source", select "main" branch
5. Select "/ (root)" folder
6. Click "Save"
7. Wait 1-2 minutes for deployment

### **Step 4: Access Your Website**
Your website will be available at:
```
https://YOUR-USERNAME.github.io/cultural-day-2026/
```

Example:
```
https://johnsmith.github.io/cultural-day-2026/
```

---

## 📱 MOBILE TESTING CHECKLIST

Test on these common screen sizes:

- [ ] iPhone SE (320px width)
- [ ] iPhone 12/13 (390px width)
- [ ] iPhone 14 Pro Max (430px width)
- [ ] Samsung Galaxy S21 (360px width)
- [ ] iPad (768px width)
- [ ] iPad Pro (1024px width)
- [ ] Desktop (1440px width)

### **What to Check:**
- [ ] No horizontal scrolling
- [ ] All text is readable
- [ ] Buttons are touch-friendly (not too small)
- [ ] Images scale properly
- [ ] Countdown timer displays correctly
- [ ] Navigation menu works
- [ ] Gallery opens properly
- [ ] Videos play correctly
- [ ] Lightbox works on mobile

---

## ✨ FEATURES

### **Hero Section**
- Full-screen opening with animated background
- University branding
- Event title and tagline
- Call-to-action button

### **Live Countdown Timer**
- Counts down to event date
- Shows days, hours, minutes, seconds
- Automatically shows celebration message when event starts

### **About Cultural Day**
- Editable description
- Professional layout
- Campus image showcase

### **Cultural Highlights**
- 8 highlight cards with icons
- Smooth hover animations
- Responsive grid layout

### **Event Schedule**
- Beautiful timeline design
- Alternating left/right layout
- Mobile-friendly vertical layout
- Editable in `config.js`

### **Photo Gallery**
- Masonry-style grid
- Lazy loading for performance
- Full-screen lightbox viewer
- Previous/Next navigation
- Keyboard support (Arrow keys, Escape)
- Mobile swipe-friendly

### **Campus Memories**
- Elegant photo cards with captions
- Hover effects
- Editable captions

### **Video Section**
- Responsive video grid
- Touch-friendly controls
- No autoplay (user-friendly)
- Metadata preloading

### **Rotating Quotes**
- Auto-advancing carousel
- Manual navigation
- Smooth transitions
- Editable in `config.js`

### **Student Talent Section**
- 6 talent categories
- Icon-based cards
- Hover animations

### **Tradition & Culture**
- Cultural decorative elements
- Elegant design
- Responsive layout

### **Optional Background Music**
- User-controlled music playback
- Visible toggle button
- Doesn't break if file is missing

### **Optional Welcome Audio**
- User-triggered welcome message
- Clean button interface
- Gracefully handles missing audio

### **Grand Finale**
- Celebration section
- Confetti animation on button click
- Event summary

### **Professional Footer**
- University information
- Event details
- Navigation links
- Copyright notice

### **Scroll to Top Button**
- Appears after scrolling
- Smooth scroll animation
- Fixed position

### **Accessibility Features**
- Semantic HTML5
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation
- Focus states
- ARIA labels
- Sufficient color contrast
- Reduced motion support

### **Performance Features**
- Lazy loading images
- Optimized animations
- Minimal JavaScript
- No external dependencies
- Fast page load
- GitHub Pages ready

---

## 🎨 CUSTOMIZATION

### **Colors**
Edit CSS variables in `style.css`:

```css
:root {
    --navy: #1a237e;
    --maroon: #8b1538;
    --gold: #ffd700;
    --purple: #6a1b9a;
    --cream: #fff8e7;
    /* Change colors here */
}
```

### **Fonts**
Current fonts:
- Headings: **Playfair Display** (elegant serif)
- Body: **Poppins** (modern sans-serif)

To change fonts, edit the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap" rel="stylesheet">
```

Then update CSS variables in `style.css`:
```css
--font-heading: 'Your Heading Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

### **Animations**
- Adjust animation speed in CSS (search for `transition`, `animation`)
- Disable animations by setting in `config.js`:
```javascript
revealOnScroll: false
```

---

## 🐛 TROUBLESHOOTING

### **Images Not Showing**
- Check file paths are correct
- Verify images are in the right folders
- Check file extensions match (case-sensitive)
- Look for typos in image filenames

### **Countdown Not Working**
- Verify date format in `config.js`: `"2026-10-15T09:00:00"`
- Check browser console for errors (F12)
- Ensure `config.js` is loaded before `script.js`

### **Gallery Not Loading**
- Place images in `assets/gallery/`
- Use supported formats: JPG, PNG, WEBP, GIF
- Name files: `cultural1.jpg`, `cultural2.jpg`, etc.
- Check browser console for errors

### **Audio Not Playing**
- Ensure files exist at correct paths
- Modern browsers block autoplay - use buttons
- Check file formats (MP3 recommended)
- Look for errors in browser console

### **Mobile Menu Not Working**
- Clear browser cache
- Check JavaScript console for errors
- Verify `script.js` is loaded

### **GitHub Pages Not Working**
- Wait 2-5 minutes after enabling
- Ensure repository is public
- Check that `index.html` is in root folder
- Verify all file paths are relative (not absolute)

---

## 📝 MAINTENANCE

### **Before the Event**
- [ ] Add all photos to gallery
- [ ] Update event schedule with final timings
- [ ] Add videos if available
- [ ] Test on multiple devices
- [ ] Share website link with students

### **During the Event**
- [ ] Consider live updates (manual HTML edits)
- [ ] Capture photos for gallery
- [ ] Record videos for later upload

### **After the Event**
- [ ] Update gallery with event photos
- [ ] Add event videos
- [ ] Update text to past tense
- [ ] Archive for future reference

---

## 🔒 BROWSER COMPATIBILITY

Tested and working on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

---

## 📧 SUPPORT

For questions or issues:
1. Check this README
2. Review browser console (F12) for errors
3. Verify file paths and names
4. Test in different browsers

---

## 📜 LICENSE

This website is created for Guru Nanak University Hyderabad's Cultural Day 2026.
Feel free to modify and customize for your event needs.

---

## 🎓 CREDITS

**Created for:**
Guru Nanak University, Hyderabad

**Event:**
Cultural Day 2026

**Date:**
15 October 2026

**Theme:**
"Celebrating Talent, Tradition & Togetherness"

---

## ✅ FINAL CHECKLIST

Before going live:

- [ ] All images uploaded to correct folders
- [ ] University logo added
- [ ] Cultural logo added
- [ ] Event date confirmed in `config.js`
- [ ] Schedule updated with actual timings
- [ ] About text reviewed and finalized
- [ ] Gallery photos added
- [ ] Videos added (if available)
- [ ] Background music added (optional)
- [ ] Welcome audio added (optional)
- [ ] Tested on mobile devices
- [ ] Tested on desktop browsers
- [ ] No JavaScript console errors
- [ ] All links working
- [ ] Navigation working
- [ ] Lightbox working
- [ ] Countdown working
- [ ] Uploaded to GitHub
- [ ] GitHub Pages enabled
- [ ] Website URL shared

---

**🎉 Celebrate Culture. Celebrate Talent. Celebrate Together! 🎉**
# UICSA-CULTURAL-EVENT-TECHNICAL-TEAM-
