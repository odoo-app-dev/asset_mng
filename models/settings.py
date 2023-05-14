# -*- coding: utf-8 -*-

from odoo import models, fields, api, _


# #################################################################################################
class AssetMngSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    asset_id_length = fields.Integer(default=10, config_parameter='asset_mng.asset_id_length')
    pattern = fields.Char(default="(^6[0-9]{3})(-)([0-9]{6})", config_parameter='asset_mng.pattern')
    pattern_sample = fields.Char(default="6nnn-nnnnnn", config_parameter='asset_mng.pattern_sample')




