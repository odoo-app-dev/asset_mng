# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import fields, models, api


class PartnerAssets(models.Model):
    _inherit = 'res.partner'

    assets = fields.One2many(
        'asset_mng.asset_mng', 'partner', string='Assets',

    )

class EmployeeAssets(models.Model):
    _inherit = 'hr.employee'

    assets = fields.One2many(
        'asset_mng.asset_mng', 'employee', string='Assets',

    )

