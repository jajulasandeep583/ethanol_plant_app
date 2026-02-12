app_name = "ethanol_plant_app"
app_title = "Ethanol Plant App"
app_publisher = "Ethanol Plant Team"
app_description = "SCADA-style dashboard for ethanol plant monitoring and control"
app_email = "admin@ethanolplant.com"
app_license = "MIT"
app_version = "1.0.0"

# Required Apps
required_apps = ["frappe"]

# Includes in <head>
# ------------------

# Include js, css files in header of desk.html
app_include_css = "/assets/ethanol_plant_app/css/ethanol_plant.css"
app_include_js = "/assets/ethanol_plant_app/js/ethanol_plant.js"

# Include js, css files in header of web template
# web_include_css = "/assets/ethanol_plant_app/css/ethanol_plant.css"
# web_include_js = "/assets/ethanol_plant_app/js/ethanol_plant.js"

# Home Pages
# ----------

# Application home page (will override Website Desk homepage if set)
# home_page = "login"

# Website user home page (by Role)
# role_home_page = {
#     "Role": "home_page"
# }

# Generators
# ----------

# Automatically create page for each Item/Paper
# website_generators = ["Item Group", "Item", "BOM", "Sales Partner"]

# Jinja
# -----

# Add methods and filters to jinja environment
# jinja = {
#     "methods": "ethanol_plant_app.utils.jinja_methods",
#     "filters": "ethanol_plant_app.utils.jinja_filters"
# }

# Installation
# ------------

# Before_install = "ethanol_plant_app.install.before_install"
# after_install = "ethanol_plant_app.install.after_install"

# Uninstallation
# --------------

# before_uninstall = "ethanol_plant_app.uninstall.before_uninstall"
# after_uninstall = "ethanol_plant_app.uninstall.after_uninstall"

# Desk Notifications
# ------------------

# See frappe.core.notifications.get_notification_config

# notification_config = "ethanol_plant_app.notifications.get_notification_config"

# Permissions
# -----------

# Permissions evaluated in scripted ways

# permission_query_conditions = {
#     "Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }

# has_permission = {
#     "Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# -------------

# Override standard doctype classes

# override_doctype_class = {
#     "ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------

# Hook on document methods and events

# doc_events = {
#     "*": {
#         "on_update": "method",
#         "on_cancel": "method",
#         "on_trash": "method"
#     }
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#     "all": [
#         "ethanol_plant_app.tasks.all"
#     ],
#     "daily": [
#         "ethanol_plant_app.tasks.daily"
#     ],
#     "hourly": [
#         "ethanol_plant_app.tasks.hourly"
#     ],
#     "weekly": [
#         "ethanol_plant_app.tasks.weekly"
#     ],
#     "monthly": [
#         "ethanol_plant_app.tasks.monthly"
#     ],
# }

# Testing
# -------

# before_tests = "ethanol_plant_app.install.before_tests"

# Overriding Methods
# ------------------

# override_whitelisted_methods = {
#     "frappe.desk.doctype.event.event.get_events": "ethanol_plant_app.event.get_events"
# }

# Override whitelisted methods with own methods
# each override function accepts a `data` argument;
# generated from the request made by the client
# the client data format is:
# {
#     "method": "frappe.client.get_value",
#     "data": {
#         "doctype": "Item",
#         "fieldname": "item_code"
#     }
# }

# override_whitelisted_methods = {
#     "frappe.client.get_value": "ethanol_plant_app.overrides.get_value"
# }

# each overriding function accepts a `data` argument;
# generated from the request made by the client

# from frappe.client import delete_doc
# delete_doc = wrap_with(ethanol_plant_app.wrapper.check_user_permission)

# User Data Protection
# --------------------

# user_data_fields = [
#     {
#         "doctype": "{doctype_1}",
#         "filter_by": "{filter_by}",
#         "redact_fields": ["{field_1}", "{field_2}"],
#         "partial": 1,
#     },
# ]

# Authentication and Authorization
# --------------------------------

# auth_hooks = [
#     "ethanol_plant_app.auth.validate"
# ]
