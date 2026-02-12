/* Ethanol Plant App - Global JavaScript */

// Global namespace for the app
window.EthanolPlantApp = window.EthanolPlantApp || {};

// Utility functions
EthanolPlantApp.utils = {
    // Format timestamp
    formatTimestamp: function(timestamp) {
        if (!timestamp) return 'N/A';
        return frappe.datetime.str_to_user(timestamp);
    },

    // Format number with units
    formatNumber: function(value, decimals = 2, unit = '') {
        if (value === null || value === undefined) return 'N/A';
        const formatted = parseFloat(value).toFixed(decimals);
        return unit ? `${formatted} ${unit}` : formatted;
    },

    // Get status class
    getStatusClass: function(status) {
        const statusMap = {
            'active': 'active',
            'running': 'active',
            'operational': 'active',
            'inactive': 'inactive',
            'stopped': 'inactive',
            'offline': 'inactive',
            'warning': 'warning',
            'alert': 'warning',
            'maintenance': 'warning'
        };
        return statusMap[status?.toLowerCase()] || 'active';
    },

    // Show notification
    notify: function(message, type = 'info') {
        frappe.show_alert({
            message: message,
            indicator: type === 'error' ? 'red' : type === 'warning' ? 'orange' : 'green'
        });
    }
};

// API helper
EthanolPlantApp.api = {
    // Get plant status
    getPlantStatus: function(callback) {
        frappe.call({
            method: 'ethanol_plant_app.api.plant_api.get_plant_status',
            callback: function(r) {
                if (callback) callback(r.message);
            }
        });
    },

    // Get area data
    getAreaData: function(area, callback) {
        frappe.call({
            method: 'ethanol_plant_app.api.plant_api.get_area_data',
            args: { area: area },
            callback: function(r) {
                if (callback) callback(r.message);
            }
        });
    },

    // Get shift data
    getShiftData: function(shiftType, callback) {
        frappe.call({
            method: 'ethanol_plant_app.api.plant_api.get_shift_data',
            args: { shift_type: shiftType },
            callback: function(r) {
                if (callback) callback(r.message);
            }
        });
    },

    // Get quality data
    getQualityData: function(callback) {
        frappe.call({
            method: 'ethanol_plant_app.api.plant_api.get_quality_data',
            callback: function(r) {
                if (callback) callback(r.message);
            }
        });
    }
};

// Auto-refresh functionality
EthanolPlantApp.autoRefresh = {
    intervals: {},

    start: function(pageId, callback, intervalMs = 30000) {
        this.stop(pageId);
        this.intervals[pageId] = setInterval(callback, intervalMs);
    },

    stop: function(pageId) {
        if (this.intervals[pageId]) {
            clearInterval(this.intervals[pageId]);
            delete this.intervals[pageId];
        }
    },

    stopAll: function() {
        Object.keys(this.intervals).forEach(pageId => this.stop(pageId));
    }
};

// Cleanup on page change
$(document).on('page-change', function() {
    EthanolPlantApp.autoRefresh.stopAll();
});

console.log('Ethanol Plant App loaded');
