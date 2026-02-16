# 📋 Quick Deployment Checklist

Use this quick reference while deploying. See `DEPLOYMENT_INSTRUCTIONS.md` for detailed steps.

---

## ☐ STEP 1: Merge PR (5 minutes)

### Via GitHub Web Interface:
1. ☐ Go to: https://github.com/younouira/angular-projects/pulls
2. ☐ Find PR: "Configure pc-store for GitHub Pages deployment"
3. ☐ Click "Merge pull request"
4. ☐ Click "Confirm merge"
5. ☐ Wait for GitHub Actions to run (check Actions tab)

### Or via Command Line:
```bash
git checkout master
git pull origin master
git merge copilot/host-pc-store-project
git push origin master
```

---

## ☐ STEP 2: Enable GitHub Pages (3 minutes)

1. ☐ Go to: https://github.com/younouira/angular-projects/settings/pages
2. ☐ Source: Select "GitHub Actions"
3. ☐ Custom domain: Enter `youssefnouira.me`
4. ☐ Click "Save"
5. ☐ ✅ Enable "Enforce HTTPS"

---

## ☐ STEP 3: Configure DNS (5 minutes + propagation)

Go to your DNS provider and add these A records:

```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
```

**Verify DNS**:
```bash
dig youssefnouira.me +short
```

---

## ☐ STEP 4: Verify Deployment (2 minutes)

1. ☐ Check workflow: https://github.com/younouira/angular-projects/actions
   - Should show ✅ green checkmark

2. ☐ Test site: https://youssefnouira.me/pc-store/
   - ☐ Home page loads
   - ☐ Product details work
   - ☐ Direct URLs work (paste in new tab)
   - ☐ HTTPS works (padlock icon)

---

## 🎉 Done!

Your site is live at: **https://youssefnouira.me/pc-store/**

---

## ⏱️ Timeline Expectations

- **Merge + GitHub Setup**: Immediate (5-10 minutes)
- **First deployment**: 2-5 minutes after merge
- **DNS propagation**: 15 minutes to 48 hours (usually 1-2 hours)
- **SSL certificate**: Up to 24 hours after DNS is configured

---

## 🔗 Quick Links

- **Repository**: https://github.com/younouira/angular-projects
- **Settings**: https://github.com/younouira/angular-projects/settings/pages
- **Actions**: https://github.com/younouira/angular-projects/actions
- **Live Site**: https://youssefnouira.me/pc-store/
- **DNS Checker**: https://dnschecker.org

---

**Need help?** See `DEPLOYMENT_INSTRUCTIONS.md` for detailed instructions and troubleshooting.
