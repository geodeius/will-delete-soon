# GamePark dashboard

A responsive, standalone React prototype for transaction monitoring and automated SMS replenishment.

## UI foundation

Uses actual shadcn/ui source components added by the official `shadcn@4.23.0` CLI with the `new-york` style and neutral theme. Configuration is in `components.json`; generated component sources live in `src/components/ui/`.

Installed components: Button, Card, Badge, Sheet, Input, Select, Table, Tabs, Alert, Avatar, Separator, Checkbox, Sidebar, Tooltip, and Skeleton. `src/components/dashboard-controls.jsx` composes the official Select, Sheet, and Badge components for product-specific use. Generated utility imports resolve to `@/lib/utils`. Product layout and semantic status colors are in `src/styles.css`; neutral theme tokens are in `src/shadcn-theme.css`.

## Development

```sh
npm ci
npm run dev
npm run build
```

## Prototype boundaries

All records are generated sample data anchored to 27 October 2026. Filters, CSV export, record sheets, keyboard-operable tabs/selects, responsive navigation, and local preference storage are functional. Preferences are saved only in browser localStorage. No live payment, SMS, notification delivery, user authentication, or backend integrations are configured.

## Component license

shadcn/ui is MIT licensed: https://github.com/shadcn-ui/ui/blob/main/LICENSE.md
