# 🚀 GitHub Pages Deployment Guide

## Complete Step-by-Step Guide for Beginners

This guide will help you deploy your Cultural Day 2026 website to GitHub Pages, making it accessible to everyone with a public URL.

---

## 📋 Prerequisites

Before you begin, you need:
1. A GitHub account (free) - [Sign up here](https://github.com/join)
2. Your website files ready (all files in the `cultural-day-2026` folder)
3. Basic familiarity with your computer's file system

---

## 🎯 METHOD 1: Using GitHub Web Interface (Easiest)

### **Step 1: Create GitHub Repository**

1. **Log in to GitHub**
   - Go to [github.com](https://github.com)
   - Sign in with your account

2. **Create New Repository**
   - Click the **"+"** icon in top-right corner
   - Select **"New repository"**

3. **Repository Settings**
   - **Repository name:** `cultural-day-2026` (or any name you prefer)
   - **Description:** "Guru Nanak University Cultural Day 2026 Website"
   - **Visibility:** Select **Public** (required for free GitHub Pages)
   - **Do NOT check:** "Initialize this repository with a README"
   - **Do NOT add:** .gitignore or license
   - Click **"Create repository"**

### **Step 2: Upload Files**

1. **On the repository page:**
   - Click **"uploading an existing file"** link
   - OR click **"Add file"** → **"Upload files"**

2. **Upload Your Files:**
   - Drag and drop ALL files and folders:
     - `index.html`
     - `style.css`
     - `script.js`
     - `config.js`
     - `README.md`
     - `assets` folder (entire folder)
   
   - **IMPORTANT:** GitHub will maintain folder structure automatically
   
3. **Commit Changes:**
   - Scroll down to "Commit changes" section
   - Leave default message: "Add files via upload"
   - Click **"Commit changes"**

4. **Wait for Upload:**
   - Upload may take 1-2 minutes depending on file sizes
   - Do not close the browser window

### **Step 3: Enable GitHub Pages**

1. **Go to Settings:**
   - Click **"Settings"** tab (top of repository page)

2. **Find Pages Section:**
   - Scroll down left sidebar
   - Click **"Pages"**

3. **Configure Source:**
   - Under **"Branch"** section:
     - Select branch: **"main"** (or "master")
     - Select folder: **"/ (root)"**
   - Click **"Save"**

4. **Wait for Deployment:**
   - You'll see a message: "Your site is ready to be published"
   - Wait 1-3 minutes for initial deployment
   - Refresh the page

5. **Get Your URL:**
   - Once deployed, you'll see:
     **"Your site is published at https://YOUR-USERNAME.github.io/cultural-day-2026/"**
   - This is your public website URL!

### **Step 4: Test Your Website**

1. **Click the URL** to open your website
2. **Check everything works:**
   - Hero section loads
   - Countdown timer works
   - Navigation functions
   - Images display (if you added them)
   - Gallery works
   - Videos play (if you added them)
   - All sections visible

---

## 🎯 METHOD 2: Using Git Command Line (Advanced)

### **Prerequisites:**
- Git installed on your computer
- Command line familiarity

### **Step 1: Install Git**

**Windows:**
- Download from [git-scm.com](https://git-scm.com/)
- Run installer with default settings

**Mac:**
- Open Terminal
- Run: `git --version` (will install if needed)
- Or use Homebrew: `brew install git`

**Linux:**
```bash
sudo apt-get install git  # Ubuntu/Debian
sudo yum install git      # CentOS/RHEL
```

### **Step 2: Configure Git**

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### **Step 3: Create GitHub Repository**

1. Go to GitHub.com
2. Create new repository (as described in Method 1)
3. Do NOT initialize with README
4. Copy the repository URL (shown after creation)

### **Step 4: Push to GitHub**

1. **Open Terminal/Command Prompt**
   - Navigate to your project folder:
   ```bash
   cd path/to/cultural-day-2026
   ```

2. **Initialize Git:**
   ```bash
   git init
   ```

3. **Add Files:**
   ```bash
   git add .
   ```

4. **Commit:**
   ```bash
   git commit -m "Initial commit: Cultural Day 2026 website"
   ```

5. **Add Remote:**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/cultural-day-2026.git
   ```
   Replace `YOUR-USERNAME` with your GitHub username

6. **Push to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

7. **Enter Credentials:**
   - You may be prompted for GitHub username and password
   - Use a [Personal Access Token](https://github.com/settings/tokens) instead of password

### **Step 5: Enable GitHub Pages**

Follow "Step 3" from Method 1 above.

---

## 🔄 Updating Your Website

### **Method 1: Web Interface**

1. Go to your repository on GitHub
2. Click on the file you want to edit
3. Click pencil icon (Edit)
4. Make changes
5. Scroll down, add commit message
6. Click "Commit changes"
7. Wait 1-2 minutes for update

### **Method 2: Upload New Files**

1. Go to your repository
2. Navigate to the folder
3. Click "Add file" → "Upload files"
4. Upload updated files
5. Commit changes

### **Method 3: Git Command Line**

```bash
# Make your changes to files locally
git add .
git commit -m "Update: description of changes"
git push
```

---

## 📱 Sharing Your Website

Once deployed, share your website:

**Your URL format:**
```
https://YOUR-USERNAME.github.io/cultural-day-2026/
```

**Example:**
```
https://johnsmith.github.io/cultural-day-2026/
```

### **Ways to Share:**

1. **Direct Link:**
   - Copy the URL
   - Share via WhatsApp, Email, SMS

2. **QR Code:**
   - Generate QR code at [qr-code-generator.com](https://www.qr-code-generator.com/)
   - Print and display on campus

3. **Social Media:**
   - Post on Facebook, Instagram, Twitter
   - Add as website link in bio

4. **University Portal:**
   - Add to university website
   - Include in announcements

---

## ⚠️ Common Issues & Solutions

### **Issue 1: Website Not Loading**

**Symptoms:** 404 error or blank page

**Solutions:**
- Wait 2-5 minutes after enabling Pages
- Check repository is set to Public
- Verify `index.html` is in root folder (not in subfolder)
- Check GitHub Pages settings show green checkmark

### **Issue 2: Images Not Showing**

**Symptoms:** Broken image icons

**Solutions:**
- Verify images uploaded to correct folders
- Check file paths are relative (start with `assets/`)
- Ensure image filenames match exactly (case-sensitive)
- Re-upload images

### **Issue 3: CSS Not Loading**

**Symptoms:** Plain HTML with no styling

**Solutions:**
- Verify `style.css` is in root folder
- Check `index.html` references: `<link rel="stylesheet" href="style.css">`
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for CDN to update

### **Issue 4: JavaScript Not Working**

**Symptoms:** Countdown not working, buttons not responding

**Solutions:**
- Open browser console (F12)
- Check for JavaScript errors
- Verify `script.js` and `config.js` uploaded
- Check load order in `index.html`

### **Issue 5: Changes Not Appearing**

**Symptoms:** Updates not visible on live site

**Solutions:**
- Wait 1-3 minutes for deployment
- Hard refresh browser: Ctrl+Shift+R (Cmd+Shift+R on Mac)
- Clear browser cache
- Try different browser or incognito mode
- Check commit appears in repository

---

## 🔍 Verification Checklist

After deployment, verify:

- [ ] Website loads at your GitHub Pages URL
- [ ] Hero section displays correctly
- [ ] University name and location correct
- [ ] Event date displays: "15 OCTOBER 2026"
- [ ] Countdown timer is working
- [ ] Navigation menu opens on mobile
- [ ] All sections scroll smoothly
- [ ] Colors and fonts load correctly
- [ ] No console errors (press F12)
- [ ] Mobile responsive (test on phone)
- [ ] Images display (if uploaded)
- [ ] Gallery works (if photos added)
- [ ] Videos play (if uploaded)
- [ ] Footer displays correctly

---

## 🎓 Need Help?

### **GitHub Documentation:**
- [GitHub Pages Guide](https://pages.github.com/)
- [GitHub Help](https://docs.github.com/)

### **Browser Testing:**
Test your website on:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari (Mac/iOS)
- Mobile browsers

### **Tools:**
- [GitHub Desktop](https://desktop.github.com/) - GUI for Git
- [VS Code](https://code.visualstudio.com/) - Code editor
- [Can I Use](https://caniuse.com/) - Browser compatibility

---

## 🎉 Success!

Once deployed, your Cultural Day 2026 website is:
- ✅ Live and accessible worldwide
- ✅ Free to host forever (on GitHub Pages)
- ✅ Fast and reliable
- ✅ Mobile-friendly
- ✅ Easy to update
- ✅ Shareable with anyone

**Celebrate your achievement!** 🎊

Your university's cultural event now has a professional, modern website that students, faculty, and visitors can access from anywhere!

---

## 📞 Support

For technical issues:
1. Check the troubleshooting section above
2. Review README.md
3. Check browser console for errors
4. Verify file paths and structure
5. Test in different browsers

**Remember:** The website is completely static and frontend-only, so it will work perfectly on GitHub Pages without any backend setup!

---

**Good luck with Cultural Day 2026!** 🎉🎊✨
