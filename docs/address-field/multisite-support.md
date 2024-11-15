---
description: For projects with multiple sites, each site can store a different Address field value.
---

# Multisite Support

For projects with multiple sites, each site can store a different Address field value.

All native translation methods are supported:

<img class="dropshadow" :src="$withBase('/images/address-field/translatable.png')" alt="Screenshot of Address field translation options" width="345" style="margin-bottom:20px">

---
---

### Proximity Searches

It's worth noting that [proximity searches](/proximity-search/) are generally confined to a single site (unless otherwise specified).

This gives you the flexibility of having differing addresses for different sites, or allowing an address to exist in one site, but not others.

---
---

### Multisite Migration

When updating the plugin to **v4.6** (Craft 4) or **v5.1** (Craft 5), a significant migration will be run in the database. If your project contains multiple sites, all existing rows in the `googlemaps_addresses` table will be duplicated for each site.

Effectively, the number of existing table rows will be <span style="text-decoration:underline">multiplied</span> by the number of sites in your project.

This allows Craft to treat each Address as unique within each site.
