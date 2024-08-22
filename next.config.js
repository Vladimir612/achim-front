const withNextIntl = require("next-intl/plugin")(
  "./src/i18n.ts" // Precizirajte tačnu putanju do vašeg i18n fajla
);

module.exports = withNextIntl({
  // Ostala konfiguracija za Next.js
});
