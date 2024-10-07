import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://retake.github.io${asPath}`;
  const description = frontMatter.description || "Documentation for Retake Studio's resources for FiveM/RedM";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/logo.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Retake Studio';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'fr-FR', text: 'French' },
  ],
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://avatars.githubusercontent.com/u/182796119?s=38') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Retake Studio
    </div>
  ),
  project: {
    link: 'https://github.com/Retake-Studio/retake.github.io',
  },
  chat: {
    link: 'https://discord.gg/UMwpRHkUtg',
  },
  docsRepositoryBase: 'https://github.com/Retake-Studio/retake.github.io/blob/main',
  footer: {
    text: (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <span>Retake Studio</span>
        <img src="/static/poweredby.png" alt="Retake Studio Logo" className="w-auto h-8" style={{ maxHeight: '40px', maxWidth: '100%' }} />
      </div>
    ),
  },
  // search: {
  //   component: <Search />,
  // },
  head: useHead,
  primaryHue: { dark: 200, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },

  useNextSeoProps: useNextSeoProps,
};

export default config;
