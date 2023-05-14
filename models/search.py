# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import fields, models, api
'''

< record
id = "asset_mng_search_locations"
model = "ir.ui.view" >
< field
name = "name" > asset_mng.asset_mng < / field >
< field
name = "model" > asset_mng.asset_mng < / field >
< field
name = "inherit_id"
ref = "asset_mng.asset_mng_list_search" / >
< field
name = "arch"
type = "xml" >
< xpath
expr = "//filter[@name='useable_assets']"
position = "after" >
< filter
string = "Tehran"
name = "location_1"
domain = "[('location', '=', 1)]" / >
< / xpath >
< / field >
< / record >

'''