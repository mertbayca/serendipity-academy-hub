     {/* Butlerapp Course Table - Ultra Modern Design */}
        <div className="w-full bg-white/80 backdrop-blur-xl border border-gray-100/50 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-1">Book Your Course</h3>
            <p className="text-sm text-gray-500">Select your preferred dates and modules</p>
          </div>
          
          <div className="websail overflow-hidden">
            <style jsx>{`
              .websail {
                --ws-primary-color: #1f2937;
                --ws-primary-color-contrast: #ffffff;
                --ws-secondary-color: #f9fafb;
                --ws-link-color: #3b82f6;
                --ws-link-hover-color: #1d4ed8;
                --ws-input-border-radius: 8px;
                --ws-input-border-color: #e5e7eb;
                --ws-input-bg: #ffffff;
                --ws-input-color: #111827;
                --ws-input-margin: 16px;
                --ws-button-default-bg: #f9fafb;
                --ws-button-default-text: #6b7280;
                --ws-button-hover-bg: #f3f4f6;
                --ws-button-focus-bg: #e5e7eb;
              }
              
              .websail table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                background: transparent;
              }
              
              .websail th {
                background: transparent;
                color: #6b7280;
                font-weight: 500;
                padding: 12px 16px;
                text-align: left;
                font-size: 12px;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                border-bottom: 1px solid #f3f4f6;
              }
              
              .websail td {
                background: transparent;
                padding: 20px 16px;
                border-bottom: 1px solid #f9fafb;
                font-size: 14px;
                color: #111827;
                transition: all 0.2s ease;
                vertical-align: middle;
              }
              
              .websail tr:hover td {
                background: #fafbfc;
              }
              
              .websail tr:last-child td {
                border-bottom: none;
              }
              
              .websail a {
                background: transparent;
                color: #6b7280;
                padding: 8px 16px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 500;
                font-size: 13px;
                transition: all 0.15s ease;
                display: inline-block;
                margin-right: 12px;
                border: 1px solid #e5e7eb;
              }
              
              .websail a:hover {
                background: #f9fafb;
                border-color: #d1d5db;
                color: #374151;
              }
              
              .websail a:last-child {
                background: #111827;
                color: white;
                border: 1px solid #111827;
                margin-right: 0;
              }
              
              .websail a:last-child:hover {
                background: #000000;
                border-color: #000000;
              }
              
              .websail select, .websail input {
                background: white;
                border: 1px solid #e5e7eb;
                border-radius: 6px;
                padding: 8px 12px;
                font-size: 14px;
                transition: all 0.2s ease;
                box-shadow: none;
              }
              
              .websail select:focus, .websail input:focus {
                border-color: #3b82f6;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                outline: none;
              }
              
              .websail .ws-form-description {
                background: #f9fafb;
                border-radius: 8px;
                padding: 16px;
                border: 1px solid #f3f4f6;
                margin-top: 12px;
                font-size: 13px;
                color: #6b7280;
              }
              
              .websail h4 {
                font-size: 14px;
                font-weight: 600;
                color: #111827;
                margin: 0 0 12px 0;
              }
              
              /* Hide the category title since it's redundant */
              .websail > h4:first-child {
                display: none;
              }
              
              /* Style the dropdown */
              .websail select {
                appearance: none;
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
                background-position: right 8px center;
                background-repeat: no-repeat;
                background-size: 16px;
                padding-right: 32px;
              }
              
              /* Hide the Butlerapp branding button */
              .websail a[href="https://www.butlerapp.de"],
              .websail a[href*="butlerapp.de"]:not([href*="/courses"]):not([href*="/bookcart"]),
              .websail button:has-text("Kursverwaltung"),
              .websail a:has-text("Kursverwaltung"),
              .websail *:contains("Kursverwaltung von") {
                display: none !important;
              }
              
              /* Hide the branding button more specifically */
              .websail > a:last-child,
              .websail div > a:only-child[href*="butlerapp"] {
                display: none !important;
              }
            `}</style>
            
            <wscourselist 
              className="ws-element" 
              fcourses="ethics_as_strategy"
              data-ftagsnot="intern"
            ></wscourselist>
          </div>
        </div>
      </div>