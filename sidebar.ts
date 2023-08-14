import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/ninico/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/ninico/releases' },
      { text: 'Upgrade Guide', link: '/ninico/upgrade' },
    ],
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/ninico/installation' },
      { text: 'SSL', link: '/ninico/ssl' },
      { text: 'License', link: '/ninico/license' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Setup homepage', link: '/ninico/usage-homepage' },
      { text: 'Menu', link: '/ninico/usage-menu' },
      { text: 'Theme options', link: '/ninico/usage-theme-options' },
      { text: 'Widgets', link: '/ninico/usage-widgets' },
      { text: 'Custom CSS/JS', link: '/ninico/usage-custom-css-js' },
      { text: 'Email', link: '/ninico/usage-email' },
      { text: 'Ads', link: '/ninico/usage-ads' },
      { text: 'Media - Setup Amazon S3', link: '/ninico/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/ninico/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/ninico/usage-media-wasabi' },
      { text: 'Setup social login', link: '/ninico/usage-social-login' },
      { text: 'Analytics', link: '/ninico/usage-analytics' },
      { text: 'Backup', link: '/ninico/plugin-backup' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[]
