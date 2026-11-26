// Gera o projeto Android (Trusted Web Activity) a partir do manifest publicado no GitHub Pages.
const { TwaManifest, TwaGenerator, ConsoleLog } = require('@bubblewrap/core');
const path = require('path');
(async () => {
  const url = 'https://guilhermefrigo.github.io/foto-na-planta/manifest.webmanifest';
  const m = await TwaManifest.fromWebManifest(url);
  m.packageId = 'io.github.guilhermefrigo.fotonaplanta';
  m.name = 'Foto na Planta';
  m.launcherName = 'Foto na Planta';
  m.appVersionCode = Number(process.env.VERSION_CODE || 1);
  m.appVersionName = process.env.VERSION_NAME || '1.0.0';
  m.signingKey = { path: path.resolve('foto-na-planta.jks'), alias: 'fotonaplanta' };
  m.fallbackType = 'customtabs';
  m.enableSiteSettingsShortcut = true;
  m.orientation = 'any';
  const out = path.resolve(process.argv[2] || 'twa');
  await new TwaGenerator().createTwaProject(out, m, new ConsoleLog('twa'));
  console.log('Projeto gerado em', out);
})().catch(e => { console.error(e); process.exit(1); });
