---
name: ui-ux-pro-max
description: Comprehensive design guide for web and mobile applications. Contains 67 styles, 161 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 16 technology stacks.
---

# ui-ux-pro-max

Comprehensive design guide for web and mobile applications. Searchable database with priority-based recommendations for UI styles, typography, color, UX guidelines, and landing patterns.

## Prerequisites

Check if Python is installed:

```bash
python3 --version || python --version
```

## How to Use This Skill

Use this skill for UI/UX decisions, reviews, or improvements.

### Design system (recommended)

```bash
python3 .windsurf/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system -p "Project Name"
```

### Domain search (style / color / typography / ux / landing)

```bash
python3 .windsurf/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain>
```

Domains: product, style, color, typography, landing, chart, ux, prompt

### Stack guidelines

```bash
python3 .windsurf/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack html-tailwind
```
