# Deployment Checklist

## Pre-Deployment

- [ ] All environment variables set in \.env.local\
- [ ] Supabase database created and migrations applied
- [ ] Stripe API keys configured
- [ ] AWS S3 bucket created (or Cloudinary configured)
- [ ] NextAuth secret generated
- [ ] Local testing completed (\
pm run dev\)
- [ ] Build succeeds (\
pm run build\)

## Vercel Deployment

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added in Vercel dashboard
- [ ] Domain configured (if custom domain)
- [ ] HTTPS enabled

## Post-Deployment

- [ ] Test all pages load correctly
- [ ] Sign up / Sign in flow works
- [ ] Payment flow works with test card (4242 4242 4242 4242)
- [ ] Stripe webhooks receiving events
- [ ] Email capture working
- [ ] Admin dashboard accessible

## Production Considerations

- [ ] Switch to Stripe production keys
- [ ] Enable reCAPTCHA on forms (optional)
- [ ] Set up monitoring/error tracking (Sentry)
- [ ] Enable database backups
- [ ] Set up analytics (Google Analytics, Mixpanel)
- [ ] Create privacy policy and terms of service pages
- [ ] Test on multiple devices/browsers
- [ ] Performance optimization (images, code splitting)

## Ongoing

- [ ] Monitor server logs for errors
- [ ] Check Stripe dashboard for failed payments
- [ ] Review analytics regularly
- [ ] Update content/products as needed
- [ ] Communicate with users regularly
