/* ============================================
   GURU NANAK UNIVERSITY - CULTURAL DAY 2026
   Configuration File
   ============================================
   
   INSTRUCTIONS:
   - Edit this file to update event details
   - Event date format: YYYY-MM-DDTHH:MM:SS
   - Display date can be in any format
   ============================================ */

const CULTURAL_CONFIG = {
    // University Information
    universityName: "Guru Nanak University",
    location: "Hyderabad",
    
    // Event Information
    eventName: "Cultural Day 2026",
    
    // Organizer Information
    organizer: "UICSA Branch",
    
    // Event Date (for countdown timer)
    // Format: YYYY-MM-DDTHH:MM:SS
    eventDate: "2026-10-15T09:00:00",
    
    // Event Date Display (shown to users)
    eventDateDisplay: "15 OCTOBER 2026",
    
    // Event Tagline
    tagline: "Celebrating Talent, Tradition & Togetherness",
    
    // Cultural Quotes (will rotate automatically)
    quotes: [
        "Culture is the thread that connects us.",
        "Celebrate diversity. Celebrate talent. Celebrate togetherness.",
        "Every performance tells a story.",
        "Memories made today become stories we remember tomorrow.",
        "Unity in diversity is our greatest strength.",
        "Where tradition meets creativity.",
        "Art is the soul of culture.",
        "Together we celebrate, together we grow."
    ],
    
    // Event Schedule (PLACEHOLDERS - Edit as needed)
    // These are sample timings only
    schedule: [
        {
            time: "09:00 AM",
            title: "Opening Ceremony",
            description: "Grand inauguration of Cultural Day 2026"
        },
        {
            time: "10:00 AM",
            title: "Cultural Performances",
            description: "Traditional dance and music presentations"
        },
        {
            time: "12:00 PM",
            title: "Music & Dance",
            description: "Live performances by talented students"
        },
        {
            time: "02:00 PM",
            title: "Student Activities",
            description: "Interactive cultural activities and competitions"
        },
        {
            time: "04:00 PM",
            title: "Special Performances",
            description: "Featured acts and surprise performances"
        },
        {
            time: "06:00 PM",
            title: "Closing Ceremony",
            description: "Awards and memorable conclusion"
        }
    ],
    
    // Gallery Images Path
    // Place images in: assets/gallery/
    galleryPath: "assets/gallery/",
    
    // Supported gallery image formats
    galleryFormats: ["jpg", "jpeg", "png", "webp", "gif"],
    
    // Videos Path
    // Place videos in: assets/videos/
    videosPath: "assets/videos/",
    
    // Music Path
    // Place background music in: assets/music/cultural-music.mp3
    // Place welcome audio in: assets/music/welcome.mp3
    musicPath: "assets/music/",
    
    // Auto-advance quotes (milliseconds)
    quoteInterval: 5000, // 5 seconds
    
    // Scroll reveal animation settings
    revealOnScroll: true,
    revealOffset: 100 // pixels from viewport bottom
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CULTURAL_CONFIG;
}
