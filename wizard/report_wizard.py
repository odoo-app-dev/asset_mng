# -*- coding: utf-8 -*-
from odoo import api, fields, models, _
from odoo import Command
from colorama import Fore

class AssetMngReportWizard(models.TransientModel):
    _name = 'asset_mng.report.wizard'
    _description = 'Report Wizard'

    location = fields.Many2one('hr.work.location')
    department = fields.Many2many('hr.department',)
    product = fields.Many2many('asset_mng.product',
                               default=lambda self: [Command.set(self.env['asset_mng.product'].search([]).ids)])

    @api.onchange('location')
    def _department_domain(self):
        assets = self.env['asset_mng.asset_mng'].search([('location', '=', self.location.id)])
        domain = {'department': [('id', 'in', assets.parent_department.ids)]}
        self.department = [Command.set(assets.parent_department.ids)]
        return {'domain': domain}

    def print_asset_reprot(self):
        read_form = self.read()[0]
        data = {
            'form_data': read_form,
            # 'arash': ['arash', 'barbod'],
            # 'context': self.env.context,
        }
        print(Fore.GREEN, '##################### print_asset_reprot')
        print(Fore.BLUE, data, Fore.RESET)
        return self.env.ref('asset_mng.action_report_asset_mng_pc_list').report_action(self, data=data)
        # return self.env.ref('asset_mng.action_report_asset_mng_pc_list')._render_qweb_pdf()



    #
    # # #############################################################################
    # @api.model
    # def default_get(self, fields_list):
    #     active_ids = self._context.get('active_ids')
    #     print(Fore.RED, '999999999999999999999999999999999999999999')
    #     print(Fore.RED, 'active_ids',active_ids)
    #
    #
    #     return super(AssetMngReportWizard, self).default_get(fields)