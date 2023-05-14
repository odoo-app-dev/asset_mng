# -*- coding: utf-8 -*-

import re

from colorama import Fore

from odoo import models, fields, api
from odoo.exceptions import ValidationError


# #############################################################################
class AssetMng(models.Model):
    _name = 'asset_mng.asset_mng'
    _description = 'asset_mng.asset_mng'

    _inherit = ['mail.thread', 'mail.activity.mixin']
    _rec_name = 'asset_id'

    active = fields.Boolean(default=True)
    com = fields.Boolean(compute='_com_field', default=False)
    # TODO default value, the last asset_id
    state = fields.Selection([('read', 'read'), ('write', 'write')],
                             string='Status', index=True, copy=False, invisible=True, default="read",
                             readonly=True, compute="_access_rule")
    availability = fields.Selection([('available', 'Available'), ('repair', 'Under Repair'), ('useless', 'Useless')],
                                    string='Availability', store=True, copy=False, default="available")
    performance = fields.Many2one('asset_mng.performance', )
    is_asset1 = fields.Boolean(default=True, store=True)
    asset_id = fields.Char(string="Asset ID", required=True,  help="", store=True, tracking=True,
                           readonly=True, states={'write': [('readonly', False)]},)
    pattern_sample = fields.Char(compute="_pattern_sample")
    product = fields.Many2one('asset_mng.product', string="Product Name", tracking=True,
                              readonly=True, states={'write': [('readonly', False)]},)
    product_brand = fields.Many2one('asset_mng.brand', string="Brand", tracking=True,
                                    readonly=True, states={'write': [('readonly', False)]},)
    product_model = fields.Many2one('asset_mng.model', string="Model",  tracking=True,
                                    readonly=True, states={'write': [('readonly', False)]},)
    serial_number = fields.Char(string="Serial Number",  tracking=True,
                                readonly=True, states={'write': [('readonly', False)]},)
    device_name = fields.Char(string="device Name", tracking=True, readonly=True,
                                states={'write': [('readonly', False)]},)
    mac_address = fields.Char(string="MAC Address", tracking=True, readonly=True,
                                states={'write': [('readonly', False)]},)
    ip_address = fields.Char(string="IP Address", tracking=True, readonly=True,
                            states={'write': [('readonly', False)]},)
    network_port = fields.Char(string="Network Port", tracking=True, readonly=True,
                                states={'write': [('readonly', False)]},)
    company = fields.Many2one('res.company', string="Company", tracking=True,)
    location = fields.Many2one('hr.work.location', string="Location", tracking=True,)
    place = fields.Many2one('hr.work.place', string="Place",  tracking=True,)
    partner = fields.Many2one('res.partner', tracking=True,)
    employee = fields.Many2one('hr.employee', string="Employee", tracking=True,)
    parent_department = fields.Many2one('hr.department', string="Parent Department",)
    date = fields.Date(string='Assign date', tracking=True,)
    description = fields.Html(tracking=True,)
    temp = fields.Text()

    # #############################################################################
    @api.model
    def _com_field(self):
        for rec in self:
            rec.com = True
            # rec.description = str(rec.temp)

        records = self.search([])
        for rec in records:
            department = rec.employee.department_id
            parent_department = rec.employee.department_id.parent_id
            # todo: CEO department must be selectable instead of hardcore
            if parent_department.id == 4:
                department = rec.employee.department_id
            else:
                for _ in range(20):
                    if parent_department.parent_id.id == 4:
                        department = parent_department
                        break
                    else:
                        pass
            # print(Fore.RED, department.name, Fore.RESET)
            rec.write({'parent_department': department.id})
            # rec.parent_department = department.id

    # #############################################################################
    # @api.onchange('employee','com')
    # @api.depends('employee')
    # def _department(self):
    #     for rec in self:
    #         department = rec.employee.department_id
    #         parent_department = rec.employee.department_id.parent_id
    #         # todo: CEO department must be selectable instead of hardcore
    #         if parent_department.id == 4:
    #             department = rec.employee.department_id
    #         else:
    #             for _ in range(20):
    #                 if parent_department.parent_id.id == 4:
    #                     department = parent_department
    #                     break
    #                 else:
    #                     pass
    #         # print(Fore.RED, department.name, Fore.RESET)
    #         rec.write({'parent_department': department.id})
    #         # rec.parent_department = department.id

    # #############################################################################
    @api.onchange('partner')
    def _employee(self):
        print(self.partner.id)
        # user_id = self.env['res.users'].search([('partner_id','=',self.partner.id)]).id
        # employee_id = self.env['hr.employee'].search([('user_id','=',user_id),('user_id','!=',False)]).id
        # self.employee = self.env['hr.employee'].search([('user_id','=',user_id),('user_id','!=',False)]).department_id.name

    # #############################################################################
    def _pattern_sample(self):
        self.pattern_sample = self.env['ir.config_parameter'].sudo().get_param('asset_mng.pattern_sample')

    # #############################################################################
    @api.onchange('is_asset1')
    def _asset_id(self):
        self.asset_id = ""


    # #############################################################################
    @api.model
    def create(self, vals):
        print(f'\n create {vals} \n')
        asset_id_length = int(self.env['ir.config_parameter'].sudo().get_param('asset_mng.asset_id_length'))
        pattern = self.env['ir.config_parameter'].sudo().get_param('asset_mng.pattern')
        pattern_sample = self.env['ir.config_parameter'].sudo().get_param('asset_mng.pattern_sample')

        asset_ids = 0
        if vals.get('is_asset1'):
            if vals.get('asset_id') and len(vals.get('asset_id')) != asset_id_length:
                raise ValidationError(f"Asset ID length must be {asset_id_length}")
            elif self.search([('asset_id', '=', vals.get('asset_id'))]):
                raise ValidationError("Duplicate Asset ID error")
            elif not re.search(pattern, str(vals.get('asset_id'))):
                raise ValidationError(f"Asset ID must follow the pattern:\n {pattern_sample}")
        else:
            vals['asset_id'] = "No Label"
        return super(AssetMng, self).create(vals)

    # #############################################################################
    def write(self, vals):
        asset_id_length = int(self.env['ir.config_parameter'].sudo().get_param('asset_mng.asset_id_length'))
        pattern = self.env['ir.config_parameter'].sudo().get_param('asset_mng.pattern')
        pattern_sample = self.env['ir.config_parameter'].sudo().get_param('asset_mng.pattern_sample')
        if vals.get('asset_id'):
            if len(vals.get('asset_id')) != asset_id_length:
                raise ValidationError(f"Asset ID length must be {asset_id_length}")
            elif self.search([('asset_id', '=', vals.get('asset_id'))]):
                raise ValidationError("Duplicate Asset ID error")
            elif not re.search(pattern, str(vals.get('asset_id'))):
                raise ValidationError(f"Asset ID must follow the pattern: \n {pattern_sample}")

        if 'is_asset1' in vals and not vals.get('is_asset1'):
            vals['asset_id'] = "No Label"
        return super(AssetMng, self).write(vals)

    # #############################################################################
    @api.model
    @api.onchange('state')
    def _access_rule(self):
        if self.env.user.has_group('asset_mng.group_asset_mng_admins'):
            self.state = 'write'
            # print("1:",self.state)
        else:
            self.state = 'read'
            # print("2:",self.state)

    # #############################################################################
    @api.onchange('company')
    def _onchange_company(self):
        domain = {'location': [('company_id', '=', self.company.id)],
                  'employee': [('company_id', '=', self.company.id)]
                  }
        self.location = ""
        self.employee = ""
        return {'domain': domain}

    # #############################################################################
    @api.onchange('location')
    def _onchange_work_location_id(self):
        domain = {'place': [('work_location', '=', self.location.id)]}
        self.place = ""
        return {'domain': domain}


# #############################################################################
class AssetMngProduct1(models.Model):
    _name = 'asset_mng.product'
    _description = 'asset_mng.product'

    _rec_name = 'product'

    product = fields.Char(string="Product")

    def print_asset_reprot_group(self):
        print(Fore.GREEN, '##################### print_asset_reprot_group')
        print(Fore.GREEN, '##################### print_asset_reprot_group')
        print(self.env.context)


# #############################################################################
class AssetMngBrand(models.Model):
    _name = 'asset_mng.brand'
    _description = 'asset_mng.brand'

    _rec_name = 'brand'

    brand = fields.Char(string="Brand")


# #############################################################################
class AssetMngModel(models.Model):
    _name = 'asset_mng.model'
    _description = 'asset_mng.model'

    _rec_name = 'model'

    model = fields.Char(string="Model")


# #############################################################################
class AssetMngPerformance(models.Model):
    _name = 'asset_mng.performance'
    _description = 'asset_mng.performance'

    _rec_name = 'performance'
    _order = 'performance_level'

    performance = fields.Char(string="Performance")
    performance_level = fields.Integer(string="Performance Level")