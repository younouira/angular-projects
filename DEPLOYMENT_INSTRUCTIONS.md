# 🚀 Complete Deployment Guide for PC Store on youssefnouira.me

This guide provides step-by-step instructions to complete the deployment of the pc-store project to GitHub Pages with your custom domain.

---

## ✅ Current Status

All code changes are complete and ready for deployment. The following has been configured:

- ✅ Angular build configuration for GitHub Pages
- ✅ GitHub Actions workflow for automated deployment
- ✅ Client-side routing support (404.html + redirect handler)
- ✅ CNAME file for custom domain
- ✅ Security scans passed
- ✅ Documentation created

**Branch**: `copilot/host-pc-store-project`  
**Target**: `master` branch  
**Files Changed**: 9 files (+294 lines)

---

## 📋 Step-by-Step Instructions

### STEP 1: Merge the PR to Master Branch

You have **two options** to merge this PR:

#### Option A: Via GitHub Web Interface (Recommended ⭐)

1. **Open your browser** and go to:
   ```
   https://github.com/younouira/angular-projects/pulls
   ```

2. **Find the Pull Request** titled:
   - "Configure pc-store for GitHub Pages deployment on youssefnouira.me"
   - Branch: `copilot/host-pc-store-project`

3. **Review the changes** (optional but recommended):
   - Click on "Files changed" tab
   - Review the 9 modified/new files
   - Ensure everything looks correct

4. **Click "Merge pull request"** button (green button)

5. **Confirm the merge** by clicking "Confirm merge"

6. **Optionally delete the branch** after merging

#### Option B: Via Command Line

If you prefer command line or the PR doesn't exist yet:

```bash
# Navigate to your repository
cd /path/to/angular-projects

# Switch to master branch
git checkout master

# Pull latest changes
git pull origin master

# Merge the feature branch
git merge copilot/host-pc-store-project

# Push to GitHub
git push origin master
```

✅ **After this step**: The GitHub Actions workflow will automatically trigger and start building/deploying your site.

---

### STEP 2: Enable GitHub Pages

1. **Go to repository Settings**:
   ```
   https://github.com/younouira/angular-projects/settings/pages
   ```

2. **Configure the Source**:
   - **Source**: Select "GitHub Actions"
   - (The workflow we created will handle deployment automatically)

3. **Configure Custom Domain**:
   - In the "Custom domain" field, enter: `youssefnouira.me`
   - Click "Save"
   - Wait for DNS check to complete (may take a few minutes)

4. **Enable HTTPS** (Recommended):
   - ✅ Check "Enforce HTTPS"
   - (Wait for the certificate to be issued - this may take up to 24 hours)

5. **Verify the configuration**:
   - You should see: "Your site is published at https://youssefnouira.me"

✅ **After this step**: GitHub Pages is ready to serve your site.

---

### STEP 3: Verify DNS Configuration

Your domain `youssefnouira.me` needs to point to GitHub Pages servers.

#### Check Current DNS Settings

1. **Go to your domain registrar** or DNS provider where you registered `youssefnouira.me`
   - Examples: GoDaddy, Namecheap, Cloudflare, Google Domains, etc.

2. **Navigate to DNS settings** for your domain

3. **Verify/Add the following records**:

#### For Apex Domain (youssefnouira.me):

**Option 1: A Records (Recommended)**

Add four A records pointing to GitHub's IP addresses:

```
Type: A
Name: @ (or youssefnouira.me)
Value: 185.199.108.153

Type: A
Name: @ (or youssefnouira.me)
Value: 185.199.109.153

Type: A
Name: @ (or youssefnouira.me)
Value: 185.199.110.153

Type: A
Name: @ (or youssefnouira.me)
Value: 185.199.111.153
```

**Option 2: CNAME Record (Alternative)**

If your DNS provider supports ALIAS or ANAME records for apex domains:

```
Type: CNAME (or ALIAS/ANAME)
Name: @ (or youssefnouira.me)
Value: younouira.github.io
```

#### Verify DNS Propagation

After updating DNS, verify it's working:

**Method 1: Using dig command (Mac/Linux)**
```bash
dig youssefnouira.me +short
```

Expected output should show GitHub's IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Method 2: Using nslookup (Windows)**
```cmd
nslookup youssefnouira.me
```

**Method 3: Online DNS Checker**
- Visit: https://dnschecker.org/
- Enter: `youssefnouira.me`
- Check that it resolves to GitHub Pages IPs

⚠️ **Note**: DNS propagation can take up to 48 hours, but usually happens within 1-2 hours.

---

## 🔍 Verification Checklist

After completing all steps, verify everything is working:

### 1. Check GitHub Actions Workflow
- Go to: https://github.com/younouira/angular-projects/actions
- Verify the "Deploy PC Store to GitHub Pages" workflow ran successfully
- Status should be: ✅ Green checkmark

### 2. Check GitHub Pages Deployment
- Go to: https://github.com/younouira/angular-projects/settings/pages
- Should show: "Your site is live at https://youssefnouira.me"

### 3. Test the Website
Visit the following URLs and verify they work:

- ✅ **Home page**: https://youssefnouira.me/pc-store/
  - Should display the product list

- ✅ **Product detail**: https://youssefnouira.me/pc-store/product/1
  - Should display product details (not 404)

- ✅ **Direct URL**: Paste `https://youssefnouira.me/pc-store/product/2` directly in browser
  - Should work (tests the 404.html redirect)

- ✅ **HTTPS**: Verify the padlock icon in browser
  - Should show secure connection

### 4. Test Client-Side Routing
1. Go to home page: https://youssefnouira.me/pc-store/
2. Click "View Details" on any product
3. The URL should change but page should load (not refresh)
4. Copy the product URL and paste in a new tab
5. It should load correctly (tests 404 redirect mechanism)

---

## 🐛 Troubleshooting

### Issue: "404 - There isn't a GitHub Pages site here"

**Solutions**:
- Wait a few minutes after enabling GitHub Pages
- Check that the workflow completed successfully
- Verify the CNAME file exists in the deployment
- Check GitHub Pages settings are correct

### Issue: DNS not resolving

**Solutions**:
- Wait longer (DNS can take up to 48 hours)
- Clear your DNS cache:
  - Mac: `sudo dscacheutil -flushcache`
  - Windows: `ipconfig /flushdns`
  - Linux: `sudo systemd-resolve --flush-caches`
- Use a different DNS checker tool
- Try accessing from a different network/device

### Issue: "SSL certificate error" or "Not secure"

**Solutions**:
- Wait up to 24 hours for GitHub to issue the SSL certificate
- Ensure DNS is properly configured first
- Try disabling and re-enabling "Enforce HTTPS" in GitHub Pages settings

### Issue: Angular routes show 404

**Solutions**:
- Verify 404.html exists in the deployed site
- Check browser console for JavaScript errors
- Verify the redirect script in index.html is present
- Clear browser cache and try again

### Issue: Workflow fails to run

**Solutions**:
- Check that GitHub Pages is enabled
- Verify the workflow file syntax is correct
- Check GitHub Actions logs for specific errors
- Ensure repository has GitHub Pages enabled

---

## 📞 Support

If you encounter issues:

1. **Check the GitHub Actions logs**:
   - https://github.com/younouira/angular-projects/actions
   - Click on the failed workflow run
   - Review the error messages

2. **Review the documentation**:
   - See `PC_STORE_DEPLOYMENT.md` for technical details
   - See `SECURITY_SUMMARY.md` for security information

3. **GitHub Pages Documentation**:
   - https://docs.github.com/en/pages

4. **DNS Help**:
   - Contact your DNS provider's support
   - Check their documentation for setting up GitHub Pages

---

## 🎉 Success!

Once all steps are complete, your PC Store application will be live at:

**🌐 https://youssefnouira.me/pc-store/**

The site will automatically update whenever you push changes to the master branch!

---

## 📝 Summary

**What was configured**:
- ✅ Angular build with correct base href
- ✅ GitHub Actions CI/CD pipeline
- ✅ Custom domain support
- ✅ Client-side routing for SPAs
- ✅ HTTPS support ready

**What you need to do**:
1. ☐ Merge PR to master
2. ☐ Enable GitHub Pages
3. ☐ Configure DNS records

**Estimated time**: 10-30 minutes (plus DNS propagation time)

Good luck! 🚀
