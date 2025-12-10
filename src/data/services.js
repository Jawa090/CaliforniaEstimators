export const servicesData = [
    {
        id: 'construction-takeoff',
        title: 'Construction Takeoff Services',
        shortDesc: 'Detailed material takeoffs for all trades.',
        description: 'Our construction takeoff services provide contractors with precise material quantities to ensure accurate bidding and ordering. We define the logic and methodology for every count, ensuring nothing is missed from the blueprints. With over 15 years of experience, we have perfected our takeoff process to deliver industry-leading accuracy rates of 98.5%.',
        methodology: 'We strictly adhere to CSI MasterFormat divisions and follow standardized takeoff procedures. Our estimators transpose 2D drawings into 3D quantities, accounting for waste factors, site conditions, and constructability adjustments. We use advanced digital tools including PlanSwift, Bluebeam Revu, and custom Excel templates to ensure consistency and accuracy across all projects.',
        benefits: [
            'Eliminate material shortages with precise quantities',
            'Reduce waste with exact ordering calculations',
            'Win more bids with confident pricing strategies',
            'Save 15-20 hours per project on manual takeoffs',
            'Get detailed waste factor calculations',
            'Receive color-coded markup drawings for verification'
        ],
        included: [
            'Lumber & Framing Takeoffs (Board feet, Linear feet)',
            'Concrete & Masonry Quantities (Cubic yards, Square feet)',
            'Drywall & Insulation Counts (Sheets, Rolls, Linear feet)',
            'Roofing & Siding Materials (Squares, Bundles, Accessories)',
            'Flooring & Tile Areas (Square feet, Boxes, Trim pieces)',
            'Hardware & Accessories (Fasteners, Brackets, Connectors)',
            'Excavation & Site Work (Cubic yards, Tons)',
            'Windows & Doors (Units, Hardware, Trim)',
            'Electrical Rough-in (Outlets, Switches, Wire footage)',
            'Plumbing Rough-in (Fixtures, Pipe footage, Fittings)'
        ],
        process: 'We use PlanSwift and Bluebeam to digitally measure all quantities with pixel-perfect accuracy. Our senior estimators review every item using a 3-point verification system. Each takeoff includes detailed assembly breakdowns, waste calculations, and constructability notes.',
        specialFeatures: [
            'Color-coded takeoff drawings for easy verification',
            'Detailed assembly breakdowns by CSI division',
            'Waste factor calculations based on project type',
            'Constructability notes and recommendations',
            'Integration with popular estimating software',
            'Rush delivery available (12-hour turnaround)'
        ],
        caseStudy: {
            title: 'Multi-Family Housing Project - Los Angeles',
            description: 'Completed takeoff for 120-unit apartment complex, delivering precise quantities that resulted in 8% cost savings through optimized material ordering.',
            results: ['$180,000 saved in material costs', '99.2% accuracy achieved', 'Delivered in 36 hours']
        },
        pricing: 'Starting from $200 per project',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'commercial',
        title: 'Commercial Estimating Services',
        shortDesc: 'Comprehensive cost estimates for commercial builds.',
        description: 'From office buildings to retail centers, our commercial estimating services cover all trades with institutional-grade accuracy. We provide CSI division-based estimates perfect for GC bidding, ensuring you have a complete picture of project scope, risks, and opportunities. Our commercial team has estimated over $2.5 billion in commercial projects across California.',
        methodology: 'Commercial projects require deep understanding of code requirements, commercial-grade materials, and complex systems integration. We factor in prevailing wage rates, union rules, permit costs, and commercial overheads. Our estimates include detailed quantity surveys, unit cost analysis, and risk assessments specific to commercial construction.',
        benefits: [
            'Detailed CSI Division Breakdowns (50 divisions)',
            'Bid-Review Meetings with senior estimators included',
            'Fast turnaround for tight tender deadlines',
            'Prevailing wage rate calculations',
            'Code compliance cost analysis',
            'Value engineering recommendations',
            'Risk assessment and contingency planning',
            'Integration with major GC estimating platforms'
        ],
        included: [
            'Site Work & Landscaping (Excavation, Utilities, Paving)',
            'Structural Steel & Metals (Beams, Columns, Connections)',
            'Doors, Windows & Glazing (Storefront, Curtain walls)',
            'MEP Systems Overview (HVAC, Electrical, Plumbing)',
            'Finishes & Specialties (Flooring, Ceilings, Millwork)',
            'Elevators & Conveying Systems (Passenger, Freight)',
            'Fire Protection Systems (Sprinklers, Alarms, Suppression)',
            'Technology Systems (Data, Security, AV)',
            'Roofing & Waterproofing (Membrane, Insulation)',
            'Permit & Inspection Costs',
            'General Conditions & Overhead',
            'Bonds & Insurance Requirements'
        ],
        process: 'We break down projects by CSI divisions using RSMeans data and local market pricing. Each estimate includes detailed quantity surveys, unit cost analysis, and comprehensive Excel deliverables with backup documentation.',
        specialFeatures: [
            'RSMeans database integration for accurate pricing',
            'Local subcontractor pricing verification',
            'Permit and inspection cost calculations',
            'Value engineering opportunities identification',
            'Schedule impact analysis',
            'Bid day support and clarifications'
        ],
        caseStudy: {
            title: 'Tech Campus Office Building - San Jose',
            description: 'Estimated 200,000 sq ft office complex with advanced MEP systems, helping client win $5.2M contract with competitive yet profitable pricing.',
            results: ['Won $5.2M contract', '12% profit margin achieved', 'Completed in 72 hours']
        },
        pricing: 'Starting from $300 per project',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'residential',
        title: 'Residential Estimating Services',
        shortDesc: 'Estimates for new homes, renovations, and ADUs.',
        description: 'We help home builders, remodelers, and architects with quick and accurate estimates that win projects and maintain healthy profit margins. Whether it\'s a single-family home, multi-unit development, ADU, or major renovation, we provide builder-ready estimates that integrate seamlessly with your workflow and client presentations.',
        methodology: 'For residential projects, we focus on builder-centric details that matter most: clear framing lists, detailed trim packages, and visible finishes that drive client costs. We understand the residential market dynamics and provide estimates formatted for homeowner presentations, permit applications, and subcontractor bidding.',
        benefits: [
            'Quick, budget-friendly quotes for competitive advantage',
            'Format compatible with BuilderTrend/CoConstruct/Buildermt',
            'Client-ready proposal formats with professional presentation',
            'Detailed allowance schedules for client selections',
            'Change order pricing templates',
            'Permit-ready cost breakdowns',
            'Subcontractor bid comparison sheets',
            'Homeowner financing package support'
        ],
        included: [
            'Foundation & Footings (Concrete, Rebar, Forming)',
            'Framing & Sheathing (Lumber lists, Hardware, Fasteners)',
            'Exterior Finishes (Siding, Roofing, Windows, Doors)',
            'Interior Fit-out (Drywall, Flooring, Paint, Trim)',
            'Decks & Porches (Framing, Decking, Railings)',
            'Kitchen & Bath Fixtures (Cabinets, Countertops, Appliances)',
            'Electrical Systems (Rough-in, Fixtures, Panels)',
            'Plumbing Systems (Rough-in, Fixtures, Water heater)',
            'HVAC Systems (Ductwork, Units, Thermostats)',
            'Insulation & Energy Efficiency (Batts, Blown-in, Vapor barriers)',
            'Permits & Inspections (Building, Electrical, Plumbing)',
            'Site Work & Utilities (Excavation, Driveways, Landscaping)'
        ],
        process: 'Send us your PDF plans and specifications. We quantify all materials, apply current local labor rates, and deliver a comprehensive estimate with detailed breakdowns perfect for client presentations and subcontractor bidding.',
        specialFeatures: [
            'Homeowner-friendly presentation formats',
            'Allowance schedules for client selections',
            'Change order pricing templates',
            'Integration with popular builder software',
            'California Title 24 compliance calculations',
            'Energy efficiency upgrade options and costs'
        ],
        caseStudy: {
            title: 'Custom Home Project - Marin County',
            description: 'Provided detailed estimate for 3,500 sq ft custom home, helping builder secure contract and maintain 18% profit margin through accurate pricing.',
            results: ['$850,000 project secured', '18% profit margin maintained', 'Zero change order disputes']
        },
        pricing: 'Starting from $150 per project',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop'
    },
    {
        id: 'industrial',
        title: 'Industrial Estimating Services',
        shortDesc: 'Specialized estimation for factories and plants.',
        description: 'Industrial projects demand specialized expertise in heavy construction, complex systems integration, and regulatory compliance. Our industrial estimating team brings decades of experience in manufacturing facilities, warehouses, processing plants, and distribution centers. We understand the unique challenges of industrial construction including heavy equipment installation, specialized utilities, and stringent safety requirements.',
        methodology: 'Industrial estimating requires deep technical knowledge of structural systems, heavy MEP installations, and specialized equipment. We coordinate with equipment manufacturers, analyze complex utility requirements, and factor in industrial-grade materials and installation methods. Our estimates include detailed phasing plans to minimize operational disruptions.',
        benefits: [
            'Specialized knowledge of industrial construction methods',
            'Equipment manufacturer coordination and pricing',
            'Regulatory compliance cost analysis',
            'Phased construction planning to minimize downtime',
            'Heavy equipment and crane requirement analysis',
            'Specialized trade contractor network access',
            'Environmental and safety compliance costs',
            'Utility infrastructure upgrade assessments'
        ],
        included: [
            'Heavy Foundation Work (Mass concrete, Deep foundations, Equipment pads)',
            'Pre-engineered Metal Buildings (PEMB systems, Crane rails, Mezzanines)',
            'Industrial MEP Systems (High-voltage electrical, Process piping, HVAC)',
            'Equipment Pads & Foundations (Machinery foundations, Vibration isolation)',
            'Site Utilities (High-capacity electrical, Process water, Waste systems)',
            'Specialized Flooring (Epoxy, Polished concrete, Chemical-resistant)',
            'Fire Protection Systems (Deluge, Foam, Gas suppression)',
            'Material Handling Systems (Conveyors, Cranes, Hoists)',
            'Environmental Controls (Dust collection, Ventilation, Scrubbers)',
            'Security & Access Control (Fencing, Gates, Surveillance)',
            'Regulatory Compliance (Permits, Environmental, Safety)',
            'Commissioning & Testing (Systems integration, Performance testing)'
        ],
        process: 'We analyze structural and MEP drawings in detail, coordinate with equipment suppliers, and account for the complexity of industrial systems. Our process includes site visits when possible to understand existing conditions and operational requirements.',
        specialFeatures: [
            'Equipment manufacturer coordination',
            'Regulatory compliance expertise',
            'Phased construction planning',
            'Operational impact minimization strategies',
            'Specialized contractor network',
            'Environmental assessment integration'
        ],
        caseStudy: {
            title: 'Food Processing Facility - Central Valley',
            description: 'Estimated 150,000 sq ft food processing plant with specialized equipment, clean rooms, and complex utility requirements, helping client secure $12M project.',
            results: ['$12M project awarded', 'Zero regulatory compliance issues', 'On-time, on-budget delivery']
        },
        pricing: 'Custom Quote Required',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'mep',
        title: 'MEP Estimating Services',
        shortDesc: 'Mechanical, Electrical, and Plumbing estimates.',
        description: 'Our MEP estimators are licensed professionals with specialized expertise in mechanical, electrical, and plumbing systems. We provide detailed quantity takeoffs and cost estimates for complex building systems, ensuring your MEP bids are competitive, accurate, and profitable. Our team includes licensed electricians, plumbers, and HVAC technicians who understand real-world installation challenges.',
        methodology: 'MEP estimating requires specialized knowledge of system design, code requirements, and installation methods. We use trade-specific software to trace every linear foot of pipe, wire, and ductwork. Our estimates include detailed material lists, labor calculations, and coordination requirements between trades.',
        benefits: [
            'Licensed professionals with field experience',
            'Trade-specific software for accurate measurements',
            'Detailed coordination and clash detection',
            'Code compliance verification and costs',
            'Energy efficiency analysis and rebate identification',
            'Value engineering recommendations',
            'Detailed labor productivity analysis',
            'Integration with BIM models when available'
        ],
        included: [
            'HVAC Ductwork & Units (Supply, Return, Exhaust systems)',
            'Plumbing Pipe & Fixtures (Water, Waste, Vent, Gas systems)',
            'Electrical Lighting & Power (Panels, Feeders, Branch circuits)',
            'Fire Protection Systems (Sprinklers, Alarms, Suppression)',
            'Low Voltage Systems (Data, Security, AV, Controls)',
            'Medical Gas Systems (Oxygen, Vacuum, Compressed air)',
            'Process Piping (Steam, Chilled water, Specialty gases)',
            'Energy Management Systems (BMS, Controls, Sensors)',
            'Renewable Energy Systems (Solar, Battery storage)',
            'Testing & Commissioning (System startup, Performance testing)',
            'Permits & Inspections (Trade permits, Code compliance)',
            'Coordination & Support (Hangers, Sleeves, Penetrations)'
        ],
        process: 'We trace and count every linear foot of pipe, wire, and ductwork using specialized MEP software. Our licensed estimators review all systems for code compliance, coordination issues, and installation efficiency.',
        specialFeatures: [
            'Licensed professional review and stamping',
            'BIM coordination and clash detection',
            'Energy code compliance analysis',
            'Rebate and incentive identification',
            'Commissioning and testing cost inclusion',
            'Trade coordination scheduling'
        ],
        caseStudy: {
            title: 'Medical Office Building - Orange County',
            description: 'Estimated complex MEP systems for 50,000 sq ft medical facility including medical gas, specialized HVAC, and emergency power systems.',
            results: ['$1.8M MEP contract secured', '15% profit margin achieved', 'Zero code compliance issues']
        },
        pricing: 'Starting from $250 per trade',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop'
    },
    {
        id: 'electrical',
        title: 'Electrical Estimating Services',
        shortDesc: 'Exact counts for switches, outlets, fixtures, and more.',
        description: 'Don\'t rely on outdated square foot pricing methods. Get precise takeoff counts for all electrical devices, panels, feeders, and systems from our team of licensed electricians and electrical estimators. We provide detailed electrical estimates that account for code requirements, load calculations, and real-world installation conditions.',
        methodology: 'Electrical estimating requires precise device counts, accurate wire measurements, and thorough understanding of NEC code requirements. We use specialized electrical estimating software to trace circuits, calculate loads, and ensure code compliance. Our estimates include detailed panel schedules, load calculations, and installation labor analysis.',
        benefits: [
            'Licensed electrician review and verification',
            'Precise device counts and wire measurements',
            'NEC code compliance verification',
            'Load calculation and panel sizing',
            'Energy efficiency analysis and rebates',
            'Smart building technology integration',
            'Detailed labor productivity calculations',
            'Permit and inspection cost inclusion'
        ],
        included: [
            'Lighting Fixtures & Controls (LED, Smart controls, Sensors)',
            'Power Distribution (Panels, Feeders, Branch circuits)',
            'Fire Alarm Systems (Devices, Panels, Notification)',
            'Data & Communications (Cat6, Fiber, Wireless infrastructure)',
            'Security Systems (Cameras, Access control, Intrusion)',
            'Emergency Power (Generators, UPS, Transfer switches)',
            'Motor Controls (Starters, VFDs, Disconnect switches)',
            'Specialty Systems (Nurse call, Paging, Clock systems)',
            'Renewable Energy (Solar PV, Battery storage, EV charging)',
            'Testing & Commissioning (Megger testing, Load testing)',
            'Permits & Inspections (Electrical permits, Plan check fees)',
            'Grounding & Bonding (Ground rods, Bonding conductors)'
        ],
        process: 'We use electrical-specific software including ConEst, McCormick, and Accubid to count devices and measure wire runs with precision. Our licensed electricians review all calculations for code compliance and constructability.',
        specialFeatures: [
            'Licensed electrician review and stamping',
            'Load calculation and panel schedule creation',
            'Energy code compliance analysis',
            'Smart building technology integration',
            'Utility rebate and incentive identification',
            'Arc flash and safety analysis'
        ],
        caseStudy: {
            title: 'Retail Shopping Center - Sacramento',
            description: 'Estimated electrical systems for 80,000 sq ft shopping center with complex lighting controls, security systems, and tenant power distribution.',
            results: ['$650,000 electrical contract won', '22% profit margin achieved', 'Zero change orders due to accuracy']
        },
        pricing: 'Starting from $200 per project',
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2669&auto=format&fit=crop'
    }
];
