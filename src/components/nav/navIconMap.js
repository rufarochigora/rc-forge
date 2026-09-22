// src/components/nav/navIconMap.js
//
// Maps the `icon` keys used in config/navigation.js to icon components.
// To use a new icon in the sidebar, add it to navIcons.jsx and list it here.

import { HomeIcon, PackageIcon } from '../icons';
import { ChipIcon, BoltIcon, PhoneIcon, ConduitIcon } from './navIcons';

export const NAV_ICONS = {
  home: HomeIcon,
  chip: ChipIcon,
  bolt: BoltIcon,
  package: PackageIcon,
  phone: PhoneIcon,
  conduit: ConduitIcon,
};
