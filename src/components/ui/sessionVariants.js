export const VARIANT_OPTIONS = {
  'Individual Session': ['Studio', 'Outdoor'],
  'Family Session': ['Studio', 'Outdoor'],
  'Couple Session': ['Studio', 'Outdoor'],

  'Wedding Session': [
    'White',
    'Traditional',
    'White + Trad (Same Day)',
    'White + Trad (Different Days)',
  ],

  'Party Coverage': [],
  'Milestone Coverage': [],
  'Commercial Session': [],
};

// helpers
export const getVariants = session => VARIANT_OPTIONS[session] ?? [];
export const getDefaultVariant = session => getVariants(session)[0] || '';
