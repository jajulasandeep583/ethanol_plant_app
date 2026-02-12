# Ethanol Plant App

A SCADA-style dashboard application for ethanol plant monitoring and control, built on Frappe Framework.

## Overview

This app organizes all existing SCADA-style webpages into proper Frappe Desk Pages for easy access, deployment, and maintenance.

## Installation

### On Frappe Cloud

1. Push this app to GitHub
2. In Frappe Cloud, go to your site
3. Click "Install App"
4. Select "From GitHub" and enter your repository URL
5. The app will be automatically installed

### On Local Bench

```bash
# Navigate to your bench directory
cd ~/frappe-bench

# Get the app from GitHub
bench get-app https://github.com/YOUR_USERNAME/ethanol_plant_app

# Install on your site
bench --site YOUR_SITE install-app ethanol_plant_app

# Restart bench
bench restart
```

## Pages

All pages are accessible under `/app/` route after installation:

| Original Route | Frappe Route | Description |
|---------------|--------------|-------------|
| sa-rec | /app/sa_rec | SA Rec |
| fermentation-WITHOUTLAB | /app/fermentation_withoutlab | Fermentation Without Lab |
| page-check | /app/page_check | Page Check |
| clude-ai | /app/clude_ai | Clude AI |
| sand | /app/sand | Sand |
| my-shifts | /app/my_shifts | My Shifts |
| dryer | /app/dryer | Dryer |
| mojj-shift | /app/mojj_shift | Mojj Shift |
| quality | /app/quality | Quality |
| samp | /app/samp | Samp |
| san | /app/san | San |
| d-liquef | /app/d_liquef | D Liquef |
| recovery | /app/recovery | Recovery |
| ethanol | /app/ethanol | Ethanol |
| m-distillation | /app/m_distillation | M Distillation |
| d-distillation | /app/d_distillation | D Distillation |
| d-evaporation | /app/d_evaporation | D Evaporation |
| d-msdh | /app/d_msdh | D MSDH |

## Structure

```
ethanol_plant_app/
├── ethanol_plant_app/
│   ├── __init__.py
│   ├── hooks.py                 # App configuration
│   ├── modules.txt              # Module definition
│   ├── api/
│   │   ├── __init__.py
│   │   └── plant_api.py         # API endpoints
│   ├── ethanol_plant_app/
│   │   └── page/                # All Desk Pages
│   │       ├── sa_rec/
│   │       ├── fermentation_withoutlab/
│   │       ├── d_distillation/
│   │       └── ... (all pages)
│   ├── public/
│   │   ├── css/
│   │   │   └── ethanol_plant.css
│   │   └── js/
│   │       └── ethanol_plant.js
│   └── templates/
├── setup.py
├── pyproject.toml
├── requirements.txt
└── README.md
```

## Customization

### Adding Your Existing HTML Content

1. Navigate to the page directory: `ethanol_plant_app/ethanol_plant_app/page/{page_name}/`
2. Edit `{page_name}.js` to add your existing HTML content in the `init()` method
3. Add any custom CSS to `{page_name}.css`

### API Integration

The app includes placeholder API methods in `api/plant_api.py`. Customize these to connect to your actual SCADA data sources:

```python
@frappe.whitelist()
def get_area_data(area: str):
    # Connect to your SCADA system here
    return {
        "area": area,
        "status": "active",
        "data": your_scada_data,
        "timestamp": frappe.utils.now()
    }
```

### Adding New Pages

1. Create a new directory under `ethanol_plant_app/ethanol_plant_app/page/`
2. Add the required files: `{page_name}.json`, `{page_name}.js`, `{page_name}.html`, `{page_name}.css`
3. Rebuild assets: `bench build --app ethanol_plant_app`

## Requirements

- Frappe Framework >= 14.0
- Python >= 3.10

## License

MIT
