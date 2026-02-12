frappe.pages['san'].on_page_load = function(wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'San',
        single_column: true
    });

    // Initialize the page
    new EthanolPlantPage(page, 'san');
};

class EthanolPlantPage {
    constructor(page, page_name) {
        this.page = page;
        this.page_name = page_name;
        this.$wrapper = $(page.body);

        this.init();
    }

    init() {
        // Add page content container
        this.$wrapper.html(`
            <div class="ethanol-page-container" id="san-container">
                <div class="page-header">
                    <h2>San</h2>
                    <div class="page-toolbar">
                        <button class="btn btn-primary btn-sm refresh-btn">
                            <i class="fa fa-refresh"></i> Refresh
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="loading-indicator">
                        <i class="fa fa-spinner fa-spin"></i> Loading data...
                    </div>
                    <div class="data-container" style="display: none;">
                        <!-- Your existing HTML content goes here -->
                        <div class="scada-dashboard">
                            <div class="status-panel">
                                <h4>Status</h4>
                                <div class="status-indicator active">
                                    <span class="status-dot"></span>
                                    <span class="status-text">Active</span>
                                </div>
                            </div>
                            <div class="metrics-panel">
                                <h4>Metrics</h4>
                                <div class="metrics-grid">
                                    <!-- Metrics will be populated here -->
                                </div>
                            </div>
                            <div class="controls-panel">
                                <h4>Controls</h4>
                                <div class="controls-grid">
                                    <!-- Controls will be populated here -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);

        this.bind_events();
        this.load_data();
    }

    bind_events() {
        let me = this;

        // Refresh button
        this.$wrapper.find('.refresh-btn').on('click', function() {
            me.load_data();
        });
    }

    load_data() {
        let me = this;

        // Show loading
        this.$wrapper.find('.loading-indicator').show();
        this.$wrapper.find('.data-container').hide();

        // Call API to get data
        frappe.call({
            method: 'ethanol_plant_app.api.plant_api.get_area_data',
            args: {
                area: this.page_name
            },
            callback: function(r) {
                me.$wrapper.find('.loading-indicator').hide();
                me.$wrapper.find('.data-container').show();

                if (r.message) {
                    me.render_data(r.message);
                }
            },
            error: function() {
                me.$wrapper.find('.loading-indicator').hide();
                me.$wrapper.find('.data-container').show();
                frappe.msgprint(__('Error loading data'));
            }
        });
    }

    render_data(data) {
        // Customize this method to render your SCADA data
        console.log('Page data:', data);

        // Example: Update metrics
        let metrics_html = `
            <div class="metric-card">
                <div class="metric-label">Status</div>
                <div class="metric-value">${data.status || 'N/A'}</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Last Updated</div>
                <div class="metric-value">${data.timestamp || 'N/A'}</div>
            </div>
        `;
        this.$wrapper.find('.metrics-grid').html(metrics_html);
    }
}
