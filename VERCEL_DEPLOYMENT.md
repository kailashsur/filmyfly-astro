# Deploy FilmyFly to Vercel

## ✅ Configuration Complete

Your project is now configured for Vercel deployment!

**Changes made:**
- ✅ Switched from Cloudflare to Vercel adapter
- ✅ Updated `astro.config.mjs`
- ✅ Created `vercel.json`
- ✅ Updated `.gitignore`
- ✅ Build tested successfully

---

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended - Easiest)

1. **Go to Vercel**
   - Visit: https://vercel.com/
   - Sign in with GitHub

2. **Import Your Repository**
   - Click **"Add New..."** → **"Project"**
   - Select your GitHub repository: `kailashsur/filmyfly-astro`
   - Click **"Import"**

3. **Configure Project**
   - **Framework Preset**: Astro (auto-detected)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.vercel/output` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Add Environment Variables**
   Click **"Environment Variables"** and add:
   ```
   PUBLIC_API_URL = https://filmyflyhd.space/api
   PUBLIC_SITE_URL = https://filmyfly.work
   ```

5. **Deploy**
   - Click **"Deploy"**
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://filmyfly-astro.vercel.app`

6. **Add Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add `filmyfly.work`
   - Update your DNS records as instructed

---

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? `filmyfly-astro`
   - Directory? `./` (press Enter)

4. **Set Environment Variables**
   ```bash
   vercel env add PUBLIC_API_URL
   # Enter: https://filmyflyhd.space/api
   
   vercel env add PUBLIC_SITE_URL
   # Enter: https://filmyfly.work
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## 🔧 Before Deploying - Commit Your Changes

```bash
git add .
git commit -m "Switch to Vercel adapter"
git push origin main
```

---

## 📊 Expected Build Output

```
✓ Building server entrypoints...
✓ Bundling function entry.mjs
✓ Copying static files to .vercel/output/static
✓ Server built in 10.51s
✓ Complete!
```

---

## 🌐 After Deployment

Your site will be available at:
- **Vercel URL**: `https://filmyfly-astro.vercel.app`
- **Custom Domain**: `https://filmyfly.work` (after DNS setup)

### Verify Deployment

1. Visit your Vercel URL
2. Open browser console (F12)
3. Check for API configuration log:
   ```
   🔍 FilmyFly API Configuration: {
     API_BASE: "https://filmyflyhd.space/api",
     ...
   }
   ```
4. Verify movies are loading

---

## 🔄 Automatic Deployments

Once connected to GitHub:
- ✅ Every push to `main` = Production deployment
- ✅ Every push to other branches = Preview deployment
- ✅ Pull requests get preview URLs

---

## 📝 Custom Domain Setup (filmyfly.work)

1. **In Vercel Dashboard**
   - Go to Project → Settings → Domains
   - Add `filmyfly.work`
   - Add `www.filmyfly.work`

2. **Update DNS Records**
   
   Add these records in your domain registrar:
   
   **For apex domain (filmyfly.work):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   
   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS Propagation** (5-60 minutes)

4. **Verify**
   - Visit `https://filmyfly.work`
   - SSL certificate will be auto-generated

---

## 🆚 Vercel vs Cloudflare Pages

| Feature | Vercel | Cloudflare Pages |
|---------|--------|------------------|
| **Free Tier** | 100GB bandwidth/month | Unlimited bandwidth |
| **Build Minutes** | 6,000 min/month | 500 builds/month |
| **Serverless Functions** | ✅ Included | ✅ Included |
| **Edge Network** | ✅ Global | ✅ Global |
| **Custom Domains** | ✅ Free SSL | ✅ Free SSL |
| **GitHub Integration** | ✅ Excellent | ✅ Excellent |
| **Analytics** | ✅ Built-in | ✅ Built-in |

Both are excellent choices for your project!

---

## 🐛 Troubleshooting

### Build Fails

Check Vercel build logs for errors. Common issues:
- Missing environment variables
- API endpoint not accessible
- Node.js version mismatch

### Movies Not Loading

1. Check environment variables are set
2. Verify API is accessible: `https://filmyflyhd.space/api/home?page=1`
3. Check browser console for errors

### Domain Not Working

- Wait for DNS propagation (up to 48 hours, usually 5-60 minutes)
- Verify DNS records are correct
- Check domain registrar settings

---

## 📞 Next Steps

1. ✅ Commit and push your changes
2. ✅ Deploy to Vercel (Option 1 or 2)
3. ✅ Set environment variables
4. ✅ Test deployment
5. ✅ Add custom domain (optional)

**Ready to deploy!** 🚀
