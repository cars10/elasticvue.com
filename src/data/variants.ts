export type RatingProps = {
  amount: number
  stars: number
}

export type VariantItem = {
  label: string
  buttonLabel?: string
  icon: string
  description?: string
  href?: string
  rating?: RatingProps
  dropdownItems?: {
    label: string
    href: string
    icon?: string
  }[]
}

export const variants: Record<string, VariantItem> = {
  windows: {
    label: 'Windows',
    description: 'Download the .msi installer for windows.',
    icon: '/images/icons/windows.svg',
    href: 'https://update.elasticvue.com/download/windows/x86_64?file=elasticvue.msi',
  },
  mac: {
    label: 'Mac',
    icon: '/images/icons/apple.svg',
    description:
      'Download the .dmg file for mac, depending on your cpu. You can also install elasticvue via homebrew.',
    dropdownItems: [
      {
        label: 'Homebrew',
        href: 'https://formulae.brew.sh/cask/elasticvue',
      },
      {
        label: 'Intel Mac',
        href: 'https://update.elasticvue.com/download/darwin/x86_64',
      },
      {
        label: 'Apple Mac',
        href: 'https://update.elasticvue.com/download/darwin/aarch64',
      },
    ],
  },
  linux: {
    label: 'Linux',
    description:
      'Download the AppImage for linux. You can also install elasticvue-bin from the AUR on arch based systems.',
    icon: '/images/icons/linux.svg',
    dropdownItems: [
      {
        label: 'AUR',
        href: 'https://aur.archlinux.org/packages/elasticvue-bin',
      },
      {
        label: 'AppImage',
        href: 'https://update.elasticvue.com/download/linux/x86_64?file=elasticvue.AppImage',
      },
    ],
  },
  chrome: {
    label: 'Chrome',
    icon: '/images/icons/chrome.svg',
    href: 'https://chrome.google.com/webstore/detail/elasticvue/hkedbapjpblbodpgbajblpnlpenaebaa',
    description: 'Elasticvue is available in the chrome web store:',
    rating: { stars: 4.9, amount: 80 },
  },
  edge: {
    label: 'Edge',
    icon: '/images/icons/edge.svg',
    href: 'https://microsoftedge.microsoft.com/addons/detail/geifniocjfnfilcbeloeidajlfmhdlgo',
    description: 'Get elasticvue for microsoft edge:',
    rating: { stars: 4.5, amount: 30 },
  },
  firefox: {
    label: 'Firefox',
    icon: '/images/icons/firefox.svg',
    href: 'https://addons.mozilla.org/en-US/firefox/addon/elasticvue/',
    description: 'Grab elasticvue from the firefox addon store:',
    rating: { stars: 4.8, amount: 21 },
  },
  web: {
    label: 'Web',
    buttonLabel: 'app.elasticvue.com',
    description:
      'You can use the hosted version of elasticvue to avoid installing anything.',
    icon: '/images/icons/web.svg',
    href: 'https://app.elasticvue.com',
  },
  docker: {
    label: 'Docker',
    buttonLabel: 'Docker hub',
    description: 'Run cars10/elasticvue:latest and expose port 8080.',
    icon: '/images/icons/docker.svg',
    href: 'https://hub.docker.com/r/cars10/elasticvue',
  },
  selfhosted: {
    label: 'Self hosted',
    buttonLabel: 'Github wiki',
    description:
      'Check the github wiki for instructions on how to manually build elasticvue.',
    icon: '/images/icons/github.svg',
    href: 'https://github.com/cars10/elasticvue/wiki',
  },
}
