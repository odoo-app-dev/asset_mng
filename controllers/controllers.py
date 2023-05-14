# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request

from datetime import datetime
import json


class AssetMng(http.Controller):
    @http.route('/asset_mng/barcode', type='http', auth='user',csrf=False, website=True)
    def index(self, **kw):
        is_asset_mng_user = request.env.user.has_group('asset_mng.group_asset_mng_users')
        if is_asset_mng_user:
            return http.request.render('asset_mng.barcode', { # 'web_data': web_data,
                                                            })
        else:
            return request.render('asset_mng.no_access_page', { # 'web_data': web_data,
                                                            })

    @http.route('/asset_mng/barcodeout', type='json',methods=['POST'], auth='public', cors="*", csrf=False, website=True,)
    def code_out(self,):
        # is_user_public = request.env.user.has_group('base.group_public')
        # print(50 * "#")
        # for key, value in (request.httprequest.environ).items():
        #     print(key, " : ", value)
        data = json.loads(request.httprequest.data)
        # print(f'\n data: {data}')
        is_asset_mng_user = request.env.user.has_group('asset_mng.group_asset_mng_users')
        if is_asset_mng_user:
            # todo: sudo() must be omited. user access to the module would be needed to do the search
            try:
                asset = http.request.env['asset_mng.asset_mng'].search([('asset_id', '=', data.get('code'))])
                print(f'\n Code: {data.get("code")} - asset: ', asset)
                if asset:
                    asset_info = {"name": asset.employee.name,
                                  "location": asset.location.name,
                                  "product": asset.product.product,
                                  "availability": asset.availability,
                                  "work_place": asset.place.work_place,

                                  }
                    asset_info = json.dumps(asset_info)
                    # asset_info = json.loads(json.dumps(asset_info))
                    print('asset_info: ',asset_info)
                else:
                    asset_info = '{"name":"Not Found"}'
                # asset_info = json.loads(asset_info)
                print('asset_info: ', asset_info)
            except Exception as err:
                print('\n Access Failed', err)
                asset_info = '{"name":"Access Failed"}'
        else:
            asset_info = '{"name":"Access Denied"}'

        return str(asset_info)

#     @http.route('/asset_mng/asset_mng/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('asset_mng.listing', {
#             'root': '/asset_mng/asset_mng',
#             'objects': http.request.env['asset_mng.asset_mng'].search([]),
#         })

#     @http.route('/asset_mng/asset_mng/objects/<model("asset_mng.asset_mng"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('asset_mng.object', {
#             'object': obj
#         })
