export const SAMPLE_1 = `const openLink = (url: string) => {
  if (typeof window === 'undefined') return;

  window.open(url, '_blank');
};
`;
export const SAMPLE_2 = `const popup = () => window.open('', '_blank');

if (!popup) return;

const data = await getURL();

if (data.url) popup.location.href = data.landingUrl;
else popup.close();
`;
