export const site = {
  // Temporary product name. Change this once the final brand name is decided.
  name: 'Relay',
  chromeStoreUrl: '#',
  loginUrl: '#',
  docsUrl: '#',
  pricingUrl: '#pricing',
};

export const workflow = [
  'Capture a prospect',
  'Find or generate email',
  'Verify before sending',
  'Save to contacts',
  'Personalize outreach',
  'Track results',
];

export const plans = [
  {
    name: 'Free',
    label: 'Get started',
    description: 'For trying the workflow and keeping lightweight outreach organized.',
    features: [
      '30 emails / day',
      '1 reusable template',
      '2 custom variables',
      '1 connected email account',
    ],
  },
  {
    name: 'Core',
    label: 'Most practical',
    description: 'For consistent outreach with verification, more templates, and higher limits.',
    featured: true,
    features: [
      '80 emails / day',
      'Email validation before send',
      '2 reusable templates',
      '4 custom variables',
      '2 attachments up to 1 MB',
      'Limited dashboard access',
    ],
  },
  {
    name: 'Pro',
    label: 'Scale outreach',
    description: 'For higher-volume workflows, deeper analytics, and open tracking.',
    features: [
      '400 emails / day',
      'Email validation before send',
      '5 reusable templates',
      '10 custom variables',
      '5 attachments up to 10 MB',
      '3 connected email accounts',
      'Open tracking + analytics',
    ],
  },
];

export const faqs = [
  {
    question: 'Do I need LinkedIn to save a contact?',
    answer:
      'No. The extension can support the LinkedIn prospecting workflow, but you can also add and save a contact manually when you already have the person’s details.',
  },
  {
    question: 'What does the browser extension actually do?',
    answer:
      'It keeps the prospecting workflow close to the page you are already browsing: capture prospect details, generate or enter an email, verify it when your plan allows, save the contact, choose a template, and continue into outreach.',
  },
  {
    question: 'Can I use my own email account?',
    answer:
      'Yes. The product is designed around connected email accounts such as Gmail and Microsoft so messages can be sent from the account you authorize.',
  },
  {
    question: 'Will pricing be the same in every country?',
    answer:
      'No. The billing system is designed for regional pricing and local payment methods. The website can show the applicable price and payment options before checkout.',
  },
  {
    question: 'Where do I manage contacts and analytics?',
    answer:
      'The extension handles the fast browsing workflow, while the web dashboard handles contact management, templates, account settings, billing, and analytics.',
  },
];
