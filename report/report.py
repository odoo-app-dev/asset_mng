# -*- coding: utf-8 -*-
import datetime
import pytz
from datetime import  timedelta
from odoo import models, fields, api
import jdatetime
from colorama import Fore
import base64
import numpy as np


# ########################################################################################
class AssetMngPcListReport(models.AbstractModel):
    _name = 'report.asset_mng.asset_mng_device_list_report'
    _description = 'PC list'
    @api.model
    def _get_report_values(self, docids, data=None):
        print(Fore.GREEN, '##################### _get_report_values')
        print()
        print(Fore.BLUE, 'docids:', docids)
        print()
        print(Fore.BLUE, 'data:', data)
        print()
        location_name = ''
        data_table = []
        context = self.env.context
        timezone = context.get('tz')
        time_z = pytz.timezone(context.get('tz'))
        date_time = datetime.datetime.now(time_z)
        form_data = data.get('form_data')
        if context.get('lang') == 'fa_IR':
            date_time = jdatetime.datetime.fromgregorian(datetime=date_time)
            date_time = [{'date': date_time.strftime("%Y/%m/%d"),
                  'time': date_time.strftime("%H:%M:%S")}]
        else:
            date_time = [{'date': date_time.strftime("%Y/%m/%d"),
                  'time': date_time.strftime("%H:%M:%S")}]
        if docids:
            assets = self.env['asset_mng.asset_mng'].search([('id', 'in', docids)])
            for asset in assets:

                data_table.append([asset.parent_department.id,
                                   asset.parent_department.name,
                                   asset.product.id,
                                   asset.product.product,
                                   asset.employee.name
                                   ])

            # print(Fore.CYAN, data_table, Fore.RESET)
            # print(Fore.BLUE, context, Fore.RESET)
        else:

            report = [['Department', 'PC', 'Printer'],  # table headers
                      [
                          ['Engineering', 10, 2],           # table rows
                          ['ICT', 5, 1],
                          ['Finance', 4, 1],
                        ]
                    ]

            asset_mng = self.env['asset_mng.asset_mng']
            hr_department = self.env['hr.department']
            # print(Fore.RED, "form_data.get('location')", form_data.get('location'))
            # print(Fore.RED, "form_data.get('location')[0]",form_data.get('location')[0],)
            if form_data.get('location'):
                location = self.env['hr.work.location'].search([('id', '=', form_data.get('location')[0])])
                location_name =location.name
                if form_data.get('department'):
                    departments = hr_department.search([('id', 'in', form_data.get('department'))])
                    # departments = self.env['hr.department'].search([('id', 'in', form_data.get('department'))])
                else:
                    departments = hr_department.search([])
                    # departments = self.env['hr.department'].search([])
                if form_data.get('product'):
                    products = self.env['asset_mng.product'].search([('id', 'in', form_data.get('product'))], order='id')
                else:
                    products = self.env['asset_mng.product'].search([], order='product')

                # add list of products as Table Header
                table_header = ['Departments'] if products else []
                for product in products:
                    table_header.append(product.product)
                data_table.append(table_header)

                # add list of products as Table Body
                for department in departments:
                    table_row = [department.name]
                    for product in products:
                        count = asset_mng.search_count([('location', '=', location.id),
                                                  ('parent_department', '=', department.id),
                                                  ('product', '=', product.id),])
                        table_row.append(int(count))

                    data_table.append(table_row)

                # add list of products as Table Footer
                table_footer = ['Total']
                footer = data_table
                footer = np.delete(footer, 0, axis=0)
                footer = np.delete(footer, 0, axis=1).astype(int)
                table_footer.extend(np.sum(footer, axis=0))
                data_table.append(table_footer)
            else:
                location_name = ''
                data_table = [[], []]


        return {
            'doc_ids': docids,
            'doc_model': 'asset_mng.asset_mng',
            'data': data,
            # 'docs': docs,
            'date_time': date_time,
            'location': location_name,
            'data_table': data_table,
            # 'count': len(emplpyee_ids) - 1,
            # 'work_location': line.work_location.name,
            # 'work_places_count': work_places_count,
            # 'total_count': total_count,
            # 'time': time,
            # 'lines': res,
            # 'sum_credit': self._sum_credit,
            # 'sum_debit': self._sum_debit,
            # 'get_taxes': self._get_taxes,
            # 'company_id': self.env['res.company'].browse(
            #     data['form']['company_id'][0]),
        }




