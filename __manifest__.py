# -*- coding: utf-8 -*-
{
    'name': "Asset Management",

    'summary': """
        """,

    'description': """
        Long description of module's purpose
    """,

    'author': "Arash Homayounfar",
    'website': "http://karvazendegi.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Service Desk/Service Desk',
    'application': True,
    'version': '0.2.2.4',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web', 'website', 'hr_work_place', 'hr'],

    # always loaded
    'data': [
        'security/security.xml',
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/settings.xml',
        'views/templates.xml',
        'views/hr_employee_views.xml',
        'report/report_template.xml',
        'report/report.xml',
        'wizard/report_wizard.xml',
    ],
    'assets': {
        # 'website.assets_editor': [
        #     'static/src/**/*',
        # ],

        'web.assets_frontend': [

            'asset_mng/static/src/css/my-style.scss',
        ],
        'web.assets_backend' : [

            'asset_mng/static/src/css/my-style.scss',
            # '/asset_mng/static/src/js/asset_barcode.js',
        ],
        'web.report_assets_common': [
            'asset_mng/static/src/css/my-style.scss',
        ],
    },
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'license': 'LGPL-3',

}
